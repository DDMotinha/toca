const express = require('express')
const router = express.Router()
const Party = require('../../models/party');

router.get('/', async (req, res) => {
    try {
      const party = await Party.findAll();
      res.json(party);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
  try {
    const party = await Party.create(req.body);
    res.status(201).json(party);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const party = await Party.findByPk(req.params.id);
    if (party) {
      res.json(party);
    } else {
      res.status(404).json({ error: 'Party not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, partylink, estilos, cidade, estado, partydate } = req.body;

  try {
    const party = await Party.findByPk(id);

    if (!party) {
      return res.status(404).json({ message: 'Festa não encontrada' });
    }

    party.nome = nome;
    party.partylink = partylink;
    party.estilos = estilos;
    party.cidade = cidade;
    party.estado = estado;
    party.partydate = partydate;

    await party.save();

    res.json(party);
  } catch (error) {
    console.error('Erro ao atualizar a festa:', error);
    res.status(500).json({ message: 'Erro ao atualizar a festa' });
  }
});

module.exports = router
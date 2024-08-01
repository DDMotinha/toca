const express = require('express')
const router = express.Router()
const User = require('../../models/user');

router.get('/', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, cidade, estado, estilos } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    user.nome = nome;
    user.email = email;
    user.cidade = cidade;
    user.estado = estado;
    user.estilos = estilos;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar o usuário' });
  }
});


module.exports = router
-- Dropar a tabela se ela existir
DROP TABLE IF EXISTS sys.party;

-- Criar a tabela novamente com as colunas especificadas
CREATE TABLE sys.party (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    partylink VARCHAR(255),
    estilos VARCHAR(255)[],
    cidade VARCHAR(255),
    estado VARCHAR(2),
    partydate DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir um registro fictício na tabela
INSERT INTO sys.party (nome, partylink, estilos, cidade, estado, partydate)
VALUES (
    'Festa de Aniversário',
    'https://example.com/party-link',
    ARRAY['eletrônica', 'pop'],
    'Rio de Janeiro',
    'RJ',
    '2024-12-31'
);
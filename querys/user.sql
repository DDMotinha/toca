-- Dropar a tabela se ela existir
DROP TABLE IF EXISTS sys.user;

-- Criar a tabela novamente com as colunas especificadas
CREATE TABLE sys.user (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cidade VARCHAR(255),
    estado VARCHAR(2),
    estilos VARCHAR(255)[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir um registro fictício na tabela
INSERT INTO sys.user (nome, email, cidade, estado, estilos)
VALUES (
    'João da Silva', 
    'joao.silva@example.com', 
    'São Paulo', 
    'SP', 
    ARRAY['rock', 'jazz', 'blues']
);
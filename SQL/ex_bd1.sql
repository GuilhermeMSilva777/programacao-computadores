-- DROP DATABASE "UNIFACEF-BD1";
-- exclui o database

-- CRIAR DATABASE
--CREATE DATABASE "UNIFACEF_BD1"
--TEMPLATE = template0
--ENCODING 'UTF-8'
--CONNECTION LIMIT 100;

--CRIANDO TABELA DEPARTAMENTO
CREATE TABLE tb_departamento(
cod_departamento	INTEGER,
nm_departamento		VARCHAR(40),
CONSTRAINT pk_tb_depto_cod_depto PRIMARY KEY(cod_departamento)
);

SELECT *
FROM tb_departamento;

--INSERINDO VALORES A TABELA DEPARTAMENTO
INSERT INTO tb_departamento(cod_departamento, nm_departamento)
VALUES
(10, 'Computação'),
(15, 'Medicina'),
(20, 'Administração');

CREATE TABLE tb_curso(
cod_curso			INTEGER,
nm_curso			VARCHAR(40),
CONSTRAINT pk_tb_curso_cod_curso PRIMARY KEY(cod_curso)
);

SELECT *
FROM tb_curso;

INSERT INTO tb_curso(cod_curso, nm_curso)
VALUES
(1, 'Ciencia da computação'),
(2, 'Sistema de informação'),
(3, 'Engenharia de software');

CREATE TABLE tb_aluno(
cod_aluno			INTEGER, 
nm_aluno			VARCHAR(40),
cod_curso			INTEGER,
CONSTRAINT pk_tb_aluno_cod_aluno PRIMARY KEY(cod_aluno),
CONSTRAINT fk_tb_aluno_cod_curso FOREIGN KEY(cod_curso)
	REFERENCES tb_curso(cod_curso)
);

SELECT *
FROM tb_aluno;

INSERT INTO tb_aluno(cod_aluno, nm_aluno, cod_curso)
VALUES
(1, 'Alex Sousa', 1),
(2, 'Amanda Estela', 1),
(3, 'Bruno Lima', 2),
(4, 'Bryan Seminate', 3);

--NOMEANDO E SELECIONANDO AS COLUNAS
SELECT 	a.nm_aluno "Nome Aluno",
		c.nm_curso "Nome do Curso"
FROM tb_aluno a
INNER JOIN tb_curso c ON(a.cod_curso = c.cod_curso);

CREATE TABLE tb_disciplina(
cod_disciplina		INTEGER,
nm_disciplina		VARCHAR(40),
cod_departamento	INTEGER,
creditos			INTEGER,
CONSTRAINT pk_tb_disc_cod_disc PRIMARY KEY(cod_disciplina),
CONSTRAINT fk_tb_disc_cod_depto FOREIGN KEY(cod_departamento)
	REFERENCES tb_departamento(cod_departamento)
);

SELECT *
FROM tb_disciplina;

INSERT INTO tb_disciplina(cod_disciplina, nm_disciplina, cod_departamento, creditos)
VALUES
( 100, 'Banco de dados I', 10, 80),
( 110, 'Banco de dados II', 10, 80),
( 120, 'Programação com BD', 10, 80),
( 130, 'Ciência de dados', 10, 80);

CREATE TABLE tb_disciplina_curso(
cod_disciplina		INTEGER,
cod_curso			INTEGER,
CONSTRAINT pk_tb_dc_cod_curso_cod_disc PRIMARY KEY(cod_curso,cod_disciplina),
CONSTRAINT fk_tb_dc_cod_curso FOREIGN KEY(cod_curso)
	REFERENCES tb_curso(cod_curso),
CONSTRAINT fk_tb_dc_cod_disc FOREIGN KEY(cod_disciplina)
	REFERENCES tb_disciplina(cod_disciplina)
);

SELECT *
FROM tb_disciplina_curso;

INSERT INTO tb_disciplina_curso(cod_disciplina, cod_curso)
VALUES
(100, 1),
(110, 1),
(120, 1);

CREATE TABLE tb_disciplina_pre_requisito(
cod_disciplina_liberada            	INTEGER,
cod_disciplina_liberadora         	INTEGER,
CONSTRAINT pk_tb_dpr_liberada_liberadora 
    PRIMARY KEY(cod_disciplina_liberada, cod_disciplina_liberadora),
CONSTRAINT fk_tb_dpr_liberada FOREIGN KEY(cod_disciplina_liberada)
    REFERENCES tb_disciplina(cod_disciplina),
CONSTRAINT fk_tb_dpr_liberadora FOREIGN KEY(cod_disciplina_liberadora)
    REFERENCES tb_disciplina(cod_disciplina)
);

INSERT INTO tb_disciplina_pre_requisito(cod_disciplina_liberada, cod_disciplina_liberadora)
VALUES
(110, 100),
(120, 110),
(120, 120);
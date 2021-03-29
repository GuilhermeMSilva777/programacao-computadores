
CREATE TABLE tb_pedidos(
nr_pedido			INTEGER,
ds_pedido			VARCHAR(60),
dt_pedido	 		TIMESTAMP,
CONSTRAINT pk_tb_pedidos_nr_pedido PRIMARY KEY(nr_pedido)
);
	
CREATE TABLE tb_itens(
nr_pedido			INTEGER,
nr_item				INTEGER,
nm_produto			VARCHAR(60),
quantidade 			INTEGER,
CONSTRAINT pk_tb_itens_pedido_item PRIMARY KEY(nr_pedido, nr_item),
CONSTRAINT fk_tb_itens_item FOREIGN KEY(nr_pedido) REFERENCES tb_pedidos(nr_pedido)
);

CREATE TABLE tb_empregados(
rg					VARCHAR(11),
nm_empregado		VARCHAR(60),
idade				INTEGER,
plano_saude 		VARCHAR(60),
rua 				VARCHAR(60),
nr 					VARCHAR(5),
cidade 				VARCHAR(60),
CONSTRAINT pk_tb_empregados_rg PRIMARY KEY (rg)
);
	
CREATE TABLE tb_telefones(
rg					VARCHAR(11),
numero				VARCHAR(15),
CONSTRAINT pk_tb_telefones_rg_nr PRIMARY KEY (rg, numero),
CONSTRAINT Fk_tb_telefones_rg FOREIGN KEY (rg) REFERENCES tb_empregados(rg)
);

CREATE TABLE tb_servidores(
cpf 				VARCHAR(11),
nm_servidor			VARCHAR(60),
CONSTRAINT pk_tb_servidores_cpf PRIMARY KEY (cpf)
);

CREATE TABLE tb_funcionarios(
cpf 				VARCHAR(11),
ds_funcao			VARCHAR(60),
CONSTRAINT pk_tb_func_cpf PRIMARY KEY (cpf),
CONSTRAINT fk_tb_func_cpf FOREIGN KEY (cpf) REFERENCES tb_servidores(cpf)
);

CREATE TABLE tb_professores(
cpf					VARCHAR(11),
titulacao			VARCHAR(30),
categoria			VARCHAR(30),
CONSTRAINT pk_tb_professores_cpf PRIMARY KEY(cpf),
CONSTRAINT fk_tb_professores_cpf FOREIGN KEY(cpf) REFERENCES tb_servidores(cpf)
);

CREATE TABLE tb_pessoas(
codigo 				INTEGER,
nm_pessoa 			VARCHAR(60),
CONSTRAINT pk_tb_pessoas_codigo PRIMARY KEY (codigo)
);

CREATE TABLE tb_cnh(
numero 				INTEGER,
dt_expedicao		DATE,
validade 			DATE,
categoria			VARCHAR(3),
codigo				INTEGER CONSTRAINT uq_tb_cnh_codigo UNIQUE,
dt_retirada 		DATE,
CONSTRAINT pk_tb_cnh_nr PRIMARY KEY(numero),
CONSTRAINT fk_tb_cnh_codigo FOREIGN KEY(codigo) REFERENCES tb_pessoas(codigo)
);

INSERT INTO tb_pessoas(codigo, nm_pessoa)
VALUES
(1, 'Alex'),
(2, 'Andre');

SELECT *
FROM tb_pessoas;

INSERT INTO tb_cnh(numero, dt_expedicao, validade, categoria, codigo, dt_retirada)
VALUES
(100, '05/03/2021', '05/03/2021', 'B', 1, '19/03/2021');

SELECT *
FROM tb_cnh;

CREATE TABLE tb_homens(
rg					VARCHAR(11),
nm_homem			VARCHAR(60),
CONSTRAINT pk_tb_homens_rg PRIMARY KEY (rg)
);

CREATE TABLE tb_mulheres(
rg					VARCHAR(11),
nm_mulher  			VARCHAR(60),
CONSTRAINT pk_tb_mulheres_rg PRIMARY KEY (rg)
);

CREATE TABLE tb_casamentos(
rg_homem			VARCHAR(11),
rg_mulher			VARCHAR(11),
dt_casamento		DATE,
CONSTRAINT pk_tb_casamentos_rgh PRIMARY KEY (rg_homem),
CONSTRAINT fk_tb_casamentos_rgm FOREIGN KEY (rg_mulher) REFERENCES tb_mulheres(rg),
CONSTRAINT uq_tb_casamentos_rgm UNIQUE (rg_mulher)
);

--CASCADE quando tem vinculo com outras
DROP TABLE tb_empregados CASCADE;

CREATE TABLE tb_departamentos(
cod_depto			INTEGER,
nm_depto			VARCHAR(60),
CONSTRAINT pk_td_departamentos_cod_depto PRIMARY KEY(cod_depto)
);

CREATE TABLE tb_empregados(
cpf					VARCHAR(11),
nm_empregado		VARCHAR(60),
cod_depto			INTEGER CONSTRAINT nn_tb_empregados_cod_depto NOT NULL,
dt_lotacao			DATE,
CONSTRAINT pk_tb_empregados_cpf PRIMARY KEY(cpf),
CONSTRAINT fk_tb_empregados_cod_depto FOREIGN KEY(cod_depto)
	REFERENCES tb_departamentos(cod_depto)
);

SELECT *
FROM tb_departamentos;

INSERT INTO tb_departamentos(cod_depto, nm_depto)
VALUES
(1, 'Computacao'),
(2, 'Adiministracao'),
(3, 'Engenharia Civil');

SELECT *
FROM tb_empregados;

INSERT INTO tb_empregados(cpf, nm_empregado, cod_depto, dt_lotacao)
VALUES
('11223344', 'Alex Sanabio', 1, '23/03/2021');

DROP TABLE tb_pessoas CASCADE;

CREATE TABLE tb_pessoas(
rg					VARCHAR(11),
nm_pessoa			VARCHAR(30),
CONSTRAINT pk_tb_pessoas_rg PRIMARY KEY(rg)	
);

CREATE TABLE tb_automoveis(
chassi 				VARCHAR(17),
modelo				VARCHAR(30),
ano					INTEGER,
CONSTRAINT pk_tb_automoveis_chassi PRIMARY KEY(chassi)
);

CREATE TABLE tb_posses(
rg					VARCHAR(11),
chassi 				VARCHAR(17),
dt_compra			DATE,
CONSTRAINT pk_tb_posses_chassi PRIMARY KEY(chassi),
CONSTRAINT fk_tb_posses_rg FOREIGN KEY(rg) REFERENCES tb_pessoas(rg),
CONSTRAINT fk_tb_posses_chassi FOREIGN KEY(chassi) REFERENCES tb_automoveis(chassi)
);

SELECT *
FROM tb_posses;

DROP TABLE tb_empregados CASCADE;

CREATE TABLE tb_empregados(
rg					VARCHAR(11),
nm_empregado		VARCHAR(60),
CONSTRAINT pk_tb_empregados_rg PRIMARY KEY(rg)
);

CREATE TABLE tb_projetos(
codigo				INTEGER,
nm_projeto			VARCHAR(60),
CONSTRAINT pk_tb_projetos_codigo PRIMARY KEY(codigo)
);

CREATE TABLE tb_participacao(
rg					VARCHAR(11),
codigo				INTEGER,
dt_inicio			DATE,
CONSTRAINT pk_tb_particip_rg_codigo PRIMARY KEY(rg, codigo),
CONSTRAINT fk_tb_particip_rg FOREIGN KEY(rg)
	REFERENCES tb_empregados(rg),
CONSTRAINT fk_tb_particip_cod FOREIGN KEY(codigo)
	REFERENCES tb_projetos(codigo)
);

DROP TABLE tb_empregados CASCADE;

CREATE TABLE tb_empregados(
rg					VARCHAR(11),
nm_empregado		VARCHAR(60),
idade				INTEGER,
rg_gerente			VARCHAR(11),
CONSTRAINT pk_tb_empregados_rg PRIMARY KEY(rg),
CONSTRAINT fk_tb_empregados_rg_gerente FOREIGN KEY(rg_gerente)
	REFERENCES tb_empregados(rg)
);

SELECT *
FROM tb_empregados;

INSERT INTO tb_empregados(rg, nm_empregado, idade, rg_gerente)
VALUES
('1', 'Alex', 20, NULL),
('2', 'Andre', 19, '1'),
('3', 'Amanda', 20, '2'),
('4', 'Bruno', 19, '3'),
('5', 'Guilherme', 21, '4');

SELECT g.nm_empregado || ' gerencia o(a) ' || e.nm_empregado "Quem é o gerente de quem ?"
FROM tb_empregados g
INNER JOIN tb_empregados e ON(e.rg_gerente = g.rg);

CREATE TABLE tb_clientes (
rg					VARCHAR(11),
nm_cliente			VARCHAR(60),
CONSTRAINT pk_tb_clientes_rg PRIMARY KEY(rg)
);

CREATE TABLE tb_contas (
nm_conta			INTEGER,
ns_conta			VARCHAR(30),
CONSTRAINT pk_tb_contas_nm_conta PRIMARY KEY(nm_conta)
);

CREATE TABLE tb_correntistas(
rg					VARCHAR(11),
nm_conta			INTEGER,
CONSTRAINT pk_tb_correntistas_rg_nm_conta PRIMARY KEY(rg, nm_conta),
CONSTRAINT fk_tb_correntistas_rg FOREIGN KEY(rg) REFERENCES tb_clientes(rg),
CONSTRAINT fk_tb_correntistas_nm_conta FOREIGN KEY(nm_conta) REFERENCES tb_contas(nm_conta)
);

CREATE TABLE tb_cartoes_magneticos(
nr_cartao			INTEGER,
dt_expedicao		DATE,
rg					VARCHAR(11),
nm_conta			INTEGER,
CONSTRAINT pk_tb_cm_nr_cartao PRIMARY KEY(nr_cartao),
CONSTRAINT fk_tb_cm_rg FOREIGN KEY(rg) REFERENCES tb_clientes(rg),
CONSTRAINT fk_tb_cm_nm_conta FOREIGN KEY(nm_conta)
	REFERENCES tb_contas(nm_conta)
);


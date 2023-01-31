# Projeto Blog API

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.

<details>
  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! Para acessar rotas da aplicação é necessário login.
  
  A aplicação foi desenvolvida com:

  - `Node.js`
  - `Sequelize`
  - `JWT`
  - `Arquitetura MSC`
  - `docker`
  - `docker-compose`
  - `MySql`
  - `Express`;

  Diagrama ER e Entidades:

  ![DER](./public/der.png) 

</details>
<details>
  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  ** :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

- [ ] `docker-compose up -d --build`
- [ ] `docker exec -it blogs_api bash`
- [ ] `npm install`
- [ ] `npm run prestart`
- [ ] `npm run seed`
- [ ] `npm run debug`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- [ ] `npm install`
- [ ] `npm run prestart`
- [ ] `npm run seed`
- [ ] `npm run debug`

</details>

<details>
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />
  
  - `Docker`;
  - `docker-compose`;
  - `Mysql`;
  - `Node.js`;
  - `Sequelize`;
  - `Express`;
  - `JWT`;

</details>
<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  - Utilizar o `Sequelize` para integrar o banco de dados com sua aplicação;
  - Criar migrações utilizando o `Sequelize`;
  - Criar seeds utilizando o `Sequelize`;
  - Utilizar o sequelize para criar relacionamento 1:1 entre tabelas;
  - Utilizar o sequelize para criar relacionamento 1:N entre tabelas;
  - Utilizar o conceito de `transactions` para realizar operações atômicas no banco de dados com sequelize;
  - Utilizar o sequelize para criar relacionamento N:N entre tabelas;
  - Utilizar métodos que simulam comandos de integração de tabelas;
  - Gerar tokens a partir de informações como login, nome ou email;
  - Autenticar pessoas usuárias utilizando o token `JWT`.
  - Autorizar o acesso a rotas do `Express`, usando o token `JWT`.

</details>

</details>

<details>
  <summary><strong>Devs responsáveis</strong></summary>

  - [@Murilo-MRS](https://github.com/Murilo-MRS)

</details>
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
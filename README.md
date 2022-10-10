# **[Tesserato Back-end Challenge] Regras e requisitos**

## Techs:
  * TypeScript;
  * Adonis v5;
  * PostgreSQL (opcional mas com preferência);
 
## Escopo:
  * Você terá que desenvolver um software para um coworking, aonde será necessário cadastrar empresas e os funcionários delas;
  * O coworking criará uma **company** e vincular um **employer** a ela;
  * Uma **company** pode ter **NO MÍNIMO 1 *user*** ou mais, e na requisição de criação desta empresa, pode (ou não) ser enviado uma array de ids para ja vincular os **users**;

  * ### Tabelas:
    * Companies:
      * ID - PK;
      * name;
      * is_enabled: boolean;
    * Users:
      * ID - PK;
      * name;
      * is_enabled;
      * company_id - FK;
  * ### Criar model com as relations bi-direcionais certas;
  * ### Requisições:
    * CompanyController:
      * list;
      * create:
        * name;
        * users?: number[];
      * update/:ID:
        * name;
        * users?: number[] (necessário deixar vinculado somente os usuários que estiverem na array);
      * enable_or_disable/:ID (necessário desabilitar/habilitar todos os usuários vinculados);
      * delete/:ID;
    * UsersController:
      * list;
      * create:
        * name;
        * employer?: number;
      * update/:ID:
        * name;
        * employer?: number;
      * enable_or_disable/:ID;
      * delete/:ID;
    * DashboardController:
      * list-companies (trazer usuários desta empresa junto)
        - COM OPÇÕES DE ORDENAÇÃO:
          * asc (name);
          * desc (name);
          * asc (qtd users);
          * desc (qtd users);
      * list-users (trazer empresa junto)
        - COM OPÇÕES DE ORDENAÇÃO;
          * asc (name);
          * desc (name);

##

* ### Criar fork deste repositório para iniciar o projeto.
* ### A estrutura de commits será analisada.

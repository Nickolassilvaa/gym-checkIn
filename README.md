# App

GymPass style app.

## RF (Requisitos funcionais).

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o numero de check-ins - realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histporico de - check-ins;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma - academia;
- [ ] Deve ser possível validar o check-in do um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RN (Regra de negócio).

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in so pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode se validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNF (Requisitos não-funcionais).

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PosdtegreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 items por página;
- [ ] O usuário deve ser identificado com JWT (JSON Web Token);

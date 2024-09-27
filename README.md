<div align="center">
  <img width="200" height="200" src="https://github.com/AntLacerda/n-report-app/blob/main/src/assets/images/logo.png" alt="star-wars"/>
  <h1 align="center" id="titulo">N Report APP</h1>
  <p align="center">Uma aplicação para gerenciamento de denúncias criminais, com funcionalidades de registro, visualização em mapas e gerenciamento de ocorrências.</p>
</div>

<div align="center" id="badges">

  [![GitHub License](https://img.shields.io/github/license/AntLacerda/n-report-app?style=for-the-badge)](https://github.com/AntLacerda/n-report-app/blob/main/LICENSE)
  ![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINISHED&color=GREEN&style=for-the-badge)
  [![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/AntLacerda/n-report-app?style=for-the-badge&color=purple)](https://github.com/AntLacerda/n-report-app/issues?q=is%3Aissue+is%3Aclosed)
</div>

# Índice 
* [Badges](#badges)
* [Índice](#índice)
* [Sobre o Projeto](#sobreProjeto)
* [Técnologias Usadas](#techs)
* [Executar o Projeto](#execute)
* [Funcionalidades](#features)
* [Capturas de Tela](#screenshots)
* [Como Contribuir](#howToContribute)
* [Autor](#author)

<h1 id="sobreProjeto">Sobre o Projeto</h1>

O **N Report** é um aplicativo de gerenciamento de denúncias criminais. Ele permite que os usuários registrem ocorrências informando a localização do crime, um título, uma breve descrição, e anexem imagens relacionadas. Além disso, é possível visualizar todas as ocorrências em um mapa, com base na localização atual do usuário, ou navegar por diferentes regiões para ver relatos em outros locais.

O aplicativo se comunica com uma API desenvolvida especificamente para a persistência e obtenção dos dados, tanto dos usuários quanto das denúncias. Ele possui dois níveis de permissões: usuário comum e admin. O usuário comum pode se cadastrar pelo aplicativo, registrar e visualizar denúncias no mapa, mas só pode editar ou excluir as denúncias que ele próprio criou. Já o **admin** tem acesso total, podendo visualizar, editar e excluir qualquer denúncia cadastrada no sistema.

Além de facilitar o registro de ocorrências criminais de maneira prática e acessível, o N Report pode ser uma ferramenta valiosa para promover a segurança em comunidades. Ele permite que as pessoas se mantenham informadas sobre crimes ocorridos em sua área ou em outras regiões de interesse, ajudando na criação de uma rede colaborativa de vigilância e conscientização. Governos, autoridades locais e organizações de segurança também podem utilizar o aplicativo para monitorar áreas de maior incidência criminal, tomar decisões mais informadas e alocar recursos de maneira mais eficiente.

<a href="https://github.com/Joao-Darwin/n-report-api" target="_blank">API</a>

<h1 id="techs">Técnologias Usadas</h1>
  
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  
  ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

   ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  
  ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
  
  ![Android Studio](https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white)

<h1 id="execute">Executar o Projeto</h1>
Pré-requisitos: <strong>Node JS (14.x ou superior), Expo CLI, Emulador Android ou iOS</strong>

<strong></br>OBS: Certifique-se que a API está em execução</strong>

### Clonar repositório
```bash
git clone https://github.com/AntLacerda/n-report-app n-report-app
```
### Entrar na pasta do projeto
```bash
cd n-report-app
```
### Clonar arquivos com variáveis de ambiente
```bash
cp .env.example .env
```
### Editar variáveis de ambiente
```bash
# Exemplo de variáveis de ambiente:
API_URL=http://192.168.1.x:3000
```
OBS: O IP colocado aqui é padrão do emulador do Android Studio, caso você execute pelo Expo no celular, coloque o IP do seu computador na rede local (192.168.1.x). A porta é a que a <a href="https://github.com/Joao-Darwin/n-report-api" target="_blank">API</a> está rodando
### Instalar depedências do projeto
```bash
npm i
```
### Executar o projeto
```bash
npm run start
```

<h1 id="features">Funcionalidades</h1>

* Registro de ocorrências com localização, descrição e imagens.
* Visualização de ocorrências em um mapa baseado na localização atual do usuário.
* Navegação no mapa para ver ocorrências em diferentes regiões.
* Gerenciamento de permissões: usuários comuns e administradores.

<h1 id="screenshots">Capturas de Tela</h1>

<div align="center">
  <img src="https://github.com/user-attachments/assets/2b06ae71-ed33-47d8-b5f4-46ae0c7a1e68" width="250">
  <img src="https://github.com/user-attachments/assets/f6218dfd-8314-4fd6-b9b9-929e48cb2aa9" width="250">
  <img src="https://github.com/user-attachments/assets/033007ae-2944-4009-bced-6594f5722ed8" width="250">
  <img src="https://github.com/user-attachments/assets/32fed79f-1ce0-4e67-8d73-54c29c30f501" width="250">
  <img src="https://github.com/user-attachments/assets/4e2daae0-7181-4d7c-bda4-8b09fb9fb2e8" width="250">
</div>

<h1 id="howToContribute">Como Contribuir</h1>
Se você quiser contribuir com o N Report, sinta-se à vontade para abrir uma issue ou enviar um pull request. Toda ajuda é bem-vinda! Siga os seguintes passos:

1. Fork o repositório.
2. Crie uma nova branch: `git checkout -b feature/NRA-{Número da Issue}`.
3. Faça suas alterações e commite: `git commit -m 'Minha melhoria'`.
4. Envie o pull request.

<h1 id="author">Autores</h1>
<div>
  <a href="https://github.com/Joao-Darwin" target="_blank">João Darwin</a><br>
  <a href="https://github.com/AntLacerda" target="_blank">Antônio Lacerda</a><br>
  <a href="https://github.com/eduardo-whitehurst" target="_blank">Eduardo Dênis</a>
</div>

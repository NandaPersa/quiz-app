# Quiz App

<img src="/public/quiz-logo.png" />

| ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)                                      | ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) | ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) |

## Descrição do Projeto

Bem-vindo ao Quiz App! Este projeto faz parte de uma iniciativa para tornar as avaliações escolares mais divertidas e interativas. A professora Sônia, do 6º ano, teve a ideia de criar um aplicativo de perguntas e respostas relacionado ao conteúdo ensinado em sala de aula, para aumentar a motivação dos alunos e diminuir a evasão escolar.

Este repositório contém o código front-end do quiz.

## Screenshots

Veja abaixo a demonstração:

<img src="/public/quiz home.png" />

<img src="/public/quiz question.png" />

<img src="/public/quiz result.png" />

## Stack utilizada

**Front-end:** Nextjs, Recoil, MUI Core, Saas, React Hook Form, Zod, Prettier, Eslint, Jest.

## Instalação

Para realizar a instalação local siga os seguintes passos:

1. Clone o repositório
   ```sh
   git clone git@github.com:NandaPersa/quiz-app.git
   ```
2. Entre na pasta raiz do projeto com os seguintes comandos:
   ```sh
   cd quiz-app
   ```
3. E em seguida instale as dependências:
   ```sh
   npm install
   ```
4. Agora copie o arquivo ".env.example" para um arquivo ".env":

   ```sh
   cp .env.example .env
   ```

5. Edite o arquivo inserindo os dados que você deseja, a env **API_URL** recebe o link do backend que aplicação irá consumir. A env **NEXT_PUBLIC_API_BFF** é o endereço da api do frontend(BFF) que irá se comunicar com a api do backend.

   ```sh
   API_URL=https://test-quiz-app-backend.herokuapp.com
   NEXT_PUBLIC_API_BFF=http://localhost:3000
   ```

6. Para rodar a aplicação;
   ```sh
   npm run dev
   ```
7. No navegador acesse [http://localhost:3000](http://localhost:3000).

## Documentação de cores

| Cor                   | Hexadecimal                                                      |
| --------------------- | ---------------------------------------------------------------- |
| primary-strong        | ![#3f23cc](https://via.placeholder.com/10/3f23cc?text=+) #3f23cc |
| primary-base          | ![#6348e3](https://via.placeholder.com/10/6348e3?text=+) #6348e3 |
| color-neutral-soft    | ![#e0e2e4](https://via.placeholder.com/10/e0e2e4?text=+) #e0e2e4 |
| color-neutral-softer  | ![#fafafe](https://via.placeholder.com/10/fafafe?text=+) #fafafe |
| color-neutral-softest | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| color-alert-strong    | ![#a61216](https://via.placeholder.com/10/a61216?text=+) #a61216 |

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

## Aprendizados

Com este projeto aprendi a trabalhar usando o Recoil para gerenciar o estado da aplicação, aprendi a manipular formulários com o react hook forms e validar formulários com o zod. O principal desafio enfrentado nesse projeto foi entender o funcionamento do recoil e para superar esse desafio utilizei a documentação dele, fiz pesquisas em fóruns e na web.

export const BASE_COLORS = {
  gray: 'project-gray',
  red: 'project-red',
  blue: 'project-blue',
  blue2: 'project-blue2',
  blue3: 'project-blue3',
  violet: 'project-violet',
  purple: 'project-purple',
  purple2: 'project-purple2',
  purple3: 'project-purple3',
  green: 'project-green',
  orange: 'project-orange',
  orange2: 'project-orange2',
  green2: 'project-green2',
  green3: 'project-green3',
} as const

export interface projectRegistrationProps {
  id: number
  name: string
  image: string
  description: string
  link: string
  linkGitHub: string
  technologies: string[]
  color: keyof typeof BASE_COLORS
}

export const projectRegistration: projectRegistrationProps[] = [
  {
    id: 1,
    name: 'Habits Tracker',
    image: 'habitsTracker.jpg',
    description:
      'Rastreador de hábitos, projeto desenvolvido na trilha Ignite do NLW Setup do curso da Rocketseat. Monitore seu hábito através de registros diários.',
    link: 'https://a1exlima.github.io/rockeatSeat_Nlw_Setup_Habits_Tracker/',
    linkGitHub:
      'https://github.com/A1exLima/rockeatSeat_Nlw_Setup_Habits_Tracker',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple',
  },
  {
    id: 2,
    name: 'Flutuar Viagens',
    image: 'pacoteViagens.jpg',
    description:
      'Projeto de uma landing page, onde foi recriado uma aplicação a partir de um layout pronto no figma.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage2-intro-html-css',
    technologies: ['html', 'css'],
    color: 'violet',
  },
  {
    id: 3,
    name: 'Ambientes Únicos',
    image: 'ambientesUnicos.jpg',
    description:
      'Projeto de uma landing page, onde foi recriado uma aplicação a partir de um layout pronto no figma.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-correcao-bug/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-correcao-bug',
    technologies: ['html', 'css'],
    color: 'orange',
  },
  {
    id: 4,
    name: 'Rocket.sect',
    image: 'rocketSect.jpg',
    description:
      'Projeto de uma landing page, onde foi recriado uma aplicação a partir de um layout pronto no figma.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-avancado/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-avancado',
    technologies: ['html', 'css'],
    color: 'green2',
  },
  {
    id: 5,
    name: 'Treine.me',
    image: 'treineMe.jpg',
    description:
      'Projeto de uma landing page, onde foi recriado uma aplicação a partir de um layout pronto no figma.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-correcao-bug-2/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-correcao-bug-2',
    technologies: ['html', 'css'],
    color: 'blue2',
  },
  {
    id: 6,
    name: 'Formulário de Mentoria',
    image: 'formMentoria.jpg',
    description:
      'Formulário recriado a partir de um layout pronto do figma para cadastro e agendamento de mentoria.',
    link: 'https://a1exlima.github.io/rocketseat-stage3-criando-formularios-intermedirio/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-criando-formularios-intermedirio',
    technologies: ['html', 'css'],
    color: 'purple2',
  },
  {
    id: 7,
    name: 'Avaliação de Mentoria',
    image: 'avalMentoria.jpg',
    description:
      'Formulário recriado a partir de um layout pronto do figma para avaliação de uma mentoria',
    link: 'https://a1exlima.github.io/rocketseat-stage3-criando-formularios-avancado/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-criando-formularios-avancado',
    technologies: ['html', 'css'],
    color: 'orange2',
  },
  {
    id: 8,
    name: 'Tutorial Display Grid',
    image: 'tutorialGrid.jpg',
    description:
      'Tutorial gravado no Youtube, explicando como trabalhar com display grid. O CSS Grid é um sistema de estruturação de layout que o CSS nos fornece. Diferente do Flexbox, que apenas nos permite trabalhar em uma única dimensão, o CSS Grid nos permite configurar layouts em duas dimensões (linhas e colunas). A junção de linhas e colunas formam uma grade, o que dá o nome a esse sistema (Grid).',
    link: 'https://www.youtube.com/watch?v=iAGEaYjdJV8&t=13s',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-revisao-display-grid',
    technologies: ['html', 'css'],
    color: 'purple',
  },
  {
    id: 9,
    name: 'SPA Universe',
    image: 'spaUniverse.jpg',
    description:
      'Página recriada a partir de um layout pronto do figma que aborda conceitos de SPA, mapeamento de rotas, promises e orientação a objetos',
    link: 'https://universesparocketseat.netlify.app/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage6-desafio-spa-universe',
    technologies: ['html', 'css', 'javaScript'],
    color: 'blue3',
  },
  {
    id: 10,
    name: 'Discovery Portfólio',
    image: 'discPortfolio.jpg',
    description:
      'Página recriada a partir de um layout pronto do figma para prática de conceitos html e css seguindo o exemplo de portfólio.',
    link: 'https://a1exlima.github.io/rocketseat-discovery-projeto-portfolio/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-discovery-projeto-portfolio',
    technologies: ['html', 'css'],
    color: 'purple2',
  },
  {
    id: 11,
    name: 'Jogo da Adivinhação',
    image: 'game.jpg',
    description:
      'Nesse projeto foi recriado um jogo de adivinhação com intuito didático para praticar habilidades de lógica de programação, programação em JS e introduzir aos conhecimentos básicos e manipulação da DOM. Alguns desafios de melhoria do jogo foram feitos, como validações, mensagens de incentivo ao jogador e alertas, espero que aproveite e se divirta!',
    link: 'https://a1exlima.github.io/rocketseat-stage5-jogo-adivinhacao/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-jogo-adivinhacao',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple',
  },
  {
    id: 12,
    name: 'Tutorial Space Cream',
    image: 'spaceCream.jpg',
    description:
      'Tutorial gravado no Youtube. Projeto desenvolvido com o objetivo de criar um VÍDEO para o canal Alex CODE no Youtube e para que os alunos da turma 9 do curso, possam fazer uma análise comparativa do projeto desenvolvido, com o projeto desenvolvido por deles.',
    link: 'https://www.youtube.com/watch?v=bp9m3AzWmx0',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-revisao-video-space-cream',
    technologies: ['html', 'css'],
    color: 'green',
  },
  {
    id: 13,
    name: 'Jogo Biscoito da Sorte',
    image: 'game2.jpg',
    description:
      'Neste projeto foi criado um jogo chamado Biscoito da Sorte, no qual o usuário, a partir de um clique ou enter, abre um biscoito com a sua sorte do dia.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-desafio-biscoito-da-sorte/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-desafio-biscoito-da-sorte',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple3',
  },
  {
    id: 14,
    name: 'Calculadora IMC',
    image: 'calcImc.jpg',
    description:
      'Projeto desenvolvido para criar uma calculadora de índice de massa corpórea - IMC, no qual o usuário informa sua altura e peso, e o sistema calcula seu IMC o classificando em 5 graus.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-imc/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage5-exercicio-imc',
    technologies: ['html', 'css', 'javaScript'],
    color: 'blue',
  },
  {
    id: 15,
    name: 'Focus Timer',
    image: 'focusTimer.jpg',
    description:
      'Temporizador desenvolvido com o intuito de aprimorar habilidades referente: Programação imperativa e declarativa, métodos de manipulação da DOM, recursão de funções, padrão factory ( Organização código) e manipulação de audio. ',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-focus-timer/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-exercicio-focus-timer',
    technologies: ['html', 'css', 'javaScript'],
    color: 'gray',
  },
  {
    id: 16,
    name: 'Focus Timer 2.0',
    image: 'focusTimer2.jpg',
    description:
      'Versão aprimorada do temporizador, novas funcionalidades como, cards Lo Fi, botões de incremento e decremento, alerta de mensagens, modo dark e ajuste de volume.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-focus-timer-2.0-dark-mode/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-exercicio-focus-timer-2.0-dark-mode',
    technologies: ['html', 'css', 'javaScript'],
    color: 'orange',
  },
  {
    id: 17,
    name: 'GitFav',
    image: 'gitFav.jpg',
    description:
      'Insira o username dos usuários Github e acompanhe quantos seguidores e repositórios o mesmo contem, ótima ferramenta de análise. ',
    link: 'https://a1exlima.github.io/rocketseat-stage6-desafio-gitfav/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage6-desafio-gitfav',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple3',
  },
  {
    id: 18,
    name: 'Kanban Drag and Drop',
    image: 'kanban.jpg',
    description:
      'Lista de tarefas em formato Kanban dividas por status, funcionalidade drag and drop e tela responsiva.',
    link: 'https://a1exlima.github.io/-boraCodar-desafio-12-Kanban/',
    linkGitHub: 'https://github.com/A1exLima/-boraCodar-desafio-12-Kanban',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple',
  },
  {
    id: 19,
    name: 'Lista de Filmes Back-End',
    image: 'backEndListaFilmes.jpg',
    description:
      'Aplicação Back-end API RestFul, onde o usuário cadastra nota de filmes, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.',
    link: 'https://github.com/A1exLima/rocketseat-stage8-backend-desafio',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage8-backend-desafio',
    technologies: ['javaScript', 'nodeJs', 'express', 'sqLite', 'knex', 'api'],
    color: 'gray',
  },
  {
    id: 20,
    name: 'Lista de Filmes Front-End',
    image: 'rocketMovies.jpg',
    description:
      'Projeto front-end Rocket Movies, aplicação que cria nota de filmes com as funcionalidades de avaliar o filme, fazer comentários e pesquisar notas através do título.',
    link: 'https://rocketmovienotes.netlify.app/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage9-frontEnd-React-RocketMovies-desafio',
    technologies: ['html', 'javaScript', 'react', 'styledComponents'],
    color: 'orange2',
  },
  {
    id: 21,
    name: 'Key Rover',
    image: 'keyRover.jpg',
    description:
      'Página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação da ferramenta.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'javaScript', 'react', 'styledComponents'],
    color: 'orange',
  },
  {
    id: 22,
    name: 'Api Back-End Food Explorer',
    image: 'backEndFoodExplorer.jpg',
    description:
      'API Back-End desenvolvida para o ecossistema do FoodExplorer, tecnologias aplicadas como: bcryptJS, jsonwebtoken, cookie-parser, multer, cors, dotenv e pm2.',
    link: 'https://github.com/A1exLima/food_explorer_back_end',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_back_end',
    technologies: ['javaScript', 'nodeJs', 'express', 'sqLite', 'knex', 'api'],
    color: 'gray',
  },
  {
    id: 23,
    name: 'Food Explorer',
    image: 'foodExplorer.jpg',
    description:
      'Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho. E para complementar temos também o lado do administrador do site, onde o mesmo, tem acesso a todos os pedidos, podendo mudar o estado da compra efetuada pelo cliente e verificar quais os produtos estão em alta, além de outras funcionalidades exclusivas desenvolvida nessa versão.',
    link: 'https://fedelivery.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_front_end',
    technologies: ['html', 'javaScript', 'react', 'styledComponents', 'axios'],
    color: 'blue',
  },
  {
    id: 24,
    name: 'Social Network',
    image: 'socialNetwork.jpg',
    description:
      'O projeto Social Network aborda uma variedade de tópicos fundamentais e avançados. Iniciando com os fundamentos do React, foram explorados conceitos como componentes, propriedades e o uso de useState para gerenciar o estado local de um componente. A compreensão de bundlers e compilers, como Webpack e Babel.',
    link: 'https://gehhusocialnetwork.netlify.app/',
    linkGitHub:
      'https://github.com/A1exLima/social_network_react_study_type_script',
    technologies: [
      'html',
      'javaScript',
      'react',
      'styledComponents',
      'typeScript',
    ],
    color: 'green3',
  },
  {
    id: 25,
    name: 'Todo-List',
    image: 'todoList.jpg',
    description:
      'TodoList a solução definitiva para gerenciar suas tarefas diárias com facilidade. Crie, acompanhe e conclua suas tarefas de forma eficiente. Com todoList, você pode facilmente adicionar, marcar como concluídas e excluir tarefas, tudo em um único lugar.',
    link: 'https://taskdeveloper.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/todo-list_react_type_script',
    technologies: [
      'html',
      'javaScript',
      'react',
      'styledComponents',
      'typeScript',
    ],
    color: 'green',
  },
  {
    id: 26,
    name: 'Portfólio Alex Code',
    image: 'portfolio.jpg',
    description:
      'O website ALEX <CODE/> é um portfólio dedicado à apresentação dos meus trabalhos como desenvolvedor front-end. Criado em formato single page, ele inclui seções detalhadas sobre mim, meus projetos, habilidades e formas de contato. Utilizei várias tecnologias avançadas para sua construção, como a Api emailJs para gestão de e-mails, emotion para estilização, hookForm para formulários, react Helmet para SEO, react scroll para navegação suave, zod para validação de dados, entre outras.',
    link: 'https://alexcode.com.br',
    linkGitHub: 'https://github.com/A1exLima/portfolio_alex_lima_react',
    technologies: ['html', 'react', 'styledComponents', 'typeScript', 'api'],
    color: 'blue',
  },
]

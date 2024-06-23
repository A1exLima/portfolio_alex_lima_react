export const BASE_COLORS = {
  blue: 'project-blue',
  green3: 'project-green3',
  orange: 'project-orange',
  red: 'project-red',
  purple: 'project-purple',
  green: 'project-green',
  gray: 'project-gray',
  violet: 'project-violet',
} as const

export interface projectRegistrationProps {
  id: number
  date: string
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
    date: '23/01/2023',
    name: 'Habits Tracker',
    image: 'habitsTracker.jpg',
    description:
      'Desenvolvido durante a trilha Ignite do NLW Setup da Rocketseat, este projeto permite monitorar hábitos diários através de registros simples e eficazes. Uma ferramenta útil para acompanhar e manter o progresso pessoal.',
    link: 'https://a1exlima.github.io/rockeatSeat_Nlw_Setup_Habits_Tracker/',
    linkGitHub:
      'https://github.com/A1exLima/rockeatSeat_Nlw_Setup_Habits_Tracker',
    technologies: ['html', 'css', 'javaScript'],
    color: 'green3',
  },
  {
    id: 2,
    date: '25/01/2023',
    name: 'Flutuar Viagens',
    image: 'pacoteViagens.jpg',
    description:
      'Projeto de uma landing page, onde foi recriado uma aplicação a partir de um layout pronto no figma.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage2-intro-html-css',
    technologies: ['html', 'css'],
    color: 'blue',
  },
  {
    id: 3,
    date: '26/01/2023',
    name: 'Ambientes Únicos',
    image: 'ambientesUnicos.jpg',
    description:
      'Desenvolvimento de uma landing page baseada fielmente em um layout pré-existente no Figma. Este projeto destaca habilidades de implementação de design estático e funcionalidades interativas, proporcionando uma representação visual precisa e eficaz.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-correcao-bug/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-correcao-bug',
    technologies: ['html', 'css'],
    color: 'violet',
  },
  {
    id: 4,
    date: '26/01/2023',
    name: 'Rocket.sect',
    image: 'rocketSect.jpg',
    description:
      'Desenvolvimento de uma landing page fiel ao layout original do Figma. Este projeto demonstra habilidades de implementação de design estático e funcionalidades interativas.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-avancado/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-avancado',
    technologies: ['html', 'css'],
    color: 'gray',
  },
  {
    id: 5,
    date: '27/01/2023',
    name: 'Treine.me',
    image: 'treineMe.jpg',
    description:
      'Esta landing page foi cuidadosamente recriada para proporcionar uma experiência visual envolvente e funcional, demonstrando habilidades de implementação de design e desenvolvimento web.',
    link: 'https://a1exlima.github.io/rocketseat-stage2-intro-html-css-desafio-correcao-bug-2/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage2-intro-html-css-desafio-correcao-bug-2',
    technologies: ['html', 'css'],
    color: 'green',
  },
  {
    id: 6,
    date: '31/01/2023',
    name: 'Form. de Mentoria',
    image: 'formMentoria.jpg',
    description:
      'Projetado para facilitar o cadastro e agendamento de mentoria. Este formulário integra design intuitivo com funcionalidade prática, proporcionando uma experiência simplificada e eficaz para os usuários.',
    link: 'https://a1exlima.github.io/rocketseat-stage3-criando-formularios-intermedirio/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-criando-formularios-intermedirio',
    technologies: ['html', 'css'],
    color: 'purple',
  },
  {
    id: 7,
    date: '01/02/2023',
    name: 'Avaliação de Mentoria',
    image: 'avalMentoria.jpg',
    description:
      'Projeto recriado a partir de um layout pré-existente no Figma, desenvolvido para facilitar a avaliação de uma mentoria. Este formulário combina design intuitivo com funcionalidade, proporcionando uma experiência de usuário aprimorada e eficiente.',
    link: 'https://a1exlima.github.io/rocketseat-stage3-criando-formularios-avancado/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-criando-formularios-avancado',
    technologies: ['html', 'css'],
    color: 'red',
  },
  {
    id: 8,
    date: '01/03/2023',
    name: 'Tutorial Display Grid',
    image: 'tutorialGrid.jpg',
    description:
      'Um guia detalhado sobre como utilizar o CSS Grid para estruturar layouts de forma eficiente. Enquanto o Flexbox é ideal para organizar elementos em uma dimensão, o CSS Grid vai além, permitindo a criação de layouts em duas dimensões (linhas e colunas), formando grades complexas. Ideal para quem busca dominar técnicas avançadas de design responsivo e organização de conteúdo.',
    link: 'https://www.youtube.com/watch?v=iAGEaYjdJV8&t=13s',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-revisao-display-grid',
    technologies: ['html', 'css'],
    color: 'orange',
  },
  {
    id: 9,
    date: '06/04/2023',
    name: 'SPA Universe',
    image: 'spaUniverse.jpg',
    description:
      'Projeto recriado a partir de um layout no Figma, explorando conceitos avançados como Single Page Application (SPA), mapeamento de rotas dinâmicas, uso de promises para tratamento assíncrono de dados e orientação a objetos para estruturação e reutilização de código. Uma oportunidade de aprimorar habilidades em desenvolvimento front-end moderno.',
    link: 'https://universesparocketseat.netlify.app/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage6-desafio-spa-universe',
    technologies: ['html', 'css', 'javaScript'],
    color: 'green3',
  },
  {
    id: 10,
    date: '10/04/2023',
    name: 'Discovery Portfólio',
    image: 'discPortfolio.jpg',
    description:
      'Projeto recriado a partir de um layout pré-existente no Figma, com o objetivo de praticar conceitos de HTML e CSS. Inspirado em um modelo de portfólio, este projeto oferece uma oportunidade de desenvolver habilidades em design responsivo e implementação de layout.',
    link: 'https://a1exlima.github.io/rocketseat-discovery-projeto-portfolio/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-discovery-projeto-portfolio',
    technologies: ['html', 'css'],
    color: 'blue',
  },
  {
    id: 11,
    date: '15/02/2023',
    name: 'Jogo da Adivinhação',
    image: 'game.jpg',
    description:
      'Um projeto educativo para praticar habilidades de lógica de programação e programação em JavaScript, enquanto introduz os fundamentos de manipulação da DOM. O jogo inclui desafios adicionais como validações, mensagens de incentivo ao jogador e alertas, proporcionando uma experiência interativa e educativa. Divirta-se explorando e aprendendo.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-jogo-adivinhacao/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-jogo-adivinhacao',
    technologies: ['html', 'css', 'javaScript'],
    color: 'violet',
  },
  {
    id: 12,
    date: '21/04/2023',
    name: 'Tutorial Space Cream',
    image: 'spaceCream.jpg',
    description:
      'Projeto desenvolvido para o canal Alex CODE no YouTube. Este vídeo tutorial permite aos alunos da turma 9 do curso Explorer compararem seu projeto com um exemplo prático desenvolvido, oferecendo uma análise detalhada e aprendizado prático.',
    link: 'https://www.youtube.com/watch?v=bp9m3AzWmx0',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage3-revisao-video-space-cream',
    technologies: ['html', 'css'],
    color: 'gray',
  },
  {
    id: 13,
    date: '07/03/2023',
    name: 'Biscoito da Sorte',
    image: 'game2.jpg',
    description:
      'Um divertido jogo onde o usuário abre um biscoito da sorte com um simples clique ou tecla Enter para revelar sua sorte do dia. Uma experiência interativa e descontraída para alegrar o dia dos usuários.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-desafio-biscoito-da-sorte/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-desafio-biscoito-da-sorte',
    technologies: ['html', 'css', 'javaScript'],
    color: 'green',
  },
  {
    id: 14,
    date: '10/03/2023',
    name: 'Calculadora IMC',
    image: 'calcImc.jpg',
    description:
      'Projeto dedicado ao cálculo do Índice de Massa Corporal (IMC), onde o usuário insere sua altura e peso para obter seu IMC e sua classificação em cinco graus diferentes. Uma ferramenta essencial para monitoramento da saúde e bem-estar.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-imc/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage5-exercicio-imc',
    technologies: ['html', 'css', 'javaScript'],
    color: 'purple',
  },
  {
    id: 15,
    date: '16/03/2023',
    name: 'Focus Timer',
    image: 'focusTimer.jpg',
    description:
      'Desenvolvido para aprimorar habilidades em programação imperativa e declarativa, métodos de manipulação da DOM, recursão de funções, padrão factory para organização do código, e manipulação avançada de áudio. Uma ferramenta versátil e educativa para explorar diversos conceitos essenciais de desenvolvimento web.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-focus-timer/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-exercicio-focus-timer',
    technologies: ['html', 'css', 'javaScript'],
    color: 'red',
  },
  {
    id: 16,
    date: '29/03/2023',
    name: 'Focus Timer 2.0',
    image: 'focusTimer2.jpg',
    description:
      'Versão aprimorada do temporizador com novas funcionalidades, incluindo cards Lo Fi para relaxamento, botões de incremento e decremento para ajuste preciso, alertas de mensagens para notificações importantes, modo dark para conforto visual e ajuste de volume para controle personalizado do som.',
    link: 'https://a1exlima.github.io/rocketseat-stage5-exercicio-focus-timer-2.0-dark-mode/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage5-exercicio-focus-timer-2.0-dark-mode',
    technologies: ['html', 'css', 'javaScript'],
    color: 'orange',
  },
  {
    id: 17,
    date: '18/04/2023',
    name: 'GitFav',
    image: 'gitFav.jpg',
    description:
      'Insira o username do usuário GitHub e acompanhe o número de seguidores e repositórios que possui. Uma ferramenta poderosa para análise e acompanhamento de perfis GitHub.',
    link: 'https://a1exlima.github.io/rocketseat-stage6-desafio-gitfav/',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage6-desafio-gitfav',
    technologies: ['html', 'css', 'javaScript'],
    color: 'green3',
  },
  {
    id: 18,
    date: '26/04/2023',
    name: 'Kanban',
    image: 'kanban.jpg',
    description:
      'Uma lista de tarefas organizada em formato Kanban, dividida por status e equipada com funcionalidade drag-and-drop. Desenvolvida para proporcionar uma experiência intuitiva de gerenciamento de tarefas, com design responsivo para acessibilidade em diferentes dispositivos.',
    link: 'https://a1exlima.github.io/-boraCodar-desafio-12-Kanban/',
    linkGitHub: 'https://github.com/A1exLima/-boraCodar-desafio-12-Kanban',
    technologies: ['html', 'css', 'javaScript'],
    color: 'blue',
  },
  {
    id: 19,
    date: '21/07/2024',
    name: 'Rocket Movies Api',
    image: 'backEndListaFilmes.jpg',
    description:
      'Aplicação Back-End que permite aos usuários cadastrar notas para filmes, incluindo informações como nome, descrição e nota. Além disso, oferece a funcionalidade de criar tags relacionadas a cada filme, proporcionando uma organização eficiente e flexível dos dados.',
    link: 'https://github.com/A1exLima/rocketseat-stage8-backend-desafio',
    linkGitHub: 'https://github.com/A1exLima/rocketseat-stage8-backend-desafio',
    technologies: ['javaScript', 'nodeJs', 'express', 'sqLite', 'knex', 'api'],
    color: 'violet',
  },
  {
    id: 20,
    date: '24/08/2023',
    name: 'Rocket Movies',
    image: 'rocketMovies.jpg',
    description:
      'Aplicação que permite aos usuários criar notas para filmes. Com funcionalidades para avaliar filmes, deixar comentários e pesquisar notas por título, oferece uma experiência interativa e personalizada na gestão de avaliações cinematográficas.',
    link: 'https://rocketmovienotes.netlify.app/',
    linkGitHub:
      'https://github.com/A1exLima/rocketseat-stage9-frontEnd-React-RocketMovies-desafio',
    technologies: ['html', 'javaScript', 'react', 'styledComponents'],
    color: 'gray',
  },
  {
    id: 21,
    date: '01/02/2024',
    name: 'Key Rover',
    image: 'keyRover.jpg',
    description:
      'Uma página de divulgação no estilo Linktree, projetada para promover a ferramenta Key Rover. Oferece acesso direto aos seus contatos, à página de vídeo da chave do Rover e ao download de materiais, facilitando a divulgação eficaz da sua ferramenta.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'javaScript', 'react', 'styledComponents'],
    color: 'green',
  },
  {
    id: 22,
    date: '06/02/2024',
    name: 'Food Explorer Api',
    image: 'backEndFoodExplorer.jpg',
    description:
      'Api Back-End robusta, foi desenvolvida para o ecossistema FoodExplorer, utilizando tecnologias avançadas como bcryptJS para criptografia, jsonwebtoken para autenticação, cookie-parser para manipulação de cookies, multer para upload de arquivos, cors para controle de acesso HTTP, dotenv para gerenciamento de variáveis de ambiente e pm2 para gerenciamento de processos. Um sistema seguro e eficiente para suportar todas as necessidades da plataforma.',
    link: 'https://github.com/A1exLima/food_explorer_back_end',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_back_end',
    technologies: ['javaScript', 'nodeJs', 'express', 'sqLite', 'knex', 'api'],
    color: 'purple',
  },
  {
    id: 23,
    date: '06/02/2024',
    name: 'Food Explorer',
    image: 'foodExplorer.jpg',
    description:
      'Aplicação completa para restaurantes que oferece aos clientes acesso ao menu completo, facilitando a seleção e compra dos pratos desejados diretamente pelo carrinho de compras. Para os administradores do site, há um painel robusto com controle total sobre os pedidos, incluindo a capacidade de atualizar o status das compras dos clientes e analisar tendências de produtos populares. Esta versão também inclui funcionalidades exclusivas desenvolvidas para otimizar a gestão do restaurante.',
    link: 'https://fedelivery.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_front_end',
    technologies: ['html', 'javaScript', 'react', 'styledComponents', 'axios'],
    color: 'red',
  },
  {
    id: 24,
    date: '12/02/2024',
    name: 'Social Network',
    image: 'socialNetwork.jpg',
    description:
      'Projeto desenvolvido com o intuito de explorar os fundamentos e aspectos avançados do desenvolvimento web com React. Este projeto inicia com conceitos essenciais como componentes e propriedades, além do uso de useState para gerenciar estados locais. Também abrange ferramentas fundamentais como Webpack e Babel para compilação e empacotamento de código.',
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
    color: 'orange',
  },
  {
    id: 25,
    date: '14/02/2024',
    name: 'Todo-List',
    image: 'todoList.jpg',
    description:
      'Simplifique o gerenciamento das suas tarefas diárias. Uma solução intuitiva para criar, acompanhar e concluir suas tarefas de maneira eficiente. Com TodoList, você pode facilmente adicionar, marcar como concluídas e remover tarefas, tudo em um único lugar.',
    link: 'https://taskdeveloper.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/todo-list_react_type_script',
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
    id: 26,
    date: '24/05/2024',
    name: 'Portfólio Alex Code',
    image: 'portfolio.jpg',
    description:
      'O website ALEX CODE é um portfólio dedicado à apresentação dos meus trabalhos como desenvolvedor front-end. Criado em formato single page, ele inclui seções detalhadas sobre mim, meus projetos, habilidades e formas de contato. Utilizei várias tecnologias avançadas para sua construção, como a Api emailJs para gestão de e-mails, emotion para estilização, hookForm para formulários, react Helmet para SEO, react scroll para navegação suave, zod para validação de dados, entre outras.',
    link: 'https://alexcode.com.br',
    linkGitHub: 'https://github.com/A1exLima/portfolio_alex_lima_react',
    technologies: ['html', 'react', 'styledComponents', 'typeScript', 'api'],
    color: 'blue',
  },
]

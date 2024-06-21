export const BASE_COLORS = {
  red: 'project-red',
  blue: 'project-blue',
  blue2: 'project-blue2',
  blue3: 'project-blue3',
  violet: 'project-violet',
  purple: 'project-purple',
  purple2: 'project-purple2',
  green: 'project-green',
  orange: 'project-orange',
  orange2: 'project-orange2',
  green2: 'project-green2',
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
]

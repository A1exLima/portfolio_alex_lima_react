export const BASE_COLORS = {
  red: 'project-red',
  blue: 'project-blue',
  violet: 'project-violet',
  purple: 'project-purple',
  green: 'project-green',
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
    name: 'Teste',
    image: 'foodExplorer.jpg',
    description:
      'Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.',
    link: 'https://fedelivery.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_front_end',
    technologies: ['html'],
    color: 'red',
  },
  {
    id: 2,
    name: '2',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'css'],
    color: 'blue',
  },
  {
    id: 3,
    name: '3',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['javaScript'],
    color: 'violet',
  },
  {
    id: 4,
    name: '4',
    image: 'foodExplorer.jpg',
    description:
      'Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.',
    link: 'https://fedelivery.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_front_end',
    technologies: ['html'],
    color: 'green',
  },
  {
    id: 5,
    name: '5',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'css'],
    color: 'purple',
  },
  {
    id: 6,
    name: '6',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['javaScript'],
    color: 'red',
  },
  {
    id: 7,
    name: '7',
    image: 'foodExplorer.jpg',
    description:
      'Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.Aplicação para um restaurante, onde o cliente terá acesso a um menu com todos os pratos oferecidos, podendo finalizar a compra das opções adicionadas no carrinho.',
    link: 'https://fedelivery.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/food_explorer_front_end',
    technologies: ['html'],
    color: 'green',
  },
  {
    id: 8,
    name: '8',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'css'],
    color: 'violet',
  },
  {
    id: 9,
    name: '9',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'css'],
    color: 'purple',
  },
  {
    id: 10,
    name: '10',
    image: 'keyRover.jpg',
    description:
      'O projeto consiste em uma página de divulgação estilo linktree, com redirecionamento para contatos, página de vídeo da chave e download do material, tendo como objetivo a divulgação dessa ferramenta incrível.',
    link: 'https://keyrover.netlify.app/',
    linkGitHub: 'https://github.com/A1exLima/freelancer-key-rover',
    technologies: ['html', 'css'],
    color: 'red',
  },
]

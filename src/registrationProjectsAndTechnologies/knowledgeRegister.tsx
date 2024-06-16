import { FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5'
import {
  SiSqlite,
  SiKnexdotjs,
  SiTypescript,
  SiStyledcomponents,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export const knowledgeRegisterIcons: { [key: string]: JSX.Element } = {
  html: <FaHtml5 />,
  css: <IoLogoCss3 />,
  javaScript: <IoLogoJavascript />,
  react: <FaReact />,
  styledComponents: <SiStyledcomponents />,
  typeScript: <SiTypescript />,
  nodeJs: <IoLogoNodejs />,
  sqLite: <SiSqlite />,
  knex: <SiKnexdotjs />,
  api: <TbApi />,
}

export const knowledgeRegisterText: { [key: string]: string } = {
  html: 'HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas web. Ela utiliza uma série de elementos e tags para definir o conteúdo e a formatação de texto, imagens, links, e outros componentes. HTML é essencial para a construção da base visual e funcional de sites na internet.',
  css: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a aparência e o formato de um documento escrito em HTML. Ela permite controlar o layout, cores, fontes e outros aspectos visuais das páginas web, separando o conteúdo da apresentação. CSS é fundamental para criar interfaces de usuário atraentes e responsivas.',
  javaScript:
    'JavaScript é uma linguagem de programação dinâmica e interpretada, amplamente utilizada para adicionar interatividade e comportamento aos websites. Ela permite manipular elementos HTML e CSS, responder a eventos do usuário, e comunicar-se com servidores. JavaScript é essencial para o desenvolvimento de aplicações web modernas e interativas.',
  react:
    'React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook, usada para construir interfaces de usuário (UI) de forma eficiente e modular. Ela permite a criação de componentes reutilizáveis que gerenciam seu próprio estado, facilitando o desenvolvimento de aplicações web dinâmicas e interativas. React utiliza um conceito chamado Virtual DOM para otimizar a atualização e renderização dos componentes.',
  styledComponents:
    'Styled-components é uma biblioteca para React e React Native que permite escrever estilos CSS diretamente dentro de componentes JavaScript. Utilizando tagged template literals, ela facilita a criação de estilos dinâmicos e escopados a componentes específicos, promovendo uma abordagem de "CSS-in-JS". Isso melhora a modularidade e mantém o estilo e a lógica de componentes juntos.',
  typeScript:
    'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que estende o JavaScript adicionando tipagem estática e outros recursos avançados. Ele ajuda a identificar e corrigir erros de código durante o desenvolvimento, melhorando a robustez e a manutenção do software. TypeScript compila para JavaScript puro, permitindo sua integração com qualquer projeto JavaScript existente.',
  nodeJs:
    'Node.js é um ambiente de execução de JavaScript do lado do servidor, construído sobre o motor V8 do Chrome. Ele permite criar aplicações de alta performance e escaláveis, utilizando um modelo de I/O não bloqueante e orientado a eventos. Node.js é amplamente utilizado para desenvolver servidores web, APIs e aplicações em tempo real.',
  sqLite:
    'SQLite é um banco de dados relacional leve e integrado que armazena dados em um único arquivo. Ele é autossuficiente, não requer um servidor separado, e é ideal para aplicativos embarcados, desenvolvimento, testes, e pequenos projetos. SQLite é amplamente utilizado devido à sua simplicidade, eficiência e portabilidade.',
  knex: 'Knex.js é uma biblioteca SQL query builder para Node.js, que fornece uma interface unificada para interagir com diferentes bancos de dados relacionais. Ele suporta operações como criação, leitura, atualização e exclusão de dados, além de migrações e transações. Knex.js facilita a construção de consultas complexas e melhora a portabilidade do código entre vários sistemas de gerenciamento de banco de dados.',
  api: 'API RESTful é uma interface de programação de aplicações que segue os princípios do estilo arquitetural REST (Representational State Transfer). Ela utiliza métodos HTTP como GET, POST, PUT e DELETE para manipular recursos através de URLs bem definidas. APIs RESTful são amplamente adotadas por sua simplicidade, escalabilidade e capacidade de serem facilmente integradas em diferentes sistemas e plataformas.',
}

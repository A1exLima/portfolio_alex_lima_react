import { FaHtml5, FaReact, FaBootstrap } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5'
import {
  SiSqlite,
  SiKnexdotjs,
  SiWebpack,
  SiJest,
  SiExpress,
  SiAxios,
  SiTypescript,
  SiStyledcomponents,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaSass } from 'react-icons/fa6'

export const technologyIcons: { [key: string]: JSX.Element } = {
  html: <FaHtml5 />,
  css: <IoLogoCss3 />,
  javaScript: <IoLogoJavascript />,
  react: <FaReact />,
  styledComponents: <SiStyledcomponents />,
  typeScript: <SiTypescript />,
  axios: <SiAxios />,
  nodeJs: <IoLogoNodejs />,
  express: <SiExpress />,
  sqLite: <SiSqlite />,
  knex: <SiKnexdotjs />,
  api: <TbApi />,
  bootstrap: <FaBootstrap />,
  sass: <FaSass />,
  webpack: <SiWebpack />,
  jest: <SiJest />,
}

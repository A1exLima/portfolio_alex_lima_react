import { CardContainer } from './style'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { projectRegistrationProps } from '../../registrationProjectsAndTechnologies/projectRegistration'
import { technologyIcons } from '../../registrationProjectsAndTechnologies/technologyIcons'
import { TbArrowBackUp } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'

interface CardProps {
  projectData: projectRegistrationProps
}

export function Card({ projectData }: CardProps) {
  const [rotatedProjectId, setRotatedProjectId] = useState<number | string>('')

  const renderTechnologyIcon = (technology: string): JSX.Element => {
    return technologyIcons[technology]
  }

  const handleClickToRotate = (projectId: number) => {
    setRotatedProjectId((prevRotatedProjectId) =>
      prevRotatedProjectId === projectId ? '' : projectId,
    )
  }

  return (
    <CardContainer
      $background={`/imageProjects/${projectData.image}`}
      $color={projectData.color}
      className={`rotating ${rotatedProjectId === projectData.id ? 'rotated' : ''}`}
    >
      <div
        className="front"
        onClick={() => handleClickToRotate(projectData.id)}
      >
        <div>
          <p>{projectData.date}</p>
          <div>
            <h2>{projectData.name}</h2>
            <div>
              <NavLink
                target="_blank"
                to={projectData.linkGitHub}
                title={`Repositório GitHub: ${projectData.name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </NavLink>
              <TbArrowBackUp title="Imagem do projeto." />
            </div>
          </div>
          <p title={projectData.description}>{projectData.description}</p>
        </div>
        <div>
          <NavLink
            target="_blank"
            to={projectData.link}
            title={projectData.link}
            onClick={(e) => e.stopPropagation()}
          >
            Visualizar projeto
          </NavLink>
          <div>
            {projectData.technologies.map((technology) => (
              <span key={technology} title={technology}>
                {renderTechnologyIcon(technology)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="back" onClick={() => handleClickToRotate(projectData.id)}>
        <div>
          <p>{projectData.date}</p>
          <div>
            <h2>{projectData.name}</h2>
            <span title="Descrição do projeto.">
              <TbArrowBackUp />
            </span>
          </div>
        </div>

        <div
          className="container-background"
          title={`Acesse: ${projectData.link}`}
        ></div>
      </div>
    </CardContainer>
  )
}

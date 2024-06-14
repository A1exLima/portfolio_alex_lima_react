import { CardContainer } from './style'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { projectRegistrationProps } from '../../registrationProjectsAndTechnologies/projectRegistration'
import { technologyIcons } from '../../registrationProjectsAndTechnologies/technologyIcons'

import { IoMdImages } from 'react-icons/io'
import { PiKeyReturnFill } from 'react-icons/pi'
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
      $background={`src/assets/images/imageProjects/${projectData.image}`}
      $color={projectData.color}
      className={`rotating ${rotatedProjectId === projectData.id ? 'rotated' : ''}`}
    >
      <div className="front">
        <div>
          <div>
            <h2>{projectData.name}</h2>

            <div>
              <NavLink
                target="_blank"
                to={projectData.linkGitHub}
                title="Repositório GitHub."
              >
                <FaGithub />
              </NavLink>

              <IoMdImages
                onClick={() => handleClickToRotate(projectData.id)}
                title="Imagem do projeto."
              />
            </div>
          </div>

          <p>{projectData.description}</p>
        </div>

        <div>
          <NavLink
            target="_blank"
            to={projectData.link}
            title={projectData.link}
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
          <h2>{projectData.name}</h2>

          <span title="Descrição do projeto.">
            <PiKeyReturnFill />
          </span>
        </div>

        <NavLink target="_blank" to={projectData.link}>
          <div className="container-background" title={projectData.link}></div>
        </NavLink>
      </div>
    </CardContainer>
  )
}

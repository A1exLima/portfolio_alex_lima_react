import { Project, ProjectGridContainer } from './style'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { projectRegistrationProps } from '../../registrationProjectsAndTechnologies/projectRegistration'
import { technologyIcons } from '../../registrationProjectsAndTechnologies/technologyIcons'

import { IoMdImages } from 'react-icons/io'
import { PiKeyReturnFill } from 'react-icons/pi'
import { FaGithub } from 'react-icons/fa'

interface ProjectsProps {
  projectsArray: projectRegistrationProps[]
}

export function ProjectGrid({ projectsArray }: ProjectsProps) {
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
    <ProjectGridContainer>
      {projectsArray.map((project) => (
        <Project
          key={project.id}
          $color={project.color}
          $background={`src/assets/images/imageProjects/${project.image}`}
          className={`rotating ${
            rotatedProjectId === project.id ? 'rotated' : ''
          }`}
        >
          <div className="front">
            <div>
              <div>
                <h2>{project.name}</h2>

                <div>
                  <NavLink
                    target="_blank"
                    to={project.linkGitHub}
                    title="Repositório GitHub."
                  >
                    <FaGithub />
                  </NavLink>

                  <IoMdImages
                    onClick={() => handleClickToRotate(project.id)}
                    title="Imagem do projeto."
                  />
                </div>
              </div>

              <p>{project.description}</p>
            </div>

            <div>
              <NavLink target="_blank" to={project.link} title={project.link}>
                Visualizar projeto
              </NavLink>

              <div>
                {project.technologies.map((technology) => (
                  <span key={technology} title={technology}>
                    {renderTechnologyIcon(technology)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="back" onClick={() => handleClickToRotate(project.id)}>
            <div>
              <h2>{project.name}</h2>

              <span title="Descrição do projeto">
                <PiKeyReturnFill />
              </span>
            </div>

            <NavLink target="_blank" to={project.link}>
              <div className="container-background" title={project.link}></div>
            </NavLink>
          </div>
        </Project>
      ))}
    </ProjectGridContainer>
  )
}

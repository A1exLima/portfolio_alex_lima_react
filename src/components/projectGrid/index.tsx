import { ProjectGridContainer } from './style'

import { Card } from '../card'

import { projectRegistrationProps } from '../../registrationProjectsAndTechnologies/projectRegistration'

interface ProjectsProps {
  projectsArray: projectRegistrationProps[]
}

export function ProjectGrid({ projectsArray }: ProjectsProps) {
  return (
    <ProjectGridContainer>
      {projectsArray.map((project) => (
        <Card key={project.id} projectData={project} />
      ))}
    </ProjectGridContainer>
  )
}

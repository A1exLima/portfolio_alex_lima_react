import { useState, useEffect, useLayoutEffect } from 'react'
import {
  ProjectGridContainer,
  NavigationButton,
  ContainerPagination,
  ProjectContainer,
} from './style'

import { Card } from '../card'
import { projectRegistrationProps } from '../../registrationProjectsAndTechnologies/projectRegistration'

interface ProjectsProps {
  projectsArray: projectRegistrationProps[]
}

export function ProjectGrid({ projectsArray }: ProjectsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [projectsPerPage, setProjectsPerPage] = useState(4)

  useLayoutEffect(() => {
    setCurrentPage(0)
  }, [projectsArray])

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(2)
      } else {
        setProjectsPerPage(4)
      }
    }

    updateProjectsPerPage()
    window.addEventListener('resize', updateProjectsPerPage)

    return () => window.removeEventListener('resize', updateProjectsPerPage)
  }, [])

  const sortedProjectsArray = projectsArray.slice().sort((a, b) => b.id - a.id)

  const startIndex = currentPage * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = sortedProjectsArray.slice(startIndex, endIndex)

  const totalPages = Math.ceil(sortedProjectsArray.length / projectsPerPage)
  const pagesArray = [...Array(totalPages).keys()]

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <ProjectContainer>
      <ContainerPagination>
        {pagesArray.map((pageNumber) => (
          <NavigationButton
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            disabled={currentPage === pageNumber}
            title={`Página ${pageNumber + 1}`}
          >
            {pageNumber + 1}
          </NavigationButton>
        ))}
      </ContainerPagination>

      <ProjectGridContainer>
        {currentProjects.map((project) => (
          <Card key={project.id} projectData={project} />
        ))}
      </ProjectGridContainer>
    </ProjectContainer>
  )
}

import { useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(2)
        setIsMobile(true)
      } else {
        setProjectsPerPage(4)
        setIsMobile(false)
      }
    }

    updateProjectsPerPage()
    window.addEventListener('resize', updateProjectsPerPage)

    return () => window.removeEventListener('resize', updateProjectsPerPage)
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [projectsArray])

  const sortedProjectsArray = projectsArray.slice().sort((a, b) => b.id - a.id)

  const startIndex = currentPage * projectsPerPage
  const endIndex = startIndex + projectsPerPage

  const currentProjects = sortedProjectsArray.slice(startIndex, endIndex)

  const totalPages = Math.ceil(sortedProjectsArray.length / projectsPerPage)

  const getPaginationButtons = () => {
    if (!isMobile) {
      return [...Array(totalPages).keys()].map((pageNumber) => (
        <NavigationButton
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          disabled={currentPage === pageNumber}
          title={`Página ${pageNumber + 1}`}
        >
          {pageNumber + 1}
        </NavigationButton>
      ))
    }

    const buttons = []
    const maxVisiblePages = 3

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 0)
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages - 1)

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 0)
    }

    if (startPage > 0) {
      buttons.push(
        <NavigationButton key={0} onClick={() => handlePageClick(0)}>
          1
        </NavigationButton>,
      )
      if (startPage > 1) {
        buttons.push(<span key="startEllipsis">...</span>)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <NavigationButton
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i + 1}
        </NavigationButton>,
      )
    }

    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) {
        buttons.push(<span key="endEllipsis">...</span>)
      }
      buttons.push(
        <NavigationButton
          key={totalPages - 1}
          onClick={() => handlePageClick(totalPages - 1)}
        >
          {totalPages}
        </NavigationButton>,
      )
    }

    return buttons
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <ProjectContainer>
      <ContainerPagination>{getPaginationButtons()}</ContainerPagination>

      <ProjectGridContainer>
        {currentProjects.map((project) => (
          <Card key={project.id} projectData={project} />
        ))}
      </ProjectGridContainer>
    </ProjectContainer>
  )
}

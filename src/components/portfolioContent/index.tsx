import {
  FilterProjects,
  Filters,
  ProjectNotFound,
  FilterContainer,
  FilterButton,
  PortfolioContainer,
} from './style'

import { useState, useEffect } from 'react'

import { technologyIcons } from '../../registrationProjectsAndTechnologies/technologyIcons'
import {
  projectRegistration,
  projectRegistrationProps,
} from '../../registrationProjectsAndTechnologies/projectRegistration'

import { ProjectGrid } from '../projectGrid'

import { TbNotesOff } from 'react-icons/tb'
import { MdFilterList } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

export function PortfolioContent() {
  const [technologyFilterOptions, setTechnologyFilterOptions] = useState<
    string[]
  >([])
  const [projectsArray, setProjectsArray] = useState<
    projectRegistrationProps[]
  >([])
  const [filteredProjects, setFilteredProjects] = useState<
    projectRegistrationProps[]
  >([])
  const [buttonsClicked, setButtonsClicked] = useState<string[]>([])

  const [filterVisible, setFilterVisible] = useState<boolean | string>('')

  useEffect(() => {
    setTechnologyFilterOptions(Object.keys(technologyIcons))
    setProjectsArray(projectRegistration)
  }, [])

  useEffect(() => {
    setFilteredProjects(projectsArray)
  }, [projectsArray])

  const renderTechnologyIcon = (technology: string): JSX.Element => {
    return technologyIcons[technology]
  }

  const handleTechnologiesFilter = (technology: string) => {
    const updatedButtonsClicked = buttonsClicked.includes(technology)
      ? buttonsClicked.filter((button) => button !== technology)
      : [...buttonsClicked, technology]

    setButtonsClicked(updatedButtonsClicked)

    const filteredProjects =
      updatedButtonsClicked.length === 0
        ? projectsArray
        : projectsArray.filter((project) =>
            updatedButtonsClicked.some((button) =>
              project.technologies.includes(button),
            ),
          )

    setFilteredProjects(filteredProjects)
  }

  const handleFilterButton = () => {
    setFilterVisible((prevState) => !prevState)
  }

  return (
    <PortfolioContainer>
      <h2>
        Projetos <span>.</span>
      </h2>

      <FilterContainer>
        <FilterButton
          onClick={handleFilterButton}
          title="Filtrar por tecnologia"
        >
          {filterVisible ? <IoClose /> : <MdFilterList />}
        </FilterButton>

        <FilterProjects className={`${filterVisible ? 'open' : 'close'}`}>
          {technologyFilterOptions.map((technology) => (
            <Filters
              key={technology}
              title={`${technology}`}
              $color={buttonsClicked.includes(technology) ? 'blue' : ''}
              onClick={() => handleTechnologiesFilter(technology)}
            >
              {renderTechnologyIcon(technology)}
            </Filters>
          ))}
        </FilterProjects>
      </FilterContainer>

      {filteredProjects.length ? (
        <ProjectGrid projectsArray={filteredProjects} />
      ) : (
        <ProjectNotFound>
          <TbNotesOff />
          <span>Projeto não encontrado</span>
        </ProjectNotFound>
      )}
    </PortfolioContainer>
  )
}

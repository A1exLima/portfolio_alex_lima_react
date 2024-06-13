import {
  RepositoryContainer,
  FilterProjects,
  Filters,
  ProjectNotFound,
  FilterContainer,
  FilterButton,
} from './style'

import { v4 as uuidv4 } from 'uuid' // Importa a função v4 renomeada como uuidv4

import { useState, useEffect } from 'react'

import { technologyIcons } from '../../../../registrationProjectsAndTechnologies/technologyIcons'
import {
  projectRegistration,
  projectRegistrationProps,
} from '../../../../registrationProjectsAndTechnologies/projectRegistration'

import { Projects } from './components/project'

import { TbNotesOff } from 'react-icons/tb'
import { MdFilterList } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

export function Repository() {
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

  const [filterButtonAppears, setFilterButtonAppears] = useState<boolean>(false)
  const [filterVisible, setFilterVisible] = useState<boolean>(false)

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
    setFilterButtonAppears((prevState) => !prevState)
  }

  return (
    <RepositoryContainer>
      <h2>
        Projetos <span>.</span>
      </h2>

      <FilterContainer>
        <FilterButton onClick={handleFilterButton}>
          {filterButtonAppears ? <IoClose /> : <MdFilterList />}
        </FilterButton>

        <FilterProjects className={`${filterVisible ? 'open' : 'close'}`}>
          {technologyFilterOptions.map((technology) => (
            <Filters
              key={uuidv4()}
              title={`Filtrar por ${technology}`}
              $color={buttonsClicked.includes(technology) ? 'blue' : ''}
              onClick={() => handleTechnologiesFilter(technology)}
            >
              {renderTechnologyIcon(technology)}
            </Filters>
          ))}
        </FilterProjects>
      </FilterContainer>

      {filteredProjects.length ? (
        <Projects projectsArray={filteredProjects} />
      ) : (
        <ProjectNotFound>
          <TbNotesOff />
          <span>Projeto não encontrado</span>
        </ProjectNotFound>
      )}
    </RepositoryContainer>
  )
}

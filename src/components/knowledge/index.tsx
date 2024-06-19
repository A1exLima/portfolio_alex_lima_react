import {
  KnowledgeContainer,
  TechnologyKnowledgeButton,
  TechnologyKnowledgeContainer,
  TechnologyReading,
} from './style'

import {
  knowledgeRegisterIcons,
  knowledgeRegisterText,
} from '../../registrationProjectsAndTechnologies/knowledgeRegister'

import { useEffect, useState } from 'react'

export function Knowledge({ id }: { id: string }) {
  const [knowledgeKey, setKnowledgeKey] = useState<string[]>([])
  const [knowledgeText, setKnowledgeText] = useState<string>(
    '/* Clique no card para saber sobre a tecnologia */',
  )

  useEffect(() => {
    setKnowledgeKey(Object.keys(knowledgeRegisterIcons))
  }, [])

  const renderKnowledgeIcons = (knowledge: string): JSX.Element => {
    return knowledgeRegisterIcons[knowledge]
  }

  const renderKnowledgeText = (knowledge: string) => {
    setKnowledgeText(knowledgeRegisterText[knowledge])
  }

  return (
    <KnowledgeContainer id={id}>
      <h2>
        Conhecimentos <span>.</span>
      </h2>

      <TechnologyReading>{knowledgeText}</TechnologyReading>

      <TechnologyKnowledgeContainer>
        {knowledgeKey.map((knowledgeKey) => (
          <TechnologyKnowledgeButton
            key={knowledgeKey}
            title={knowledgeKey}
            onClick={() => renderKnowledgeText(knowledgeKey)}
          >
            {renderKnowledgeIcons(knowledgeKey)}
          </TechnologyKnowledgeButton>
        ))}
      </TechnologyKnowledgeContainer>
    </KnowledgeContainer>
  )
}

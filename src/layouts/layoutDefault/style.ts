import styled from 'styled-components'

export const LayoutDefaultContainer = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

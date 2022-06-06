import styled from "styled-components"

const FiltersNavbar = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  justify-content: space-between;
  gap: 2rem;
  padding-block: 1rem;

  @media(max-width: 767px) {
    flex-direction: column;
    gap: .5rem;
  }
`

export { FiltersNavbar }

import styled from "styled-components";

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

`;
export const CastItem = styled.li`
  margin-bottom: 50px;
  margin: 0 auto;
`;
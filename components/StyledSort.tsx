import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem 1rem;
  border-radius: 5px;
  margin-left: 3rem;
`;

export const StyledSvgContainer = styled.div`
  font-size: 2.5rem;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

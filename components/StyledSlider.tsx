import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 7rem;
  height: 2.5rem;
  border: ${({ theme }) => theme.border};
  border-radius: 2rem;
  display: flex;
  justify-content: ${({ theme }) => theme.sliderPoint};
  align-items: center;
  cursor: pointer;
  transition: justify-content 0.5s ease-in;

  & > div {
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.text};
    border-radius: 2rem;
  }
`;

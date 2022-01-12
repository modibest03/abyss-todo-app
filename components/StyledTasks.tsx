import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem;
  width: 50rem;
  border-radius: 0.5rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

export const StyledHeaderText = styled.div``;

export const StyledSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > span {
    margin-right: 5px;
  }
`;

export const StyledAddTaskContainer = styled.form`
  margin-top: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;

  & > svg {
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 40%;
    transform: translate(0, -50%);
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0 3rem;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 2rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

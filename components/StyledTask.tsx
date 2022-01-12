import styled from 'styled-components';
import { StyledTypes } from '../utils/types';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 1rem;
  cursor: pointer;

  & > svg {
    cursor: pointer;
  }
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const StyledCheckboxInput = styled.input`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
`;

export const StyledCheckboxText = styled.div<StyledTypes>`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

import { MdDelete } from 'react-icons/md';
import { TaskTypes } from '../utils/types';
import {
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxText,
  StyledContainer,
} from './StyledTask';

const Task: React.FC<TaskTypes> = ({
  task,
  id,
  status,
  editTodoStatus,
  deleteTodo,
}) => {
  return (
    <StyledContainer>
      <StyledCheckboxContainer onClick={() => editTodoStatus(status, id)}>
        <StyledCheckboxInput
          type='checkbox'
          checked={status}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => editTodoStatus(status, id)}
        />
        <StyledCheckboxText done={status}>{task}</StyledCheckboxText>
      </StyledCheckboxContainer>
      <MdDelete onClick={() => deleteTodo(id)} />
    </StyledContainer>
  );
};

export default Task;

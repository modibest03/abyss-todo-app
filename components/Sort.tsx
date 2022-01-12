import {
  FaSortAmountUpAlt,
  FaSortAmountDown,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaRegCalendarAlt,
  FaMinusCircle,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSortBy, setSortView, setTasks } from '../redux/appSlice';
import { useTasks } from '../utils/api';
import { useOutsideClick } from '@chakra-ui/react';
import React from 'react';
import { StyledSvgContainer, StyledContainer } from './StyledSort';

const Sort = () => {
  const dispatch = useDispatch();
  const { data } = useTasks();
  const ref:
    | ((
        | ((instance: HTMLDivElement | null) => void)
        | React.RefObject<HTMLDivElement>
      ) &
        React.RefObject<HTMLElement>)
    | null
    | undefined = React.useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => dispatch(setSortView()),
  });

  return (
    <StyledContainer ref={ref}>
      <StyledSvgContainer onClick={() => dispatch(setSortBy('long-to-short'))}>
        <FaSortAmountUpAlt />
      </StyledSvgContainer>
      <StyledSvgContainer onClick={() => dispatch(setSortBy('short-to-long'))}>
        <FaSortAmountDown />
      </StyledSvgContainer>
      <StyledSvgContainer onClick={() => dispatch(setSortBy('alphabetic-a-z'))}>
        <FaSortAlphaUp />
      </StyledSvgContainer>
      <StyledSvgContainer onClick={() => dispatch(setSortBy('alphabetic-z-a'))}>
        <FaSortAlphaDown />
      </StyledSvgContainer>
      <StyledSvgContainer onClick={() => dispatch(setSortBy('date'))}>
        <FaRegCalendarAlt />
      </StyledSvgContainer>
      <StyledSvgContainer onClick={() => dispatch(setTasks(data))}>
        <FaMinusCircle />
      </StyledSvgContainer>
    </StyledContainer>
  );
};

export default Sort;

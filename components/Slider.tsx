import { useDispatch } from 'react-redux';
import { setThemeMode } from '../redux/appSlice';
import { StyledContainer } from './StyledSlider';

const Slider = () => {
  const dispatch = useDispatch();

  return (
    <StyledContainer onClick={() => dispatch(setThemeMode())}>
      <div></div>
    </StyledContainer>
  );
};

export default Slider;

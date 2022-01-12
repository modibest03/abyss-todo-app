import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    border: string;
    sliderPoint: string;
  }
}

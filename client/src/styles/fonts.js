import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Book.otf') format('otf'),
    url('../fonts/CircularStd-Book.woff') format('otf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Bold.otf') format('otf'),
    url('../fonts/CircularStd-Bold.otf') format('otf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Black.otf') format('otf'),
    url('../fonts/CircularStd-Black.otf') format('otf');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;
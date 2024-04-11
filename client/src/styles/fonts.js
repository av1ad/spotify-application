import { css } from 'styled-components';
import CircularStdBook from '../fonts/CircularStd-Book.otf';
import CircularStdBold from '../fonts/CircularStd-Bold.otf';
import CircularStdBlack from '../fonts/CircularStd-Black.otf';

const fonts = css`
  @font-face {
    font-family: 'Circular Std';
    src: url(${CircularStdBook}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url(${CircularStdBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url(${CircularStdBlack}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;
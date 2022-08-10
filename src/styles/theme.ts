import { DefaultTheme } from 'styled-components';

const defaultColor = {
  forcRed: '#EF5B5B',
  black: '#1B1C1D',
  blue: '#F0F2F8',
  bgBlue: '#F3F5F7',
  tdGrey: '#EEEEEE',
  borderGrey: '#DDDDDD',
  dtGrey: '#CCCCCC',
};

const defaultCursor = {
  default: 'default',
  pointer: 'pointer',
  copy: 'copy',
  progress: 'progress',
  grab: 'grab',
  grabbing: 'grabbing',
  text: 'text',
  none: 'none',
};

const theme: DefaultTheme = {
  fontsize: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  color: defaultColor,
  cursor: defaultCursor,
};

export { theme, defaultColor, defaultCursor };

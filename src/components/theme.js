import { createTheme } from '@mui/material/styles';


let theme = createTheme({
    palette: {
      primary: {
        main: '#3457b21a',
      },
      secondary: {
        main: '#202027',
      },
    },
    typography: {
        fontFamily: [
          'Poppins',
        ].join(','),
      },

      
  });
  
  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });

export default theme;


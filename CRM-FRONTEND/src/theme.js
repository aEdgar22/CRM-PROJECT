import { extendTheme } from '@chakra-ui/react'

// example theme
const theme = extendTheme({
  colors: {
    primary: '#00618f',
    secundary: '#ededed',
    third: "#00e162",
    whiteColor: '#FFFF',
    grayColor: '#bababa',
  },
  fonts: {
    body: `"Poppins", sans-serif`,
    heading: `"Poppins", sans-serif`,
    
  },

});

export default theme;
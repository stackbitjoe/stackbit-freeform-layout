import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/global.css';

const theme = {
  breakpoints: ['420px', '769px', '1024px'],
  space: ['1rem', '1.25rem', '1.5rem', '1.75rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '1'],
  fontSizes: [16, 20, 28, 32],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  }
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
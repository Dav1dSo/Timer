import { defaultTheme } from "./styles/themes/default.ts"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "../Routes"

import { GlobalStyle } from "./styles/global.ts"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />

    </ThemeProvider>
    )
}

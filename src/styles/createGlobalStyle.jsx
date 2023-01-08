import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: #1A1A1A;
        position: relative;
    }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle
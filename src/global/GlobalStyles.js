import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    .input {
        border: rgba(165,181,175,.15) 2px solid;
    }

    .TimePicker-header-4, .Clock-innerDot-17, .Clock-pointer-14 {
        background-color: #1C9D87 !important;
    }

    .Clock-outerDot-18 {
        border: 16px solid #1C9D87 !important;
    }
`

export default GlobalStyles

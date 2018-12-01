import React from 'react'
import { Global, css } from '@emotion/core'

const CSS = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  html, body {
    overflow: hidden;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: #4527a0;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px;
  }
`

const GlobalStyles = () => <Global styles={CSS} />

export default GlobalStyles

import { injectGlobal } from 'react-emotion'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  html, body {
    overflow: hidden;
    min-height: 100%;
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #4527a0;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }
`

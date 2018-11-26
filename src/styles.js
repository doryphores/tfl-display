import { injectGlobal } from 'react-emotion'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,400i');

  html, body {
    overflow: hidden;
    min-height: 100%;
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #4527a0;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }
`

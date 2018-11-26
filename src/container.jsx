import styled from 'react-emotion'

const Container = styled('div')(props => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  width: props.width,
  flex: props.fullWidth && 1,
}))

export default Container

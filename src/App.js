import WeatherInfo from "./WeatherInfo"
import styled from "styled-components"


const Container = styled.div`
  position: relative;
  margin: 0 auto;
  border: 1px solid black;
  width: 100%;
  background: linear-gradient(267deg, rgba(56,51,255,1) 16%,
  rgba(126,96,215,1) 40%, rgba(184,133,182,1) 60%,
  rgba(72,150,189,1) 77%, rgba(83,89,181,1) 100%);
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 7px;
`


function App() {
  return (
    <Container>
      <Content>
        <Title>Weather App</Title>
       <WeatherInfo />
       </Content>
    </Container>
  )
}

export default App

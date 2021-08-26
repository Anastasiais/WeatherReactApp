import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 700px;
  height: 560px;
  border-radius: 15px;
  background-color: whitesmoke;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
`

const City = styled.h2`
  font-size: 25px;
`
const Temperature = styled.p`
  font-size: 30px;
  font-weight: 400;
  cursor: pointer;
`
const DateTime = styled.p`
  font-size: 24px;
  width: 100%;
`
 const Description = styled.p`
  font-size: 22px;
 `
 const Items = styled.section`
  font-size: 20px;
  align-self: flex-start;
 `
 const Wrap = styled.div`
  height: 150px;
  width: 150px;
  align-self: flex-start;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }
 `
 const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  padding: 0;
  width: 50%;
`
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`




function CardInformation({weatherData, isLoading}) {
    const date = new Date()
    const myDate = (date.getUTCDate()) + "." + (date.getUTCMonth() + 1)+ "." + (date.getUTCFullYear())

    return (
        <>
          {isLoading  && typeof weatherData.data !== 'undefined' ?
          <Card>
            <Info>
              <DateTime>{myDate}</DateTime>
              <Title> {weatherData.data[0].timezone} </Title>
            </Info>

            <Wrap>
               <img src= {`https://www.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`} alt=""/>
              </Wrap>

             <Block>

              <City> {weatherData.data[0].city_name}</City>
              <Temperature>{weatherData.data[0].temp} °C</Temperature>
              <Description>{weatherData.data[0].weather.description}</Description>
              <Items>
              <p>Pressure: {weatherData.data[0].pres} mb</p>
              <p> Wind direction: {weatherData.data[0].wind_cdir_full}</p>
              <p>Wind speed: {weatherData.data[0].wind_spd} m/s</p>
              <p> Relative humidity: {weatherData.data[0].rh} % </p>
              </Items>
             </Block>
          </Card>

          : null
           }

        </>
    )

}


export default CardInformation

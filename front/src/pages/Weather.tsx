import { IonItemDivider, IonContent, IonMenuToggle, IonIcon, IonTitle, IonInput, IonList, IonPage, IonToolbar, IonButton } from '@ionic/react';
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from "axios";
import { Tababar } from '../components/Tabbar';
import { SideMenu } from '../components/SideMenu';
import { home, informationCircle, menu, cloud } from 'ionicons/icons';

import {
  IonButtons,
  IonHeader,
  IonMenu,
  IonMenuButton,
} from '@ionic/react';

const Weather: React.FC = () => {

  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState<any>();

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: city, days: '1'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const getWeather = async () => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setWeather(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <>
      <IonPage>
        <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <InputButtonWrapper>
              <IonInput value={city} placeholder="Enter a city name"  onIonChange={e => setCity(e.detail.value!)}/>
                <IonButton fill="clear" color="dark" onClick={ () => getWeather()}>
                  Submit
                </IonButton>
              </InputButtonWrapper>
              <TextWrapper>{weather ? `${weather.current.temp_c} °C` : ""}</TextWrapper>
              <ConditionWrapper>
                <TextWrapper>{weather ? `${weather.current.condition.text}` : ""}</TextWrapper>
                {weather ? <ImageWrapper src={`${weather.current.condition.icon}`} alt="weather icon"/> : ""}
              </ConditionWrapper>
              <TextWrapper>{weather ? `${weather.location.localtime}` : ""}</TextWrapper>
              <TextWrapper>{weather ? `${weather.location.country}, ${weather.location.tz_id}` : ""}</TextWrapper>
          </IonList>
        </IonContent>
        <Tababar/>
      </IonPage>
    </>
  );
};

export default Weather;

const InputButtonWrapper = styled.div`
  display: flex;
  padding: 0 6px;
`;

const TextWrapper = styled.div`
  font-size: 16px;
  padding-left: 14px;
  // padding-bottom: 8px;
`;

const ImageWrapper = styled.img`
  width: 12%;
  height: 12%;
  padding-left: 140px;
`;

const ConditionWrapper = styled.div`
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const TitleContainer = styled.div`
  padding-top: 10px;
`;
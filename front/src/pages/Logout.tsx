import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonButton, IonText } from '@ionic/react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LogOut: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <TextContainer>
          Are you sure you want to log out?
        </TextContainer>
        <ButtonWrapper>
          <IonButton expand='block' fill="clear" color="dark" onClick={ () => history.push('/login')}>
              Yes
          </IonButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <IonButton  expand='block' fill="clear" color="dark" onClick={ () => history.push('/home')}>
            <TextContainer>
              No
            </TextContainer>
          </IonButton>
        </ButtonWrapper>
      </IonContent>
    </IonPage>
  );
};

export default LogOut;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  padding-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
import { IonContent, IonPage } from '@ionic/react';
import styled from 'styled-components';
import { Tababar } from '../components/Tabbar';

import {
  IonButtons,
  IonHeader,
  IonToolbar,
  IonMenuButton,
} from '@ionic/react';

const AboutTab: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <TextContainer>App developped by François HAUET</TextContainer>
      </IonContent>
      <Tababar/>
    </IonPage>
  );
};

export default AboutTab;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  padding: 0 0px;
  max-width: 100%;
  `;

import { IonIcon, IonContent, IonPage, IonTabBar, IonTabButton, IonTabs, } from '@ionic/react';
import styled from 'styled-components';
// import { home, informationCircle, menu, cloud } from 'ionicons/icons';
import { Tababar } from '../components/Tabbar';
import { SideMenu } from '../components/SideMenu';

import {
  IonButtons,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const HomeTab: React.FC = () => {
  return (
    <>
    <SideMenu/>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <TextContainer>Welcome on the home page of Stéphane's mobile App :)</TextContainer>
      </IonContent>
      <Tababar/>
    </IonPage>
    </>
  );
};

export default HomeTab;

const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-weight: bold;
padding: 0 30px;
max-width: 100%;
`;


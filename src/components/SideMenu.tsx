import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonButton, IonPage, IonMenuButton } from '@ionic/react';
import styled from 'styled-components';

export const SideMenu: React.FC = () => (
  <>
    <IonMenu contentId="main">
      {/* <IonHeader>
        <IonToolbar color="black">
        <TitleContainer>
            <IonTitle>Main Menu</IonTitle>
        </TitleContainer>
        </IonToolbar>
      </IonHeader> */}
      {/* <IonContent> */}
      <ListContainer>
        <IonList>
          <IonItem>Settings</IonItem>
          <IonItem>Help</IonItem>
        </IonList>
        </ListContainer>
      {/* </IonContent> */}
    </IonMenu>
    <IonPage id="main">
    </IonPage>
  </>
);

// const TitleContainer = styled.div`
//     padding-top: 70px;
//     padding-bottom: 10px;
//     `;

const ListContainer = styled.div`
    padding-top: 50px;
    `;
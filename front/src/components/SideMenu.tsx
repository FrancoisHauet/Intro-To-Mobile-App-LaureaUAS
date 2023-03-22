import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonPage } from '@ionic/react';
import styled from 'styled-components';

export const SideMenu: React.FC = () => (
  <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
        <IonButton href='/logout' fill="clear" color="dark">logout</IonButton>
      </IonHeader>
      {/* <ListContainer>
          <IonList>
            <IonItem>
            </IonItem>
          </IonList>
        </ListContainer> */}
    </IonMenu>

  {/* <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu> */}
  </>
);

const ListContainer = styled.div`
    // padding-top: 50px;
  `;
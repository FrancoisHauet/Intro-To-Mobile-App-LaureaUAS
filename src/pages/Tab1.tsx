import { IonContent, IonPage } from '@ionic/react';
import { SideMenu } from '../components/SideMenu';
import styled from 'styled-components';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <TextContainer>Home page</TextContainer>
      </IonContent>
      <SideMenu/>
    </IonPage>
  );
};

export default Tab1;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  text-aglin: center;
  `;

import { IonIcon, IonTabBar, IonTabButton, IonTabs, } from '@ionic/react';
import { home, informationCircle, cloud } from 'ionicons/icons';

export const Tababar: React.FC = () => {
  return (
      <IonTabBar slot="bottom" color="black">
        <IonTabButton mode="ios" tab="about" href="/about">
          <IonIcon icon={informationCircle} />
        </IonTabButton>
        <IonTabButton mode="ios" tab="home" href="/home">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton mode="ios" tab="weather" href="/weather">
          <IonIcon icon={cloud} />
        </IonTabButton>
      </IonTabBar>
  );
};

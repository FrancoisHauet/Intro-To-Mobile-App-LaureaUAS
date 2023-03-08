import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonMenuToggle, IonButton, IonToolbar, IonHeader, IonText, IonTitle
} from '@ionic/react';

import { menu } from 'ionicons/icons';
import styled from 'styled-components';

import { IonReactRouter } from '@ionic/react-router';
import { home, informationCircle, call } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle>
            <HeaderContainer>
            <IonButton fill="default">
              <IonIcon icon={menu}/>
            </IonButton>
            <TitleContainer>
              <IonTitle>Mobile App Dev</IonTitle>
            </TitleContainer>
            </HeaderContainer>
          </IonMenuToggle>
        </IonToolbar>
      </IonHeader>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="black">
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={informationCircle} />
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={call} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const TitleContainer = styled.div`
  // padding-left: 10px;
  padding-top: 10px;
  // text-align: center;
`;
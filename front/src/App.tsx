import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonMenuToggle, IonButton, IonToolbar, IonTitle
} from '@ionic/react';

import styled from 'styled-components';

import { IonReactRouter } from '@ionic/react-router';
import { menu } from 'ionicons/icons';

import AboutTab from './pages/About';
import HomeTab from './pages/Home';
import Weather from './pages/Weather';
import Register from './pages/Register';
import Login from './pages/Login';
import LogOut from './pages/Logout';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';
import { SideMenu } from './components/SideMenu';
// import { Tababar } from './components/Tabbar';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <HomeTab/>
          </Route>
          <Route exact path="/about">
            <AboutTab/>
          </Route>
          <Route exact path="/weather">
            <Weather/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/logout">
            <LogOut/>
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const TitleContainer = styled.div`
  padding-top: 10px;
`;
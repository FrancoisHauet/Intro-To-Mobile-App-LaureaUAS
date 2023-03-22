import React, { useState } from 'react';
import { IonTitle, IonContent, IonHeader, IonPage, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonButton } from '@ionic/react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [answer , setAnswer] = useState<string>();
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  const history = useHistory();

  const LoginUser = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    axios.post("http://localhost:3000/login", {
      username: username,
      password: password
    })
    .then((response) => {
      console.log(response);
        setAnswer(response.data)
        if (response.status === 200) {
          // setIsLogged(true);
          history.push('/home');
        }
    }).catch(err => {
        setAnswer("User not found")
    });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <TitleContainer>
            <IonTitle>Login</IonTitle>
          </TitleContainer>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListContainer>
          <IonList>
            <IonItem>
              <IonInput value={username} required={true} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={password} required={true} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <ButtonWrapper>
              <IonButton expand='block' fill="clear" color="dark" onClick={ () => LoginUser()}>
                  Login
              </IonButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <IonButton  expand='block' fill="clear" color="dark" href='/register' >
                <TextContainer>
                  No account? Create one
                </TextContainer>
              </IonButton>
            </ButtonWrapper>
          </IonList>
        </ListContainer>
      </IonContent>
    </IonPage>
  );
};

export default Login;

const TitleContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
  `;

const ListContainer = styled.div`
  padding-top: 0px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  // text-decoration: underline;
  text-aglin: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from "react-router";

interface OwnProps extends RouteComponentProps {}



const Signup: React.FC= (props) => {

  const [username, setUsername] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const Signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }else{console.log('inside');
        // return <Redirect to={"/signupcamera"} />;
        goForward();
      
      
    }
 
  
        
  
  };
  let goForward = ()=>{
    (props as any).history.push("/")
  }

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>

      <IonRow>  
      <IonCol>
        <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab food</IonButton>
      </IonCol>
    </IonRow>

    <IonRow>  
    <IonCol>
      <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab Express</IonButton>
    </IonCol>
  </IonRow>

  <IonRow>  
  <IonCol>
    <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab Bike</IonButton>
  </IonCol>
</IonRow>

<IonRow>  
<IonCol>
  <IonButton routerLink="/signupcamera" className="next" color="success" expand="block">New User </IonButton>
</IonCol>
</IonRow>

      </IonContent>

    </IonPage>
  );
};

export default Signup;

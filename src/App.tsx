import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivities from './pages/AddActivities/AddActivities';
import {homeOutline, accessibilityOutline, addOutline} from 'ionicons/icons';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <Route path="/all-activities" component={AllActivities} exact/>
        <Route path="/add-activities" component={AddActivities} exact/>
        <IonMenu side="start" contentId="Taskapp">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Task app</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
            <IonMenuToggle>
                <IonItem routerLink='/all-activities' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={homeOutline}/>
                  <IonLabel>Home</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink='/all-activities' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={accessibilityOutline}/>
                  <IonLabel>All activities</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink='/add-activities' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={addOutline}/>
                  <IonLabel>Add activities</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
    <IonRouterOutlet id='Taskapp'>
      <Route path='/all-activities' component={AllActivities} exact />
      <Route path='/add-activities' component={AddActivities} exact />
      <Redirect to='/all-activities' />
    </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

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
import AddActivity from './pages/AddActivity/AddActivity';
import {homeOutline, accessibilityOutline, addOutline, bodyOutline, newspaperOutline} from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
<IonApp>
        <IonReactRouter>
            <IonMenu contentId='TaskApp'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Task App</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={bodyOutline}/>
                                <IonLabel>All activities</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/add-activity" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={newspaperOutline}/>
                                <IonLabel>Add activity</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            <ActivitiesContextProvider>
                <IonRouterOutlet id="TaskApp">
                    <Route path='/all-activities' component={AllActivities} exact />
                    <Route path='/add-activity' component={AddActivity} exact />
                    <Redirect to='/all-activities' />
                </IonRouterOutlet>
            </ActivitiesContextProvider>
        </IonReactRouter>
    </IonApp>
);

export default App;
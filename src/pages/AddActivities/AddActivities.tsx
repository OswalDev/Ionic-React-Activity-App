import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const AddActivities: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>Add activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Add a new activity</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>    
    );

};

export default AddActivities;
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const AddActivities: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add a activities</IonTitle>
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
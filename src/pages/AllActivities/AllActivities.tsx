import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const AllActivities: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Here are your activities</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>    
    );

};

export default AllActivities;
import React from 'react';

import { Text, View } from 'react-native';

const CharteText = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 12,
                    color: 'white',
                    marginBottom: 20,
                    textAlign: 'justify',
                }}
            >
                Ce document est valable pour toute la durée du semestre en cours et sera susceptible
                d’être utilisé comme justificatif de responsabilité de l’étudiant en cas de
                dégradation ou de comportement inapproprié lors d’une de ses permanences dans le
                foyer étudiant.
            </Text>
            <Text
                style={{
                    fontSize: 12,
                    color: 'white',
                    marginBottom: 20,
                    textAlign: 'justify',
                }}
            >
                Je soussigné Eliott NomDeFamille membre de l’association / membre du groupe,
                superPerm engage ma personne et le reste de mon équipe à respecter les règles
                suivantes lors de toutes les permanences tenues au Pic’asso durant le semestre.
                Respecter les décisions de l’équipe d’astreinte. Notamment en ce qui concerne les
                horaires de fermeture, le volume sonore et l’utilisation de la licence de cercle
                privé. Respecter le matériel mis à disposition des permanenciers. Respecter les
                étudiants présents dans l’enceinte du foyer. Payer mes consommations pendant mes
                permanences. En effet, les permanences sont tenues bénévolement. Leur but est
                d’assurer un service aux étudiants et non de permettre à ceux qui les tiennent d’en
                tirer des avantages. Ne pas servir une personne qui a trop bu et prévenir
                l’astreinteur si l’état de la personne nécessite l’intervention de personnel
                qualifié. Distribuer des éthylotests aux conducteurs le demandant. Ceux-ci seront à
                disposition derrière le bar durant les heures de services d’alcool (18h30 à 21h30).
                Rester sobre car nous vous rappelons que vous êtes responsable du bon déroulement de
                la permanence. Effectuer les tâches ménagères de manière correcte en suivant les
                consignes des astreinteurs.
            </Text>
            <Text
                style={{
                    fontSize: 12,
                    color: 'white',
                    textAlign: 'justify',
                }}
            >
                La caution est un chèque de 200€ à l’ordre du BDE UTC Pic’asso par groupe de
                permanence, que ce soit groupe d’amis ou association. Le non-respect d’une des
                règles citées ci-dessus pourra entraîner l’encaissement de la caution, totale ou
                partielle selon la gravité du problème.
            </Text>
        </View>
    );
};

export default CharteText;

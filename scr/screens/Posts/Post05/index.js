import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post5() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>Vou ganhar mimos?</style.headerInformationsDate>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Como estou buscando meu propósito e aspiração através dessa oportunidade?</style.postMainTitle>
                <style.postMainSubtitle>Pô, eu ia adorar ajudar pessoas usufruindo de móveis lindos da MadeiraMadeira...</style.postMainSubtitle>
                <style.postMainSubtitle>Como eu disse anteriormente, existem várias formas de ajudar pessoas, e programação com certeza é uma delas. Claro, automatizar funções sempre vai ser uma forma de ajudar, porque aqui nós temos um leque infinito de possibilidades.</style.postMainSubtitle>
                <style.postMainSubtitle>Na MadeiraMadeira, não só vejo uma ótima oportunidade em desenvolver mais o trabalho que eu amo, que é a área de desenvolvimento de software, como também vejo uma oportunidade de me desenvolver como pessoa, sempre aprendendo e debatendo com todos os tipos de pessoas, por onde for.</style.postMainSubtitle>

            </style.postMain>



        </style.postContainer>
    )
}
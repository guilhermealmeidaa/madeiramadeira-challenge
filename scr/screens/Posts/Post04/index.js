import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post4() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>Comer tudo que eu puder!</style.headerInformationsDate>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Qual o seu propósito?</style.postMainTitle>
                <style.postMainSubtitle>Acho que todo mundo já pensou em qual é o seu propósito na vida, e muitas dessas pessoas já até tiveram uma crise existencial por conta disso! (autocritíca)</style.postMainSubtitle>
                <style.postMainSubtitle>Depois de muito pensar, cheguei na conclusão de qual o meu propósito. Além da busca pela minha felicadade e da felicidade mútua, acredito que eu nasci pra ajudar, indepente da forma que for. </style.postMainSubtitle>
                <style.postMainSubtitle>O legal é: ajuda é ajuda de qualquer maneira. Seja ajudando um idoso a atravessar a rua, ou criando um APP que supra a necessidade de alguém. Seja fazendo projetos sociais, ou deixar o ambiente de trabalho mais leve. Eu gosto de ajudar.</style.postMainSubtitle>
                <style.postMainSubtitle>E claro... se eu puder comer todas as variedades de comida do mundo...</style.postMainSubtitle>
            </style.postMain>




        </style.postContainer>
    )
}
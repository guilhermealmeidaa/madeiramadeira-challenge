import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post1() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>Achei que vocês já tinham meus dados...</style.headerInformationsDate>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Quem sou eu?</style.postMainTitle>
                <style.postMainSubtitle>Meu nome é Guilherme de Almeida Lima, sou estudante da Universidade Federal do ABC, em São Paulo. Atualmente, estou me graduando no Bacharelado em Ciência e Tecnologia e no Bacharelado em Ciência da Computação. </style.postMainSubtitle>
                <style.postMainSubtitle>Me considero uma pessoa muito eclética no quesito "gostos". Por isso, às vezes você vai me ver ouvindo funk na batida mais forte, e às vezes The Beatles, soluçando com Hey Jude.</style.postMainSubtitle>
                <style.postMainSubtitle>Também sou, com certeza, uma Dog Person. Entretanto, tenho um gatinho chamado Luna, que é o motivo do meu viver.</style.postMainSubtitle>
            </style.postMain>


            <style.postLink>

                <style.postLinkTitle>Que me conhecer mais?</style.postLinkTitle>

                <style.postLinkContainer>

                    <style.postLinkText>instagram.com/guilhermealm._</style.postLinkText>

                    <style.postLinkButtom
                    onPress={() => Linking.openURL('https://www.instagram.com/guilhermealm._/')}>
                        <style.iconRight
                            name="arrow-right" />
                    </style.postLinkButtom>
                </style.postLinkContainer>

            </style.postLink>

        </style.postContainer>
    )
}
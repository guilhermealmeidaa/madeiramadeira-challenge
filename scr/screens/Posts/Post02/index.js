import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post2() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>"Fadas" é uma resposta válida?</style.headerInformationsDate>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>No que eu acredito?</style.postMainTitle>
                <style.postMainSubtitle>É... Me falaram que a pergunta é sobre a vida não sobre extraterrestre. Bem, nesse sentido, gosto muito acreditar que uma das principais experiências sensivéis do ser humano é a empatia. Simplesmente tudo na vida pode ser resolvido com empatia.</style.postMainSubtitle>
                <style.postMainSubtitle>Então, olhar para o outro se tornou um pilar intocável no que eu considero que seja minha filosofia de vida. Ao fazer isso, consigo perceber uma melhora em todos os aspectos da minha vida.</style.postMainSubtitle>
                <style.postMainSubtitle>No fim, existem mais coisas que eu levo a cada passo que eu dou, mas elas não cabem aqui, então deixaremos essa descoberta mais lá pra frente.</style.postMainSubtitle>

            </style.postMain>


            <style.postLink>

                <style.postLinkTitle>Caso tenha ficado a curiosidade...</style.postLinkTitle>
                <style.postMainSubtitle>Não, eu não acreditos em fadas.</style.postMainSubtitle>
                <style.postMainSubtitle>Sim, com certeza existe vida fora do planeta</style.postMainSubtitle>

            </style.postLink>

        </style.postContainer>
    )
}
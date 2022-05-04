import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post3() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>Tipo... passar a velhice em Maldivas?</style.headerInformationsDate>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Qual a minha aspiração?</style.postMainTitle>
                <style.postMainSubtitle>Eu, sinceramente, acho que o que inspira as pessoas devia ser felicidade. Tipo um conseso geral do universo, sabe?</style.postMainSubtitle>
                <style.postMainSubtitle>Então, posso dizer que existem várias coisas que me fascinam e me fazem levantar com um sorriso no rosto de manhã cedo, mas a busca por ser feliz é a maior delas.</style.postMainSubtitle>
                <style.postMainSubtitle>Claro, não falo só sobre a minha felicidade. Existem várias pessoas que eu gostaria de ver feliz, como meus pais. Portanto, é um conjunto de fatores que me faz batalhar todo dia, e eu acredito que o resultado disso vai ser muito satisfatório.</style.postMainSubtitle>

            </style.postMain>


            <style.postLink>

                <style.postLinkTitle>Pessoas que me inspiram?</style.postLinkTitle>
                <style.postMainSubtitle>1 - Meus pais. </style.postMainSubtitle>
                <style.postMainSubtitle>2 - Se contar como pessoa, com certeza o Naruto.</style.postMainSubtitle>

            </style.postLink>

        </style.postContainer>
    )
}
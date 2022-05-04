import React from "react";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Events() {
    const navigation = useNavigation();
    return (

        <style.eventsContainer>

            <style.eventsHeader>

                <style.eventsHeaderText>

                    <style.textTitle>O que você quer saber? </style.textTitle>
                    <style.textSubTitle>Clique no botão (seta) e escolha a curiosidade que você deseja saber!</style.textSubTitle>

                </style.eventsHeaderText>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Home')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.eventsHeader>

            <style.eventsMain>
                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>Achei que vocês já tinham meus dados...</style.eventsDate>
                        <style.eventsTitle>Quem sou eu?</style.eventsTitle>
                        <style.eventsSubtitle>Meu nome é Guilherme de Almeida Lima, sou estudante da Universidade Federal do ABC, em São Paulo. Atualmente, estou me graduando em Bacharelado....</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Que animal eu seria: <style.descriptionBold>Pato</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Power Ranger favorito:  <style.descriptionBold>Aquele branco super legal!</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post1')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>”Fadas” é uma resposta válida? </style.eventsDate>
                        <style.eventsTitle>No que eu acredito?</style.eventsTitle>
                        <style.eventsSubtitle>É... Me falaram que a pergunta é sobre a vida, e não sobre extraterrestre. Bem, nesse sentido, gosto muito acreditar que uma das principais...</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Fadas: <style.descriptionBold>Com certeza</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Extraterrestres: <style.descriptionBold>Estamos sendo observados</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post2')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>Tipo...passar a velhice em maldivas? </style.eventsDate>
                        <style.eventsTitle>Qual a minha aspiração?</style.eventsTitle>
                        <style.eventsSubtitle>Eu, sinceramente, acho que o que inspira as pessoas devia ser felicidade. Tipo um conseso geral do universo, sabe?</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Inspiração: <style.descriptionBold>O Naruto nunca desistiria!</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Desistir: <style.descriptionBold>Jamais!</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post3')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>Comer todos os tipos de comida existentes. </style.eventsDate>
                        <style.eventsTitle>Qual o seu propósito?</style.eventsTitle>
                        <style.eventsSubtitle>Um bate-papo com Devs especialistas para te ajudar a descobrir que área do desenvolvimento você se identifica mais.</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Comida preferida: <style.descriptionBold>Uma vez pizza, sempre pizza!</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Uma velinha atravessando a rua: <style.descriptionBold>Ajudar!!!</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post4')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>

                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>
                        <style.eventsDate>Depende... vou ganhar mimos? </style.eventsDate>
                        <style.eventsTitle2>Como estou buscando meu propósito e aspiração através dessa oportunidade?</style.eventsTitle2>
                        <style.eventsSubtitle>Pô, eu ia adorar ajudar pessoas usufruindo de móveis lindos da MadeiraMadeira...</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Movél preferido: <style.descriptionBold>Mesa em L de LINDA</style.descriptionBold></style.eventsDescriptionOrg>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post5')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


            </style.eventsMain>




        </style.eventsContainer>



    )

}
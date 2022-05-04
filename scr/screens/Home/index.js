import React from "react";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  return (

    <style.container>

      <style.greetingHello>

        <style.greetingHelloText>Bem-vindo(a) <style.greetingTextOrange>!</style.greetingTextOrange></style.greetingHelloText>

      </style.greetingHello>

      <style.greetingSlogan>

        <style.greetingSloganText>Aqui você vai conhecer <style.textOrange>um pouco</style.textOrange> de quem eu sou e se aventurar por uma parte da minha cabeça! </style.greetingSloganText>

      </style.greetingSlogan>

      <style.greetingImageContainer>

        <style.greetingImage
          source={require('../../assets/person.png')} />

      </style.greetingImageContainer>



        <style.greetingButton
          onPress = {()=> navigation.navigate('Events')}
          underlayColor="#F9824A"
        >

          <style.icon
          name="arrow-right"/>
    

        </style.greetingButton>




    </style.container>




  )
}
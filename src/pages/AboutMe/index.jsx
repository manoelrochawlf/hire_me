import React from "react";
import { Container, LeadText, Profile, TitleText } from "./styles";
import profile from "../../assets/images/profile.png"

const AboutMe = () => {
    return ( 
        <Container>
            <TitleText>Um pouco sobre mim...</TitleText>
            <Profile src={profile} alt="code"/>
            <LeadText>
                Olá! me chamo Manoel, tenho 21 anos e sou desenvolvedor. Tenho o sonho de ingressar na área de técnologia há algum tempo e desde então venho me preparando pra isso. Sei que é dificil no meio de tantas pessoas escolher alguém, mas eu tenho certeza que estou pronto pro desafio. Sou muito coletivo, comunicativo e determinado e tenho certeza que posso entregar muito valor tanto humano, quanto técnico.
            </LeadText>
        </Container>
     );
}
 
export default AboutMe;
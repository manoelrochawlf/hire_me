import React from "react";
import { Container, CodeIcon, LeadText } from "./styles";
import code from "../../assets/icons/code.png"

const Home = () => {
    return ( 
        <Container>
            <LeadText>Uma plataforma pessoal para você recrutador me conhecer um pouco como pessoa e como dev</LeadText>
            <CodeIcon src={code} alt="code"/>
        </Container>
     );
}
 
export default Home;
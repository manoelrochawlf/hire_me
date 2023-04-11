import React from "react";
import { Container, Column, Title, Certificate } from "./styles";
import certificate from "../../assets/images/certificate.png"
import Grades from "../../components/Grades";

const Achievements = () => {
    return ( 
        <Container>
                <Column>   
                    <Title>Conclusão de curso</Title>
                    <Certificate src={certificate} alt="certificado"></Certificate>
                </Column>
                <Column>
                    <Title>Notas</Title>
                    <Grades></Grades>
                </Column>
        </Container>
     );
}
 
export default Achievements;
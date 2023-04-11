import React from "react";
import { CardTools, Container, ColumnTools, GridTools, IconTools, NameTools, Title } from "./styles";
import { frontTools, backTools } from "../../mocks/tools";

const Skills = () => {
    return ( 
        <Container>
            <ColumnTools>
                <Title>Linguagens/Ferramentas que utilizo no front</Title>
                <GridTools>
                    {frontTools.map((front) => (
                        <CardTools>
                            <NameTools>{front.name}</NameTools>
                            <IconTools src={front.icon} alt="icon"></IconTools>
                        </CardTools>
                    ))}
                </GridTools>
            </ColumnTools>
            <ColumnTools>
                <Title>Linguagens/Ferramentas que utilizo no back</Title>
                <GridTools>
                    {backTools.map((front) => (
                        <CardTools>
                            <NameTools>{front.name}</NameTools>
                            <IconTools src={front.icon} alt="icon"></IconTools>
                        </CardTools>
                    ))}
                </GridTools>
            </ColumnTools>
        </Container>
     );
}
 
export default Skills;
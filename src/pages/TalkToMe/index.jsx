import React, { useState } from "react";
import { Container, Form, FormContainer, Label, Input, TextArea, SubmitButton } from "./styles";

const TalkToMe = () => {
    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [opiniao, setOpiniao] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Nome:', nome);
      console.log('Empresa:', empresa);
      console.log('Opinião:', opiniao);
    };
  
    return ( 
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <Label>Nome:</Label>
          <Input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <Label>Empresa:</Label>
          <Input
            type="text"
            value={empresa}
            onChange={(event) => setEmpresa(event.target.value)}
            required
          />
        </FormContainer>
        <FormContainer>
          <Label>Opinião sobre o projeto:</Label>
          <TextArea
            value={opiniao}
            onChange={(event) => setOpiniao(event.target.value)}
            required
          />
        </FormContainer>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </Container>
     );
}
 
export default TalkToMe;
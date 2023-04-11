import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & > * {
    opacity: 0;
    transform: translateX(-100%);
    animation: fadeInRight 0.8s ease-out forwards;
  }

  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }

  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  border: 2px solid #e88f10;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #f5b151;;
  width: 100%;
`;

export const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #f5b151;;
  width: 100%;
`;

export const SubmitButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #e88f10;
  color: aliceblue;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
  color: #f5b151;
`;
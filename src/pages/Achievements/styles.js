import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0rem 2rem;
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
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 468px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3rem
  }
`;

export const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  color: #e88f10;
  cursor: pointer;
  padding: 0.8rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;
export const Certificate = styled.img`
    width: 30rem;
    border-radius: 8px;
    border: 2px solid #e88f10;
  @media (max-width: 540px) {
    width: 18rem;
  }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;



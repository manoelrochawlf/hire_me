import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  
`
export const LeadText = styled.h1`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 3.5rem;
    color: #f69203;
    word-break: break-word;
    width: 45rem;
    @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
    @media (max-width: 600px) {
    font-size: 1.5rem;
    width: 30rem;
    padding: 0rem 4rem;
  }
`

export const CodeIcon = styled.img`
    width: 20rem;
    height: 20rem;
    @media (max-width: 1200px) {
    width: 40%;
    height: 40%;
  }
    @media (max-width: 600px) {
      width: 25%;
      height: 25%;
  }
`
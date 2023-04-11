import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0rem 6rem;
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
  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const ColumnTools = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  color: #e88f10;
  cursor: pointer;
  padding: 0.8rem;
  @media (max-width: 765px) {
    font-size: 1rem;
  }
`;
export const GridTools = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  @media (max-width: 930px) {
    width: 100%;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const IconTools = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  pointer-events: auto;
`;

export const CardTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 1rem;
  color: #f5b151;
  border: 2px solid #f69203;
  cursor: pointer;
  :hover{
    background: #f69203;
    color: aliceblue;
  }
  &:hover ${IconTools} {
    animation: spin 1s linear infinite; 
  }
  @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  @media (max-width: 600px) {
      padding: 0.5rem;
    }
`;

export const NameTools = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
`;



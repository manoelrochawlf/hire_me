import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`
export const Logo = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    color: #f69203;
`
export const Items = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 25rem;
    @media (max-width: 768px) {
        display: none;
    }
`
export const Item = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    color: #e88f10;
`
export const Contact = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    color: #e88f10;
    margin-left: auto;
    @media (max-width: 768px) {
    display: none;
    }
`

export const MobContainer = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        margin-top: 0.8rem;
        margin-left: auto ;
        img{
            width: 1.8rem;
            height: 1.8rem;
            cursor: pointer;
        }
            &.active img{
            border: 2px solid #f69203;
            border-radius: 50%;
            padding: 0.1rem;
        }
        
  }
`

export const DropdownContainer = styled.div`
display: none;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2rem;
    right: 0;
    background: aliceblue;
    border-radius: 5px;
    margin-top: 1.5rem;
    margin-right: 0.3rem;
    padding: 0.5rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    gap: 1rem;
    z-index: 1;
}
`;

export const DropdownItem = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: #e88f10;
  cursor: pointer;
  padding: 0.8rem;
  :hover {
    background: #f69203;
    color: aliceblue;
  }
`;

import React, { useState } from "react";
import { HeaderContainer, Contact, Item, Items, Logo, MobContainer, DropdownContainer, DropdownItem } from "./styles";
import pizza from "../../assets/icons/pizza.png"

console.log(pizza);

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    }

    const pizzaClassName = dropdownOpen ? "active" : "";

    return ( 
        <HeaderContainer>
            <Logo>hire.me</Logo>
            <Items>
                <Item>sobre mim</Item>
                <Item>skills</Item>
                <Item>feedbacks</Item>
            </Items>
           <MobContainer onClick={handleDropdownToggle} className={pizzaClassName}>
            <img src={pizza} alt="sdas" />
           </MobContainer>
           {dropdownOpen && 
        <DropdownContainer>
          <DropdownItem>sobre mim</DropdownItem>
          <DropdownItem>skills</DropdownItem>
          <DropdownItem>feedbacks</DropdownItem>
          <DropdownItem>fale comigo :)</DropdownItem>
        </DropdownContainer>
      }
           <Contact>fale comigo :)</Contact>
        </HeaderContainer>
     );
}
 
export default Header;
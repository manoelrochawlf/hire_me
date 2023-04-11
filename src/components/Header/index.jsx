import React, { useState } from "react";
import { HeaderContainer, Contact, Item, Items, Logo, MobContainer, DropdownContainer, DropdownItem } from "./styles";
import pizza from "../../assets/icons/pizza.png"
import { Link } from "react-router-dom";

console.log(pizza);

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    }

    const pizzaClassName = dropdownOpen ? "active" : "";

    return ( 
        <HeaderContainer>
            <Link to="/">
              <Logo>hire.me</Logo>
            </Link>
            <Items>
              <Link to="/about">
                <Item>sobre mim</Item>
              </Link>
              <Link to="/skills">
                <Item>skills</Item>
              </Link>
              <Link to="/achievements">
                <Item>conquistas</Item>
              </Link>
            </Items>
           <MobContainer onClick={handleDropdownToggle} className={pizzaClassName}>
            <img src={pizza} alt="pizza" />
           </MobContainer>
           {dropdownOpen && 
        <DropdownContainer>
          <Link to="/about">
          <DropdownItem>sobre mim</DropdownItem>
          </Link>
          <Link to="/skills">
          <DropdownItem>skills</DropdownItem>
          </Link>
          <Link to="/achievements">
          <DropdownItem>conquistas</DropdownItem>
          </Link>
          <Link to="/talktome">
          <DropdownItem>fale comigo :)</DropdownItem>
          </Link>   
        </DropdownContainer>
      }
        <Link to="/talktome">
          <Contact>fale comigo :)</Contact>
        </Link>
        </HeaderContainer>
     );
}
 
export default Header;
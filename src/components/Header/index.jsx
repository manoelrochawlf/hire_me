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
              <Link to="feedbacks">
                <Item>feedbacks</Item>
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
          <Link to="/feedbacks">
          <DropdownItem>feedbacks</DropdownItem>
          </Link>
          <Link>
          <DropdownItem>fale comigo :)</DropdownItem>
          </Link>   
        </DropdownContainer>
      }
           <Contact>fale comigo :)</Contact>
        </HeaderContainer>
     );
}
 
export default Header;
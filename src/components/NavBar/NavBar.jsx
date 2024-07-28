import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/deportem_logo.jpg";

const NavBar = () => {
  return (
    <Flex
      className="navBar"
      justify={"space-between"}
      align={"center"}
      height={"10vh"}
      w={"100%"}
      bg={"#222831"}
    >
      <Heading color={"#F7EEF1"} ml={4}>
        <Link to="/">
          <Image w={"100%"} src={logo} />
        </Link>
      </Heading>
      <Menu>
        <MenuButton as={Button} color={"#c5d0d3"} rightIcon={<FaAngleDown />}>
          Categorías
        </MenuButton>
        <MenuList>
          <MenuItem
            color={"#c5d0d3"}
            _hover={{ bg: "#c5d0d3", color: "#416d6d" }}
          >
            <Link to="/categoria/playeras">Playeras</Link>
          </MenuItem>

          <MenuItem
            color={"#c5d0d3"}
            _hover={{ bg: "#c5d0d3", color: "#416d6d" }}
          >
            <Link to="/categoria/pants">Pants</Link>
          </MenuItem>
          <MenuItem
            color={"#c5d0d3"}
            _hover={{ bg: "#c5d0d3", color: "#416d6d" }}
          >
            <Link to="/categoria/tenis">Tenis</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;

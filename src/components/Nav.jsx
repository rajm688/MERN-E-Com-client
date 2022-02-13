import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: 800;
  ${mobile({ fontSize: "24px" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
  ${mobile({ fontSize: " 12px", MediaList: "10px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>NetCart.in</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Log In</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

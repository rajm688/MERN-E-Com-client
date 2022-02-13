import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: white;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}

`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 80%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NetCart.in</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laborum magni, provident sunt amet cum omnis tempora laudantium
          voluptate deleniti, iste sint perspiciatis reiciendis qui ab in earum
          ratione recusandae.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#4267B2">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#bc2a8d">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#00acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color=" #c8232c">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGoodIcon style={{ marginRight: "10px" }} />
          2/6, west street,Mumbai,98676
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +91 98987 87868
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          sales@neetshop.in
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

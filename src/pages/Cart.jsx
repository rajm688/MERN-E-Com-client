import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import NewsLetter from "../components/NewsLetter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ paddding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Toptexts = styled.div`
  ${mobile({ display: "none" })}
`;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Button = styled.button``;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const Productprice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Productname = styled.span``;
const ProductID = styled.span``;
const ProductSize = styled.span``;

const SummarryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.span``;
const Summaryitem = styled.span`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummarButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopContainer>
          <TopButton>Continue Shopping</TopButton>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </Toptexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </TopContainer>
        <BottomContainer>
          <Info>
            <Product>
              <ProductDetails>
                <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <Productname>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </Productname>
                  <ProductID>
                    <b>ID: </b>875934793475394
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>32
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <Productprice>Rs. 700</Productprice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <Productname>
                    <b>Product: </b>HAKURA T-SHIRT
                  </Productname>
                  <ProductID>
                    <b>ID: </b>93813718293
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <Productprice>Rs. 1200</Productprice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummarryTitle>Order Summary</SummarryTitle>
            <Summaryitem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>Rs. 1800</SummaryItemPrice>
            </Summaryitem>
            <Summaryitem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 69.0 </SummaryItemPrice>
            </Summaryitem>
            <Summaryitem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-Rs. 50.0</SummaryItemPrice>
            </Summaryitem>
            <Summaryitem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. 1700</SummaryItemPrice>
            </Summaryitem>
            <SummarButton>Check Out Now</SummarButton>
          </Summary>
        </BottomContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;

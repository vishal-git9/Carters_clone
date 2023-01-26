import {
  Stack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  RadioGroup,
  HStack,
  Radio,
  VStack,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import OrderSuccesful from "@/components/confirmCheckout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { CheckoutItem } from "@/components/checkout/checkoutItem";
import { CheckoutSummaryItem } from "@/components/checkout/checkoutSummary";
import { useDispatch, useSelector } from "react-redux";
import { addOrderProducts } from "@/redux/orders/orders.action";
import { userAgent } from "next/server";
import { useRouter } from "next/router";
import { deleteCartProducts, getCartProducts } from "@/redux/cart/cart.actions";
import { PrivateAuthProvider } from "@/components/PrivateAuth";
import { getLiveUser } from "@/redux/Authentication/Auth.action";
const Checkout = () => {
  const cartData = useSelector((store) => store.CartData.Cart);
  const AuthData = useSelector((store) => store.AuthUser.isAuth);
  console.log(AuthData)
  const loading = useSelector((store) => store.CartData.loading);
  const router = useRouter()
  const dispatch = useDispatch()
  const [ordered, setOrdered] = useState(false);
  const setOrder = () => {
    cartData?.forEach((el)=>{
      dispatch(addOrderProducts(el))
    })
    cartData?.forEach((el)=>{
      dispatch(deleteCartProducts(el.id))
    })
    dispatch(getCartProducts())
    router.push("/orders")
  };

  useEffect(()=>{
    if(!AuthData){
     router.push("/Signup")
    }
  },[])
  return (
    <>
    <Head>
        <title>Checkout</title>
        <meta name="description" content="diapers Checkout page" />
      </Head>
    { !loading ? (<Stack
      p={"10px"}
      width={{ lg: "80%", base: "95%" }}
      margin={"auto"}
      mt={"100px"}
    >
      {ordered ? <OrderSuccesful state={ordered} /> : null}
      <Flex flexDirection={{ lg: "row", base: "column" }} gap="50px">
        <Stack>
          {/* Shipping Information */}
          <Stack>
            <Heading fontSize="20px">Shipping Information</Heading>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input type="text" placeholder="your full name" />
            </FormControl>
            <FormControl>
              <FormLabel>Street Address</FormLabel>
              <Input type="text" placeholder="your full name" />
            </FormControl>
            <Flex gap={"10px"}>
              <FormControl>
                <FormLabel>Zip Code</FormLabel>
                <Input type="text" placeholder="your full name" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="your full name" />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="your email" />
            </FormControl>
          </Stack>
          {/* Shipping method */}

          <Stack gap={"20px"} pt="40px">
            <Heading fontSize="20px">Shipping Method</Heading>
            <RadioGroup defaultValue="Express">
              <HStack spacing="24px">
                <HStack alignItems={"center"}>
                  <Radio value="Express" size="lg"></Radio>
                  <VStack lineHeight={"18px"} alignItems="flex-start">
                    <Text
                      fontWeight={"bold"}
                      fontSize={{ lg: "20px", base: "15px" }}
                    >
                      Express $14.99
                    </Text>
                    <Text fontSize={{ lg: "16px", base: "11px" }}>
                      Dispatched in 24 days
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Radio value="Standard" size="lg"></Radio>
                  <VStack lineHeight={"18px"} alignItems="flex-start">
                    <Text
                      fontWeight={"bold"}
                      fontSize={{ lg: "20px", base: "15px" }}
                    >
                      Standard $4.99
                    </Text>
                    <Text fontSize={{ lg: "16px", base: "11px" }}>
                      Dispatched in 2-4 days
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            </RadioGroup>
          </Stack>
          {/* payment information */}
          <Stack pt={"40px"} gap={"20px"}>
            <Heading fontSize={"20px"}>Payment Information</Heading>
            <RadioGroup defaultValue="Credit Card">
              <HStack spacing="24px">
                <HStack alignItems={"center"}>
                  <Radio value="Express" size="lg"></Radio>
                  <VStack lineHeight={"18px"} alignItems="flex-start">
                    <Text
                      fontWeight={"bold"}
                      fontSize={{ lg: "20px", base: "15px" }}
                    >
                      Credit Card
                    </Text>
                    <Text fontSize={{ lg: "16px", base: "11px" }}>
                      Pay with card via Stripe
                    </Text>
                    <Flex alignItems={"center"} gap="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#1565C0"
                          d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                        ></path>
                        <path
                          fill="#FFC107"
                          d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#ff9800"
                          d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        ></path>
                        <path
                          fill="#d50000"
                          d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        ></path>
                        <path
                          fill="#ff3d00"
                          d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.994 12.242H4.863v1.502h2.002c-.165.345-.402.646-.691.89l.001.001-.002 0c-.457.382-1.044.611-1.686.611-1.114 0-2.065-.692-2.448-1.67-.117-.298-.181-.621-.181-.959 0-.545.166-1.05.449-1.47l.049-.065c.476-.664 1.251-1.094 2.13-1.094.702 0 1.341.274 1.81.725l1.254-1.401C6.748 8.569 5.67 8.111 4.487 8.111c-1.555 0-2.926.789-3.737 1.987-.486.72-.77 1.587-.77 2.52 0 .74.178 1.438.494 2.054.747 1.456 2.263 2.453 4.012 2.453 1.201 0 2.292-.469 3.1-1.235l-.001-.001c.867-.818 1.408-1.983 1.408-3.27V12.242zM21.045 15.353l-1.773-4.658h1.077l1.211 3.545 1.485-3.545h.935c0 0-2.9 6.842-2.924 6.899l-.935.024C20.138 17.579 21.045 15.353 21.045 15.353zM18.012 13.552c0 .577-.508.988-1.18.988-.528 0-.865-.245-.865-.62 0-.387.324-.612.943-.648l1.105-.081L18.012 13.552zM17.095 10.695c-1.053 0-1.832.581-1.861 1.379h.894c.074-.38.438-.628.938-.628.606 0 .949.272.949.775l0 .347-1.24.064c-1.151.067-1.775.522-1.775 1.312 0 .798.643 1.328 1.565 1.328.623 0 1.201-.304 1.463-.786h.02l.003.786h.915v-3.114C18.967 11.268 18.229 10.695 17.095 10.695zM12.56 12.22h-1.221V9.78h1.221c.871 0 1.43.411 1.43 1.221S13.435 12.22 12.56 12.22zM12.852 8.865h-2.428v6.407h.915v-2.136h1.479C14.088 13.136 15 12.25 15 11S14.105 8.865 12.852 8.865z"></path>
                      </svg>
                    </Flex>
                  </VStack>
                </HStack>
                <HStack>
                  <Radio value="Standard" size="lg"></Radio>
                  <VStack lineHeight={"18px"} alignItems="flex-start">
                    <Text
                      fontWeight={"bold"}
                      fontSize={{ lg: "20px", base: "15px" }}
                    >
                      PayPal
                    </Text>
                    <Text fontSize={{ lg: "16px", base: "11px" }}>
                      Pay with your PayPal account
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <polygon
                        fill="#194fc6"
                        points="13,9 5,9 7,3 13,3"
                      ></polygon>
                      <path
                        fill="#2583ef"
                        d="M13,3c0-3-4-3-4-3H4L1,12h3.75L7,3H13z"
                      ></path>
                      <path
                        fill="#2daefd"
                        d="M13,3c0,2.761-2.239,5-5,5H5.75L4,15h4l1-4h2c2.761,0,5-2.239,5-5C16,4.343,14.657,3,13,3z"
                      ></path>
                    </svg>
                  </VStack>
                </HStack>
              </HStack>
            </RadioGroup>
            <Stack>
              <Flex gap={"10px"} flexWrap={{ lg: "nowrap", base: "wrap" }}>
                <FormControl>
                  <FormLabel>Credit card number</FormLabel>
                  <Input type="text" placeholder="card number" />
                </FormControl>
                <FormControl>
                  <FormLabel>Name on card</FormLabel>
                  <Input type="text" placeholder="Card name" />
                </FormControl>
              </Flex>
              <HStack flexWrap={{ lg: "nowrap", base: "wrap" }} gap="10px">
                <VStack alignItems={"flex-start"}>
                  <FormLabel>Expiry Date</FormLabel>
                  <Flex gap={"10px"}>
                    <FormControl>
                      <Input type="number" placeholder="date" />
                    </FormControl>
                    <FormControl>
                      <Input type="number" placeholder="year" />
                    </FormControl>
                  </Flex>
                </VStack>
                <FormControl width={"30%"}>
                  <FormLabel>CVV/CVC</FormLabel>
                  <Input type="number" placeholder="CVC" />
                </FormControl>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          bgColor={useColorModeValue("#F7FAFC", "transparent")}
          padding={{ lg: "30px", base: "5px" }}
        >
          <Stack spacing="6">
            {cartData?.map((item) => (
              <CheckoutItem key={item.id} {...item} />
            ))}
          </Stack>
          <CheckoutSummaryItem setOrder={setOrder} />
        </Stack>
      </Flex>
    </Stack>
  ) : (
    <Stack mt="160px" justifyContent={"center"} alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Stack>)}
    </>
  );
};

export default Checkout

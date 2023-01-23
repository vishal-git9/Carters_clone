import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  Spinner,
  ListItem
} from "@chakra-ui/react";
import 'swiper/css';
import "swiper/css/navigation";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from "swiper";
import { MdLocalShipping } from "react-icons/md";
import {BiArrowBack} from "react-icons/bi"
import { useRouter } from "next/router";
export default function ProductDetailsPage({ data,AddtoCart }) {
  let imgDetails = data.imageDetails;
  const router = useRouter()
  return (
    <Container maxW={"7xl"} position="relative">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        pt="70px"
      >
        <Stack position={"absolute"} bgColor={useColorModeValue("gray.100", "black")} width={"30px"} height="30px" alignItems={"center"} justifyContent="center" borderRadius={"50%"} top={{lg:"40px",base:"30px"}} fontSize={{base:"25px",lg:"30px"}} left="10px" zIndex={"1000"} cursor="pointer" >
          <BiArrowBack onClick={()=>router.back()}/>
        </Stack>
        <Flex height={"fit-content"}>
          <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
            {imgDetails?.map((el) => (
              <SwiperSlide key={el}>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={el}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={600}
              fontSize={"4xl"}
            >
              ${data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  {data.size}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {data.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category
                  </Text>{" "}
                  {data.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    reviews
                  </Text>{" "}
                  {data.reviews}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    color:
                  </Text>{" "}
                  {data.color}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            onClick={AddtoCart}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

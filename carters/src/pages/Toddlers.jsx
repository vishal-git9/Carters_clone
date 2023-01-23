import React from "react";
import Filters from "@/components/accordions";
import { getFilteredProducts, getPricedProducts, getProducts, getRatedProducts,getLatestProducts } from "@/redux/baby/baby.action";
import { HStack, VStack, Stack, Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductAddToCart from "@/components/cards";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Spinner
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { getPriceApi } from "@/redux/baby/baby.api";
import Link from "next/link";
// filters
const categories = [
  "Pajamas",
  "Sets",
  "Bottoms",
  "Tops",
  "Dress",
  "Shoes",
  "Diaper bag",
];
const occasions = [
  "Christmas",
  "Easter",
  "Valentine's Day",
  "halloween",
  "Birthday",
];
const brand = ["Carters", "oshkosh B'gosh", "skip Hop", "little planet"];
import Head from "next/head";
const ToddlerPage = () => {
  let data = useSelector((store) => store.BabyProducts.data);
  let loading = useSelector((store) => store.BabyProducts.loading);
  const dispatch = useDispatch();
  const getFiltered = (el)=>{
    dispatch(getFilteredProducts(el))
  }
  const getPriceApi = (sort)=>{
    dispatch(getPricedProducts(sort))
  }
  const getRating = ()=>{
    dispatch(getRatedProducts())
  }
  const getLatest = ()=>{
    dispatch(getLatestProducts())
  }
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
    <Head>
        <title>Toddlers</title>
        <meta name="description" content="Toddler clothes page " />
      </Head>
    {!loading?(<Stack
      mt={"100px"}
      display={"flex"}
      flexDirection={{ lg: "row", md: "row", base: "column" }}
      alignItems={{ base: "center", lg: "flex-start", md: "flex-start" }}
    >
      {/* for filters */}
      <VStack width={"20%"} height={"fit-content"} mt={"40px"}>
        <Filters title={"Categories"} data={categories} filtered = {getFiltered}/>
        <Filters title={"occasions"} data={occasions} filtered = {getFiltered} />
        <Filters title={"brand"} data={brand} filtered = {getFiltered} />
      </VStack>
      {/* for products */}
      <Box width="75%" display={"flex"} flexDirection='column' alignItems={"flex-end"}>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          SortBy
          </MenuButton>
          <MenuList>
            <MenuItem onClick={()=>getPriceApi("asc")}>Low to high</MenuItem>
            <MenuItem onClick={()=>getPriceApi("desc")}>High to low</MenuItem>
            <MenuItem onClick={getRating}>High rated</MenuItem>
            <MenuItem onClick={getLatest}>Latest Arrival</MenuItem>
          </MenuList>
        </Menu>
        <Grid
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          width="100%"
        >
          {data?.map((el) => (
            <GridItem w="100%" key={el.id}>
              <Link href={`/Baby/${el.id}`}>
              <ProductAddToCart key={el.id} data={el} />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Stack>
  ):(<Stack mt="160px" justifyContent={"center"} alignItems="center"><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Stack>)}
</>
)
};

export default ToddlerPage;
import ProductDetailsPage from "@/components/productDetailsPage";
import { getBabyApi, getProductDetails } from "@/redux/baby/baby.api";
import React from "react";
import { Box, Spinner,Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProducts } from "@/redux/cart/cart.actions";
import Head from "next/head";
const productDetailsPage = ({ details }) => {
  const {id} = details
  const loading = useSelector((store) => store.CartData.loading);
  const dispatch = useDispatch();
  const AddtoCart = () => {
    dispatch(addCartProducts(details));
  };
  return (
    <>
    <Head>
        <title>{id}</title>
        <meta name="description" content={id} />
      </Head>
    <Box mt={"60px"}>
      {!loading ? (
          <ProductDetailsPage data={details} AddtoCart={AddtoCart} />
      ) : (
        <Stack mt="160px" justifyContent={"center"} alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      )}
       </Box>
       </>
  );
};

export async function getStaticPaths() {
  const data = await getBabyApi();
  return {
    paths: data.map((product) => ({ params: { id: product.id } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  let id = context.params.id;
  const data = await getProductDetails(id);
  return {
    props: {
      details: data,
    },
  };
}

export default productDetailsPage;

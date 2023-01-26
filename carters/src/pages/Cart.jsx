import { deleteCartProducts, getCartProducts, increaseQuantity,decreaseQuantity } from '@/redux/cart/cart.actions'
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import Head from 'next/head'
  import { Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
  import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { CartItem } from '@/components/cart/cartCard'
import { CartOrderSummary } from '@/components/cart/cartOrderSummary'  
 const Cart = () => {
  const cartData = useSelector((store)=>store.CartData.Cart)
  let loading = useSelector((store)=>store.CartData.loading)
  const dispatch = useDispatch()
  const router = useRouter()
  React.useEffect(()=>{
    dispatch(getCartProducts())
  },[dispatch])
  const onClickDelete = (id)=>{
    dispatch(deleteCartProducts(id))
  }
  const incQuantity = (id,value)=>{
    dispatch(increaseQuantity(id,value))
    dispatch(getCartProducts())
  }
  const decQuantity = (id,value)=>{
    dispatch(decreaseQuantity(id,value))
    dispatch(getCartProducts())
  }
  return (
    <>
    <Head>
        <title>Cart</title>
        <meta name="description" content="diapers Cart page" />
      </Head>
    {!loading? (<Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
      mt="60px"
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData?.length || 0})
          </Heading>
  
          <Stack spacing="6">
            {cartData?.map((item) => (
              <CartItem key={item.id} {...item} onClickDelete={onClickDelete} incQuantity = {incQuantity} decQuantity = {decQuantity}/>
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary cartData = {cartData}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Text color={mode('blue.500', 'blue.200')} cursor="pointer" onClick={()=>router.back()}>Continue shopping</Text>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  ):(<Stack mt="160px" justifyContent={"center"} alignItems="center"><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Stack>)}
</>
)
 }

  export default Cart
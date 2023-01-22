import { getCartProducts } from '@/redux/cart/cart.actions'
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { Spinner } from '@chakra-ui/react'
  import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
  import { CartItem } from '../components/cart/cartItem'
  import { CartOrderSummary } from '../components/cart/CartOrderSummary'
  
 const Cart = () => {
  const cartData = useSelector((store)=>store.CartData.Cart)
  let load = useSelector((store)=>store.CartData.loading)
  const [loading,setloading] = React.useState(load)
  console.log(loading)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getCartProducts())
  },[dispatch])
  return !loading?(
    <Box
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
            Shopping Cart ({cartData.length})
          </Heading>
  
          <Stack spacing="6">
            {cartData?.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary cartData = {cartData}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  ):(console.log("hi"))
 }

  export default Cart
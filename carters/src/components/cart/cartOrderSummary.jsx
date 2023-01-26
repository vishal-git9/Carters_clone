import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
  import { formatPrice } from './Price'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    const cartData = useSelector((store)=>store.CartData.Cart)
    const isAuth = useSelector((store) => store.AuthUser.isAuth);
    console.log(isAuth)
    const router = useRouter()
    let Total = 0
    cartData?.forEach((el) => {
      Total+= el.price*el.quantity
    });
    const checkout = ()=>{
      if(isAuth){
        router.push("/checkout")
      }else{
        router.push("/Signup")
      }
    }
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(Total)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(Total)}
            </Text>
          </Flex>
        </Stack>
        <Button isDisabled={cartData?.length===0} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={checkout}>
          Checkout
        </Button>
      </Stack>
    )
  }
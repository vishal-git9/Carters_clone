import { Button, CloseButton, Flex, Link, Select, useColorModeValue,Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from '../cart/Price'
import { CartProductMeta } from '../cart/cartProductMeta' 
export const CheckoutItem = (props) => {
  const {
    isGiftWrapping,
    id,
    title,
    category,
    quantity,
    image,
    currency,
    price
  } = props
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        category={category}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />
    </Flex>
  )
}
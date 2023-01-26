import { Button, CloseButton, Flex, Link, Select, useColorModeValue,Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './Price'
import { CartProductMeta } from './cartProductMeta'
const QuantitySelect = (props) => {
  const {incQuantity,decQuantity,value,id} = props
  return (
    <Flex
      maxW="fit-content"
      aria-label="Select quantity" display={"flex"} justifyContent={"center"} alignItems="center" gap="10px"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    >
      <Button isDisabled={value===1} fontWeight={"bold"} fontSize="25px" textAlign={"center"} onClick={()=>decQuantity(id,value-1)}>-</Button>
      <span>{value}</span>
      <Button fontWeight={"bold"} fontSize="20px" textAlign={"center"} onClick={()=>incQuantity(id,value+1)}>+</Button>
    </Flex>
  )
}

export const CartItem = (props) => {
  const {
    isGiftWrapping,
    id,
    title,
    category,
    quantity,
    image,
    currency,
    price,
    onClickDelete,
    incQuantity,
    decQuantity
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

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          id = {id}
          incQuantity = {incQuantity}
          decQuantity = {decQuantity}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=>onClickDelete(id)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=>onClickDelete(id)} />
        <QuantitySelect
          value={quantity} 
          id = {id}
          incQuantity = {incQuantity}
          decQuantity = {decQuantity}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
import React from 'react'
import { Alert,AlertIcon } from '@chakra-ui/react'
export const AlertBox= () => {
  return (
    <>
    <Alert status='error'>
    <AlertIcon />
    There was an error while fetching your data
  </Alert>
  </>
  )
}

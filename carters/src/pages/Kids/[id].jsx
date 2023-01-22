import ProductDetailsPage from '@/components/productDetailsPage'
import { getkidsApi, getProductDetails } from '@/redux/kids/kids.api'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { addCartProducts } from '@/redux/cart/cart.actions'
import Loading from '../loading'
 const productDetailsPage = ({details}) => {
    const dispatch = useDispatch()
    const AddtoCart = ()=>{
        dispatch(addCartProducts(details))
    }
  return (
    <Suspense fallback={<Loading/>}>
        <Box mt={"60px"}>
        <ProductDetailsPage data={details} AddtoCart={AddtoCart}/>
        </Box>
    </Suspense>
  )
}


export async function getStaticPaths(){
    const data  = await getkidsApi()
    return {
        paths: data.map((product)=>({ params: { id: product.id } })),
        fallback: false, // can also be true or 'blocking'
      }
}

export async function getStaticProps(context){
    let id = context.params.id
    const data = await getProductDetails(id)
    return {
        props:{
            details:data
        }
    }
}


export default productDetailsPage
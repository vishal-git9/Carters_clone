import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import {AiOutlineHeart} from "react-icons/ai"
  
  // const data = {
  //   isNew: true,
  //   imageURL:"https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw9993dd44/productimages/1M701710.jpg?sw=470",
  //   name: 'Baby 2-Piece Fleece Bunny Hoodie & Legging Set',
  //   price: 4.5,
  //   rating: 3.5,
  //   numReviews: 34,
  // };
  
  function Rating({ rating, numReviews }) {
    return (
      <Box display={"flex"} alignItems="center">
        <Box display={"flex"}>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
          </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm" textAlign={"left"}>
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart({data}) {
    return (
      <Flex p={30} w={{lg:"full",md:"400px",base:"200px"}} alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          width={"300px"}
          pt={5}
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
          <Box display="flex" justifyContent={"center"} width="100%" height={"200px"}>
          <Image
            src={data.image}
            alt={`Picture of ${data.title}`}
            roundedTop="lg"
            width={"200px"}
            height="200px"
          />
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.new && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                width={"70%"}
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.title}
              </Box>
              <Tooltip
                label="Add to Whislist"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <Box display={'flex'}>
                  <Icon as={AiOutlineHeart} h={7} w={7} alignSelf={'center'} />
                </Box>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.reviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;
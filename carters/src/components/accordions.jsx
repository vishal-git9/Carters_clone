import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack
  } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
export default function Filters({title,data,filtered}){
    return(
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {/* array of categories */}
      {data.map((el)=><VStack key={el} alignItems={"flex-start"}><Box><Checkbox onChange={()=>filtered(el)}>{el}</Checkbox></Box></VStack>)}
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}
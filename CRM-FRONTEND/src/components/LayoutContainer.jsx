import { Flex } from '@chakra-ui/react'
import React from 'react'

const LayoutContainer = ({children}) => {
  return (
    <Flex p="3rem 1.5rem" flexDir="column">
        {children}
    </Flex>
    
  )
}

export default LayoutContainer
import { Link } from "react-router-dom";
import { Flex, Image, Box, Spacer, HStack } from '@chakra-ui/react'
import logo from '/logo.png'

const Navbar = () => {
  return (
    <>
        <Flex as="nav" py="10px" px="60px" alignItems="center" bg='tomato' color='white'>
            <Box w='70px'>
                <Image src={logo} borderRadius='full' boxSize='50px' alt='logo' />
            </Box>
            <Spacer />
            <HStack spacing="45px">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
            </HStack>
        </Flex>
    </>
  )
}

export default Navbar
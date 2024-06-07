import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar

import { HStack } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { Flex } from "@chakra-ui/react"
import './Navbar.css'

const Username = () => {
  return (
    <HStack wrap="wrap" gap="6">
      <Button variant="ghost" size="xl">Username</Button>
    </HStack>
  )
}

const All_posts = () => {
    return (
      <HStack wrap="wrap" gap="6">
        <Button variant="ghost" size="xl">All Posts</Button>
      </HStack>
    )
  }

const Following = () => {
    return (
      <HStack wrap="wrap" gap="6">
        <Button variant="ghost" size="xl">Following</Button>
      </HStack>
    )
}

const Logout = () => {
    return (
      <HStack wrap="wrap" gap="6">
        <Button variant="ghost" size="xl">Log out</Button>
      </HStack>
    )
}

const Navbar = () => {
    return (
      <div className="navbar-container">
        <Flex gap="10">
            <Username />
            <All_posts />
            <Following />
            <Logout />
        </Flex>
      </div>
    )
}

export default Navbar;



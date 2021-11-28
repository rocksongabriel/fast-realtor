import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";


const Navbar = () => {
  return <>
    <Flex p="2" borderBottom="2px" borderColor="gray.200">
      <Box fontSize='2xl' fontWeight="bold" color="red.600">
        <Link href="/" paddingLeft="2">fastRealtor</Link>
      </Box>
      <Spacer>

      </Spacer>
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} color="blue.600" variant="outlined"/>
          <MenuList>
          <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>

    </Flex>
  </>
}

export default Navbar;
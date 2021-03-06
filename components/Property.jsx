import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";


const Property = ({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId} }) => {
  return <>
    <Link href={`/property/?${externalId}`} passHref>
      <Flex flexWrap="wrap" w="390px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
        <Box>
          <Image src={ coverPhoto ? coverPhoto.url : DefaultImage } width={380} height={300} alt="house image"/>
        </Box>
        <Box w="full">
          
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box paddingRight="3" color="green" fontSize="1em">{isVerified && <GoVerified />}</Box>
              <Text fontSize="1.1em" fontWeight="bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between" w="250px" color="blue.500" p="1" >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)} ...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  </>
}

export default Property;
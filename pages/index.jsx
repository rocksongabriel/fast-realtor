import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Heading } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchAPI } from "../utils/fetchApi";

const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" m="10">
    <Image src={imageUrl} width={600} height={400} alt="banner" />
    <Box p="5" marginLeft="50">
      <Heading as="h2" fontSize="2.3em" >
        {purpose}
      </Heading>
      <Text fontSize="25px" marginTop="10" marginBottom="10" fontWeight="bold" color="gray.500">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        marginTop="15"
        fontSize="3xl"
        fontWeight="bold"
        backgroundColor="black"
        _hover="gray"
        color="white"
        border="none"
        p="10"
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <>
      <Box>
        <Banner
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          purpose="BUY YOUR DREAM HOME"
          title1="Affordable Dream Homes for "
          title2="Everybody"
          desc1="Buy affordable Homes, Cortages, Apartments for "
          desc2="You and Your Family"
          linkName="/search?purpose=for-sale"
          buttonText="Buy a House"
        />
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>

        <Banner
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          purpose="RENT A NEW PLACE"
          title1="Affordable Dream Homes for "
          title2="Everybody to Rent"
          desc1="Looking For a Place to Stay?"
          desc2="Rent an Apartment, Home, Cortage at fast-realtor"
          linkName="/search?purpose=for-rent"
          buttonText="Find a Rental Home"
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const propertiesForSale = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertiesForRent = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );

  return {
    props: {
      propertiesForRent: propertiesForRent.hits,
      propertiesForSale: propertiesForSale.hits,
    },
  };
};

export default Home;

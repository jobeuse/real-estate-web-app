import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {Flex,Box,Text,Button } from '@chakra-ui/react'

import {basUrl,fetchApi} from '../utils/fetchApi'

import Property from '../components/Property';
const Banner = ({purpose,imgUrl,title1,title2,desc1,desc2,linkName,buttonText}) =>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     <Image src={imgUrl} width={500} height={300} alt="Banner"/> 
     <Box p="5"> 
     <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose} 
        </Text>
      <Text fontSize="sm" fontWeight="bold">
        {title1} <br/> {title2}
        </Text>
        <Text fontSize="lg"  paddingTop="3"   paddingBottom="3" fontWeight="medium" color="gray.700">
        {desc1}<br/>
        {desc2}
        </Text>
        <Button fontSize="xl" >
            <Link href={linkName}>
              {buttonText}
            </Link>
        </Button>
     </Box>
  </Flex>)


export default function Home({propertiesSale, propertiesRent}) {
  console.log(propertiesRent);
  return ( 
      <Box> 
      <Banner 
      purpose="RENT A HOME"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="This is the first page of Rental Homes"
        desc2="The second page of Rental Homes"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/220876558/4f00312916c9424693f9a91a7a17cf97"
      />
       <Flex flexWrap="wrap">
          {propertiesRent.map((property)=> 
          
          <Property property={property} key={property.id}/>
          
          )} 
        </Flex>

        <Banner 
      purpose="Sale A HOME"
        title1="Sale Homes For"
        title2="Everyone"
        desc1="This is the first page of Sale Homes"
        desc2="The second page of Sale Homes"
        buttonText="Explore Saling"
        linkName="/search?purpose=for-rent"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/220876558/4f00312916c9424693f9a91a7a17cf97"
      />

      <Flex flexWrap="wrap">
          {propertiesSale.map((property)=> 
          
          <Property property={property} key={property.id}/>
          
          )} 
        </Flex>


      </Box> 
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${basUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

  const propertyForRent = await fetchApi(`${basUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
  props: {
    propertiesSale: propertyForSale?.hits,
    propertiesRent: propertyForRent?.hits,
}

}
}



























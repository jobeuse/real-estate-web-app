import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {Flex, Box,Text,Icon} from "@chakra-ui/react"
import {BsFilter} from "react-icons/bs";
import SearchFilter from '../components/SearchFilter';
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg"
import { GoVerified } from 'react-icons/go';
import {basUrl,fetchApi} from '../utils/fetchApi'

const Search = ({properties}) => {
    const [searchFilter, setSearchFilter]=useState(false);
    const router = useRouter();
    return (
        <Box> ` `
            <Flex cursor="pointer"
            bg="gray.400"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            justifyContent="center"
            alignItems="center"
            onClick={()=>setSearchFilter((prevFilters)=>!prevFilters)}
            >
                <Text>
                    Search Property
                </Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}
                />
            </Flex>
            {searchFilter && <SearchFilter/>}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose && router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties && properties.map((property)=><Property property={property} key={property.id}/>)}
            </Flex>
            {properties &&  properties.length === 0 &&(
                <Flex justifyContent="center" alignItems="center" flexDirection="column"
                marginTop="5" marginBottom="5">
                    <Image alt="no results" src={noresult} />
                    <Text fontSize="2xl" marginTop="4">
                        No results found
                    </Text>
                </Flex>
            )}
        </Box>
    )

}


export default  Search;


export async function getServerSideProps({query}){

    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    //const propertie = await fetchApi(`${basUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const data = await fetchApi(`${basUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
    props: {
        properties: data?.hits, 
  }
  
  }
  }
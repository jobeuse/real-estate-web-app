import Link from 'next/link';
import {Box, Flex, Text,Avatar} from '@chakra-ui/react';
import Image from 'next/image';
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs';
import {GoVerify} from 'react-icons/go';
import millify from 'millify';


const Property = ({property:{coverPhoto,price,rentFrequancy,rooms,title,baths,area,agency,isVerfied,externalID}}) =>(
    <Link href={`/property/${externalID}`} passHref>
       <Flex flexWrap="wrap" w="420px" p="5" padddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <img src={coverPhoto?coverPhoto.url:""} width={400} height={260} alt="House" />
            </Box>
            <Box w="full">
                <Flex padddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">
                            {isVerfied && <GoVerified/>}
                        </Box>
                        <Text fontSize="lg" fontWeight="bold">
                            AED { millify(price)} {rentFrequancy &&
                             `/${rentFrequancy}`}
                        </Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                                {rooms} <FaBed/> | {baths} <FaBath/>  {millify(area)} sqft  <BsGridFill/>
                </Flex>
                <Text>
                    {title.length > 30 ?`${title.substring(0.30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
)


export default Property;
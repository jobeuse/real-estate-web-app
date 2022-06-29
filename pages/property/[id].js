import Link from 'next/link';
import {Box, Flex, Text,Avatar} from '@chakra-ui/react';
import Image from 'next/image';
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs';
import {GoVerify} from 'react-icons/go';
import millify from 'millify';
import {basUrl,fetchApi} from '../../utils/fetchApi'
import ImageScrollbar from '../../components/ImageScrollbar';


const PropertySingleDetails = ({PropertyDetails:{price,rentFrequancy,rooms,title,baths,area,agency,isVerfied,externalId,photos}}) =>(
    <Box maxWidth="1000px" margin="auto" p="4"> 
         <ImageScrollbar data={photos}/>
    </Box>
);

export default PropertySingleDetails;

export async function getServerSideProps({params:{id}}){
    const data= await fetchApi(`${basUrl}/properties/detail?ExternalID=${id}`);
    return {
        props:{
            PropertyDetails:data
        }
    }
}
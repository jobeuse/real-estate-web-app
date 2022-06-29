import { useContext } from "react";

import Image from "next/image";
import { Box,Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu";
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from "react-icons/fa";
import { dataAttr } from "@chakra-ui/utils";


const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleLeft}
            onClick={scrollPrev}
            fontSize="2xl"
            cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleRight}
            onClick={scrollNext}
            fontSize="2xl"
            cursor="pointer"
            />
        </Flex>
    )
}


const ImageScrollbar = () =>(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow:'hidden' }}>
        {dataAttr.map((image) =>(
            <Box width="910px" key={image.id} itemId="image.id" overflow="hidden" p="11">
                <Image alt="Propery"
                 placeholder="blur"
                  blurDataURL={image.url} 
                  sizes="(max-width:500px) 100px, (max-width:1023) 400px,1000px"
                  src={image.url} width={1000} height={500}/>
            </Box>
        ))

        }
    </ScrollMenu> 
)

export default ImageScrollbar;
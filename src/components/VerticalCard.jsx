import { Flex, Image, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function VerticalCard({src , alt, content}) {
    return (
        <Flex direction='column' align='center'>
            <Image src={src} alt={alt} width={257} height={180}></Image>
            <Text p={15} fontSize='xl' fontWeight={500}>{content}</Text>
        </Flex>
    )
}
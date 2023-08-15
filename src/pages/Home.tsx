import {Heading, 
        Box, 
        Center,
        Input,
        InputGroup,
        Card,
        CardBody,
        Text,
        CardFooter,
        Image,
        Divider,
        Flex} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { Provider, Carousel, LeftButton, RightButton  } from "chakra-ui-carousel";

export function Home() {

    const carousselBox={
        w:'300px', 
        boxShadow:'md',
        rounded:'md',
        backgroundColor:'white.100',
        marginLeft:'70px',
    }
    return (
            <Box 
            >
                <Box h='120px'
                background='RGB(82 203 192)'
                borderBottomRadius='50px'
                marginBottom='40px'>
                <Center>
                <Heading
                    as="h1"
                    fontWeight="bold"
                    bgGradient='linear(to-t, black, gray)'
                    bgClip='text'
                    marginTop='30px'
                    marginBottom='25px'
                >
                    XYZ Travels
                </Heading>
                </Center>
                
                <Center>
                <InputGroup bgColor='white' w='50%' borderRadius='100px'>
                    <Input pl='30px' placeholder='Enter destination or bus number' h='50px' borderRadius='100px' />
                </InputGroup>
                </Center>
                </Box>

                
                <Box boxShadow='md' p='6' rounded='md' bg='white' margin='20px'>
                <Provider>
                <Carousel gap={50}>
                <Link to="/bus">
                <Card sx={carousselBox}>
                    <CardBody> 
                        <Center>
                        <Image
                        src='https://www.google.com/maps/d/thumbnail?mid=15bbu4WK5buIuYzRbago0wf2FSCE&hl=en'
                        alt='Chennai - Bangalore'
                        borderRadius='lg'
                        h='250px'
                        align='center'
                        />
                        </Center>
                    </CardBody>
                    <Divider />
                    <Center>
                    <CardFooter >
                    <FontAwesomeIcon icon={faBus} size="xl" color="#2c9b92"/>                        
                    <Text pl='10px'>Chennai - Bangalore</Text>
                    </CardFooter>
                    </Center>
                </Card>
                </Link>

                <Link to="/bus">
                <Card sx={carousselBox}>
                    <CardBody>
                        <Center>
                        <Image
                        src='https://www.team-bhp.com/forum/attachments/travelogues/2138540d1617045361-chennai-ooty-cbr250-re650-camping-trip-route_chennai_ooty.jpg'
                        alt='Chennai - Ooty'
                        borderRadius='lg'
                        h='250px'
                        align='center'
                        />
                        </Center>
                    </CardBody>
                    <Divider />
                    <Center>
                    <CardFooter >
                    <FontAwesomeIcon icon={faBus} size="xl" color="#2c9b92"/>                        
                    <Text pl='10px'>Chennai - Ooty</Text>
                    </CardFooter>
                    </Center>
                </Card>
                </Link>

                <Link to="/bus">
                <Card sx={carousselBox}>
                    <CardBody>
                        <Center>
                        <Image
                        src='https://durvankurholidays.com/images/Map-Shimla.jpg'
                        alt='Delhi - Manali'
                        borderRadius='lg'
                        h='250px'
                        align='center'
                        />
                        </Center>
                    </CardBody>
                    <Divider />
                    <Center>
                    <CardFooter >
                    <FontAwesomeIcon icon={faBus} size="xl" color="#2c9b92"/>                        
                    <Text pl='10px'>Shimla - Manali</Text>
                    </CardFooter>
                    </Center>
                </Card>
                </Link>

                <Link to="/bus">
                <Card sx={carousselBox}>
                    <CardBody>
                        <Center>
                        <Image
                        src='https://studychacha.com/images/Udaipur-Jaipur-Distance-Road.jpg'
                        alt='Jaipur - Udaipur'
                        borderRadius='lg'
                        h='250px'
                        align='center'
                        />
                        </Center>
                    </CardBody>
                    <Divider />
                    <Center>
                    <CardFooter >
                    <FontAwesomeIcon icon={faBus} size="xl" color="#2c9b92"/>                        
                    <Text pl='10px'>Jaipur - Udaipur</Text>
                    </CardFooter>
                    </Center>
                </Card>
                </Link>

                
                </Carousel>
                
                <Flex justify="space-between">
                <LeftButton bgColor='teal.200' size='sm' marginTop='30px'/>
                <RightButton bgColor='teal.200' size='sm' marginTop='30px'/>
                </Flex>
                </Provider>

                </Box>
            </Box>
    )
}

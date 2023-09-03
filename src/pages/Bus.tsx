import { Box, Center, Divider, Flex, Heading, Text, Image, VStack, HStack, useRadioGroup, useRadio, Icon } from "@chakra-ui/react";
import { SingleDatepicker } from "../Components/DayzedDatePicker";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { StarIcon } from "@chakra-ui/icons";

function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='3xl'
          h='40px'
          boxShadow='sm'
          _checked={{
            bg: 'teal.400',
            color: 'white',
            borderColor: 'teal.300',
          }}
          _focus={{
            boxShadow: 'inline',
          }}
          px={5}
          py={2}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
export function Bus() {
    const [date, setDate] = useState(new Date());
    const { text } = useParams();
    const options = ['8 AM Trip', '4 PM Trip']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'Trip',
        defaultValue: '8 AM Trip',
        onChange: console.log,
    })

  const group = getRootProps()
    return(
        <Box>
            <Box h='120px'
                bgGradient='linear(teal.300 0%, teal.200 50%)'
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
                    <Flex align='center' justify='center' outline="1px solid #e2e8f0" bgColor='white' w='50%' h='50px' borderRadius='100px' ><FontAwesomeIcon icon={faBus} size="xl" color="#2c9b92" /><Text pl='4' fontSize='lg'>{text}</Text></Flex>
                </Center>
            </Box>

            <Box  boxShadow='md' p='6' rounded='md' bg='white' marginLeft='20px' marginRight='20px' h='800px'>
            <VStack
                spacing={4}
                align='stretch'
                w='350px'
            >
                <HStack>
                <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1HTyQi9fvuheXOH2an4_ChcBe-PFTVaekg&usqp=CAU'
                alt='Driver'
                borderRadius='500px'
                h='150px'
                w='150px'
                align='center'
                />
                <Box>
                    Driver : Mr.ABC<br/>
                    <HStack><Text>Rating : </Text>
                        <Icon as={StarIcon} boxSize={4} color='teal.500'/>
                        <Icon as={StarIcon} boxSize={4} color='teal.500'/>
                        <Icon as={StarIcon} boxSize={4} color='teal.500'/>
                        <Icon as={StarIcon} boxSize={4} color='gray.100'/>
                        <Icon as={StarIcon} boxSize={4} color='gray.100'/>
                    </HStack>
                </Box>
                </HStack>
                <Divider />
                <Center>
                </Center>
                <Box boxShadow='sm'>
                    <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                    />
                </Box>
                <Flex justify='space-evenly'>
                <HStack {...group} >
            `   {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    
                <RadioCard key={value} {...radio}>
                    {value}
                </RadioCard>
                )
            })}
            </HStack>
            </Flex>

                
                </VStack>
            </Box>
        </Box>
    )
}
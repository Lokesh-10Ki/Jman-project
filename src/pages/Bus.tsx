import { Box, Center, Divider, Flex, Heading, Text, Image, VStack, HStack, useRadioGroup, useRadio, Icon, Input, Grid, Select, Button} from "@chakra-ui/react";
import { SingleDatepicker } from "../Components/DayzedDatePicker";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function RadioCard(props) {

    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
      <Box as='label'>
        <Input focusBorderColor='teal.300' {...input}/>
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

interface modelInput {
    latitude: number;
    longitude: number;
    driverAge: number;
    speedLimit: number;
    driverSex: number;
    roadType: number;
    lightCondition: number;
    weather: number;
    roadSurfaceCondition: number;
    urbanRural: number;
    junctionControl: number;
}
  
export function Bus() {

    const [date, setDate] = useState(new Date());
    const { text } = useParams();
    const options = ['8 AM Trip', '4 PM Trip'];
    
    
    const [modelInput, setModelInput] = useState<modelInput>({
        latitude: 0,
        longitude: 0,
        driverAge: 0,
        speedLimit: 0,
        driverSex: 0,
        roadType: 0,
        lightCondition: 0,
        weather: 0,
        roadSurfaceCondition: 0,
        urbanRural: 0,
        junctionControl: 0,
    });
    {/** Change the value of junction control 5 to 0 when requesting to API **/}
        
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
    
        // Convert value to a number
        const numericValue = parseFloat(value);
    
        // Update the corresponding field in formData
        setModelInput((prevData) => ({
          ...prevData,
          [name]: numericValue,
        }));
      };

    useEffect(() => {
        const updatedModelInput = { ...modelInput };
        delete updatedModelInput[''];
        console.log('Model Input:', updatedModelInput);
      }, [modelInput]);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'Trip',
        defaultValue: '8 AM Trip',
        onChange: console.log,
    })

    const group = getRootProps()
    return(
        <Box >
            <Box h='120px'
                bgGradient='linear(teal.300 0%, teal.200 50%)'
                borderBottomRadius='50px'
                marginBottom='40px'
                >
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
            
            <Flex justify='space-evenly' boxShadow='md' p='6' rounded='md' bg='white' marginLeft='20px' marginRight='20px' marginTop='50px' h='500px'>
                
                <VStack
                    spacing={4}
                    align='stretch'
                    marginTop='30px'
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

                    <Box boxShadow='sm'>
                        <SingleDatepicker
                            name="date-input"
                            date={date}
                            onDateChange={setDate}
                        />
                    </Box>
                    <Flex justify='space-evenly'>
                        <HStack {...group} >
                            {options.map((value) => {
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

                <Box marginTop='20px' w='73%'>
                <Flex>
                <VStack
                    spacing={4}
                    align='stretch'
                    w='600px'
                >
                    <Grid templateColumns="repeat(2, 1fr)" gap={5} alignItems="center">
                        <Box>
                            <Text textAlign="right" pr={2}>Latitude :</Text>
                        </Box>
                        <Box>
                            <Input 
                                type="number"
                                placeholder="Latitude"
                                name="latitude"
                                value={modelInput.latitude}
                                onChange={handleChange}
                                focusBorderColor='teal.300'
                            />
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Age Band of Driver :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name="driverAge"
                            placeholder='Select option'
                            value={modelInput.driverAge}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='4'>18-20</option>
                                <option value='5'>21-25</option>
                                <option value='6'>26-35</option>
                                <option value='7'>36-45</option>
                                <option value='8'>46-55</option>
                                <option value='9'>56-65</option>
                                <option value='10'>66-75</option>
                                <option value='11'>Over 75</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Speed_limit:</Text>
                        </Box>
                        <Box>
                            <Input 
                                placeholder='Speed_limit 0 ~ 80' 
                                type="number"
                                name="speedLimit"
                                value={modelInput.speedLimit}
                                onChange={handleChange}
                                focusBorderColor='teal.300'
                            />
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Light Conditions :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name='lightCondition'
                            placeholder='Select option'
                            value={modelInput.lightCondition}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Daylight</option>
                                <option value='4'>Dark - lights lit</option>
                                <option value='5'>Dark - lights unlit</option>
                                <option value='6'>Dark - no lighting</option>
                                <option value='7'>No visibility</option>
                                <option value='-1'>Data missing</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Road Surface Conditions :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name='roadSurfaceCondition'
                            placeholder='Select option'
                            value={modelInput.roadSurfaceCondition}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Dry</option>
                                <option value='2'>Wet</option>
                                <option value='3'>Snow</option>
                                <option value='4'>Frost</option>
                                <option value='5'>Flood over 5cm deep</option>
                                <option value='6'>Oil or Diesel</option>
                                <option value='7'>Mud</option>
                                <option value='-1'>Data missing</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Junction Control :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name='junctionControl'
                            placeholder='Select option'
                            value={modelInput.junctionControl}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='5'>No junction within 20 metres</option>
                                {/** Change the value 5 to 0 when requesting to API **/}
                                <option value='1'>Authorised Person</option>
                                <option value='2'>Auto traffic signal</option>
                                <option value='3'>Stop sign</option>
                                <option value='4'>Uncontrolled</option>
                                <option value='-1'>Data missing</option>
                            </Select>
                        </Box>
                    </Grid>
                    
                </VStack>
                
                <VStack
                    spacing={4}
                    align='stretch'
                    w='600px'
                >
                    <Grid templateColumns="repeat(2, 1fr)" gap={5} alignItems="center">
                        <Box>
                            <Text textAlign="right" pr={2}>Longitude :</Text>
                        </Box>
                        <Box>
                            <Input 
                                type="number"
                                placeholder=":Longitude"
                                name="longitude"
                                value={modelInput.longitude}
                                onChange={handleChange}
                                focusBorderColor='teal.300'
                            />
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Sex of Driver :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name="driverSex" 
                            placeholder='Select option'
                            value={modelInput.driverSex}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                                <option value='3'>Others</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Road Type :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name="roadType" 
                            placeholder='Select option'
                            value={modelInput.roadType}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Roundabout</option>
                                <option value='2'>One way</option>
                                <option value='3'>Dual carriage way</option>
                                <option value='6'>Single carriage way</option>
                                <option value='7'>Slip road</option>
                                <option value='12'>One way + slip road</option>
                                <option value='-1'>Data missing</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Weather Conditions :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name="weather" 
                            placeholder='Select option'
                            value={modelInput.weather}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Fine no high winds</option>
                                <option value='2'>Raining no high winds</option>
                                <option value='3'>Snowing no high winds</option>
                                <option value='4'>Fine + high winds</option>
                                <option value='5'>Raining + high winds</option>
                                <option value='6'>Snowing + high winds</option>
                                <option value='7'>Fog or mist</option>
                                <option value='-1'>Data missing</option>
                            </Select>
                        </Box>

                        <Box>
                            <Text textAlign="right" pr={2}>Urban or Rural Area :</Text>
                        </Box>
                        <Box>
                            <Select 
                            name="urbanRural" 
                            placeholder='Select option'
                            value={modelInput.urbanRural}
                            onChange={handleChange}
                            focusBorderColor='teal.300'
                            >
                                <option value='1'>Urban</option>
                                <option value='2'>Rural</option>
                            </Select>
                        </Box>
                    </Grid>
                </VStack>
                </Flex>
                
                <Flex  marginTop='30px' justify='center'>
                <Link to="/analytics">
                <Button colorScheme='teal' variant='solid' w='200px'>
                    Predict
                </Button>
                </Link>
                </Flex>
                </Box>
            </Flex>
            
        </Box>
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Input, Button } from "@chakra-ui/react";

export function Login() {
	const [data, setData] = useState({ email: "", password: "" });
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	return (
		<Box w="100%" minH="100vh" bg="#f5f5f5" display="flex" alignItems="center" justifyContent="center">
			<Flex w="800px" h="500px" borderRadius="10px" boxShadow="0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);">
			<Flex flex="2" flexDirection="column" alignItems="center" justifyContent="center" bg="white" borderRadius="10px" >
					<Heading as="h1" marginBottom='20px'fontSize="40px" mt="0">Login</Heading>
						<Input 
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							outline="none" 
							border="none" 
							width="370px" 
							padding="15px" 
							borderRadius="10px" 
							bg="#edf5f3" 
							margin="5px 0" 
							fontSize="14px" />

						<Input 
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							outline="none" 
							border="none" 
							width="370px" 
							padding="15px" 
							borderRadius="10px"
							bg="#edf5f3" 
							margin="5px 0" 
							fontSize="14px" />	
                        <Link to="/home">
						<Button marginTop='20px' type="submit" padding="12px 0" borderRadius="20px" width="180px" fontWeight="bold" fontSize="14px" colorScheme='teal' variant='solid' cursor="pointer">Sign In</Button>
                        </Link>
                    </Flex>
				</Flex>
		</Box>
	)
}


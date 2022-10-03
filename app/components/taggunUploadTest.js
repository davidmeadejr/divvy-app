import {
  Container,
  Center,
  Text,
  Box,
  Button,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";

function TaggunUpload() {
  return (
    <Container>
      <Box height="100vh" mt="30vh">
        <Box textAlign="center">
          <Center>
            <Image boxSize="45px" objectFit="cover" src="./outline.png" />
          </Center>
          <Text fontSize="xl" fontWeight="medium">
            Easiest way to scan your receipts using Taggun API
          </Text>
          <Text fontSize="md" color="gray.500">
            Upload an image of a store receipt below to see results
          </Text>

          <VStack mt={16}>
            <VStack spacing={6}>
              <Box>
                <label htmlFor="file-upload"></label>
                <input id="file-upload" type="file" />
              </Box>
            </VStack>

            <Button size="md" colorScheme="primary">
              Upload photo
            </Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}

export default TaggunUpload;

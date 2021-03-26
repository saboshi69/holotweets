import React, { memo } from 'react';
import {
    Heading,
    Box,
    Text,
    Link,
} from '@chakra-ui/react';

function AboutPopupContent() {
    return (
        <Box>
            <Text fontSize="md">
                This is an open source project. For those who want to contribute please feel free to visit the github page and create a pull request &#128516;
            </Text>
            <Heading as="h3" size="md" mb="7px" mt="15px">
                Upcoming features
            </Heading>
            <Text fontSize="md">
                - Dark Mode <br />
                - Multiple languages support <br />
            </Text>
            <Text fontWeight="500" mt="5px">May or may not do these... &#128064;</Text>
            <Text fontSize="md">
                - Mobile responsive <br />
                - Pretend working mode & urgent escape <br />
                - New Tweets notification
            </Text>
            <Heading as="h3" size="md" mb="7px" mt="15px">
                Disclaimer
            </Heading>
            <Text fontSize="md">
                This website is a fan-made website.<br />
                This website is not officially owned by Hololive, nor is it affiliated with COVER Corporation or any of its subsidiaries.
            </Text>
            <Heading as="h3" size="md" mb="7px" mt="15px">
                Credits
            </Heading>
            <Text fontSize="md">
                Owner: <Link textColor="blue.400" href="https://github.com/saboshi69" isExternal>
                    saboshi69
                </Link>
            </Text>
        </Box>
    );
}

export default memo(AboutPopupContent);

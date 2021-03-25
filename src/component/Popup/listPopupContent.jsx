import React, { memo } from 'react';
import {
  Heading,
  Box,
  Text,
  Wrap,
  Link,
  WrapItem
} from '@chakra-ui/react';
import twitterData from 'json/twitterData.json'


function ListPopupContent() {
  const listRender = twitterData.map((group) => {
    const listRow = group.members.map(member => (
      <WrapItem key={member.tweetId} >
        <Link textColor="teal.600" href={`https://twitter.com/${member.tweetId}`} isExternal>
          <Text fontSize="md">{member.name}</Text>
        </Link>
      </WrapItem>
    ))

    return (
      <Box key={group.category} >
        <Heading as="h3" size="md" mb="7px" mt="15px">
          {group.category}
        </Heading>
        <Wrap align="flex-start" wrap="wrap">
          {listRow}
        </Wrap>
      </Box>
    )
  })

  return (
    <Box>
      {listRender}
    </Box>
  );
}

export default memo(ListPopupContent);

import React, { memo } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { Box } from '@chakra-ui/layout';


function TweetItem({ config, tweetId }) {
  const col = Number(100 / config.col).toFixed(4);
  const row = config.row;

  return (
    <Box p={{ base: "15px", md: "20px", lg: "25px" }} flexShrink="0" width={`${col}%`} overflow={"hidden"} height={`calc((100vh - 110px) / ${row})`}>
      <Box boxShadow="0px 0px 8px 1px rgba(0,0,0,0.37)" overflowY={"scroll"} borderRadius="5px" height="100%" css={{
        '&::-webkit-scrollbar': {
          width: '10px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}>
        <Timeline key={tweetId} dataSource={{ sourceType: "profile", screenName: tweetId }} />
      </Box>
    </Box>
  );
}
export default memo(TweetItem);

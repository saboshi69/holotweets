import { Flex } from '@chakra-ui/layout';
import TweetItem from 'component/TweetItem';
import React, { useMemo } from 'react';
import { useSetting, useFollowing } from 'container/SettingContextProvider'

function TweetContainer() {
  const { config } = useSetting();
  const { following } = useFollowing();

  const itemRender = useMemo(
    () => {
      return following.map(id => (<TweetItem key={id} config={config} tweetId={id} />))
    },
    [following, config],
  )

  const isWrap = config.isWrap ? 'wrap' : 'nowrap';
  const overflow = config.isWrap ? 'hidden' : 'scroll';



  return (
    <Flex flexWrap={isWrap} width="100%" overflowX={overflow}>
      {itemRender}
    </Flex>

  );
}
export default TweetContainer;

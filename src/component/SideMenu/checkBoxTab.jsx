import React, { memo, useState, useEffect } from 'react';
import { Accordion, CheckboxGroup, Checkbox, VStack, HStack, Button } from "@chakra-ui/react"
import AccordionCustomItem from 'component/AccordionCustomItem';
import twitterData from 'json/twitterData.json'


function CheckBoxTab({ follow, setFollow }) {
  const [newOrder, setNewOrder] = useState(follow)
  const [isUpdating, setIsUpdating] = useState(false)

  // Select Tab
  const onCheckGroupChange = (tweetsIdArray) => {
    setNewOrder(tweetsIdArray)
  }

  useEffect(() => {
    setNewOrder(follow);
  }, [follow]);

  const onSave = () => {
    setFollow([])
    setIsUpdating(true)
    setTimeout(() => {
      setFollow(newOrder)
      setIsUpdating(false)
    }, 500)
  }

  const checkBoxRender = twitterData.map((group) => {
    const checkRow = group.members.map(member => (
      <Checkbox key={member.tweetId} value={member.tweetId}>{member.name}</Checkbox>

    ))

    return (
      <AccordionCustomItem key={group.category} title={group.category}>
        <VStack align="flex-start">
          {checkRow}
        </VStack>
      </AccordionCustomItem>
    )
  })

  return (

    <>
      {!isUpdating ?
        <>
          <CheckboxGroup colorScheme="teal" value={newOrder} onChange={onCheckGroupChange}>
            <Accordion>
              {checkBoxRender}
            </Accordion>
          </CheckboxGroup>
          <HStack mt="25px" justify="flex-end">
            <Button colorScheme="teal" size="md" onClick={onSave}>Save</Button>
          </HStack>
        </> : <></>}
    </>

  );
}
export default memo(CheckBoxTab);

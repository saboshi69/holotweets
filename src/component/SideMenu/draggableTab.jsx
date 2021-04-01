import React, { memo, useState, useCallback, useEffect, useMemo } from 'react';
// import { useFollowing } from 'container/SettingContextProvider'
import { Button, HStack } from "@chakra-ui/react"
import DraggableItem from './draggableItem';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper';
import flattenTwitterData from 'json/flattenTwitterData.json'


function DraggableTab({ follow, setFollow }) {
  const [newOrder, setNewOrder] = useState(follow)
  const filterTwitterData = useMemo(() => {
    return newOrder.map(key => {
      return flattenTwitterData.filter(item => item.tweetId === key)[0]
    })
  }, [newOrder])
  const [isUpdating, setIsUpdating] = useState(false)


  useEffect(() => {
    setNewOrder(follow)
  }, [follow]);


  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = newOrder[dragIndex];

    setNewOrder(update(newOrder, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    }));
  }, [newOrder]);

  // const itemRender = newOrder.map((item, index) => (<DraggableItem key={item} index={index} id={item} text={item} moveCard={moveCard} />))
  const itemRender = filterTwitterData.map((item, index) => (<DraggableItem key={item.tweetId} index={index} id={item.tweetId} text={item.name} moveCard={moveCard} />))

  // on button save
  const onSave = () => {


    setFollow([])
    setIsUpdating(true)
    setTimeout(() => {
      setFollow(newOrder)
      setIsUpdating(false)
    }, 500)
  }


  return (
    <>
      {!isUpdating ?
        <>
          <HStack justify="flex-end">
            <Button colorScheme="teal" size="md" onClick={onSave}>Save</Button>
          </HStack>
          <DndProvider backend={HTML5Backend}>
            {itemRender}
          </DndProvider>
        </> : <></>}
    </>
  );
}
export default memo(DraggableTab);

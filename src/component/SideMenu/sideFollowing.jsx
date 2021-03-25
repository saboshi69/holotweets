import React, { memo } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, CheckboxGroup, Checkbox, VStack } from "@chakra-ui/react"
import DraggableTab from 'component/SideMenu/draggableTab';
import CheckBoxTab from 'component/SideMenu/checkBoxTab';
import { useFollowing } from 'container/SettingContextProvider'


function SideSetting() {
  const { following, setFollowing } = useFollowing();

  return (
    <Box>
      <Tabs isFitted variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab fontWeight="600">Select</Tab>
          <Tab fontWeight="600">Reorder</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CheckBoxTab follow={following} setFollow={setFollowing} />
          </TabPanel>
          <TabPanel>
            <DraggableTab follow={following} setFollow={setFollowing} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default memo(SideSetting);

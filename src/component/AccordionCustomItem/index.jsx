import React, { memo } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"


function AccordionCustomItem({ title, children }) {

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}
export default memo(AccordionCustomItem);

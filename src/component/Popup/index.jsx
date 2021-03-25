import React, { memo } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

function Popup({ isOpen, onClose, title, children, size }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: "24px", md: "30px", lg: "34px" }}>{title}</ModalHeader>
        <ModalCloseButton right="17px" top="22px" />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default memo(Popup);

import React, { memo } from 'react';
import { Container, Flex, Button, Stack, Text, Link } from "@chakra-ui/react"
import { GoSettings } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiGithub, FiTwitter } from "react-icons/fi";
import SideMenu from 'component/SideMenu';
import Popup from 'component/Popup';
import AboutPopupContent from 'component/Popup/aboutPopupContent';
import ListPopupContent from 'component/Popup/listPopupContent';
import SideSetting from 'component/SideMenu/sideSetting';
import SideFollowing from 'component/SideMenu/sideFollowing';
import { useDisclosure } from "@chakra-ui/react"

function Header() {

  const { isOpen: settingIsopen, onOpen: settingOnOpen, onClose: settingOnClose } = useDisclosure();
  const { isOpen: followingIsopen, onOpen: followingOnOpen, onClose: followingOnClose } = useDisclosure();
  const { isOpen: listIsopen, onOpen: listOnOpen, onClose: listOnClose } = useDisclosure();
  const { isOpen: aboutIsopen, onOpen: aboutOnOpen, onClose: aboutOnClose } = useDisclosure();
  const settingBtnRef = React.useRef();
  const followingBtnRef = React.useRef();
  const listBtnRef = React.useRef();
  const aboutBtnRef = React.useRef();

  return (
    <>
      <Container px={{ base: "15px", md: "20px", lg: "25px" }} maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px" borderColor="gray.400" pt="30px" pb="15px" >
          <Text fontSize="3xl">HoloTweets</Text>
          <Stack direction="row" spacing={4} align="center">
            <Button ref={settingBtnRef} onClick={settingOnOpen} leftIcon={<GoSettings />} colorScheme="teal" variant="link">
              Setting
            </Button>
            <Button ref={followingBtnRef} onClick={followingOnOpen} leftIcon={<RiUserFollowLine />} colorScheme="teal" variant="link">
              Following
            </Button>
            <Button ref={listBtnRef} onClick={listOnOpen} leftIcon={<FiTwitter />} colorScheme="teal" variant="link">
              Twitter List
            </Button>
            <Button ref={aboutBtnRef} onClick={aboutOnOpen} leftIcon={<IoMdInformationCircleOutline />} colorScheme="teal" variant="link">
              About
            </Button>
            <Link href="https://github.com/saboshi69/holotweets" isExternal>
              <Button leftIcon={<FiGithub />} colorScheme="teal" variant="link">
                Github
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Container>
      <SideMenu
        isOpen={settingIsopen}
        onClose={settingOnClose}
        btnRef={settingBtnRef}
        children={<SideSetting />}
        title="Setting"
        size="xs" />
      <SideMenu
        isOpen={followingIsopen}
        onClose={followingOnClose}
        btnRef={followingBtnRef}
        children={<SideFollowing />}
        title="Following"
        size="sm" />
      <Popup
        isOpen={listIsopen}
        onClose={listOnClose}
        children={<ListPopupContent />}
        title="Twitter List"
        size="6xl" />
      <Popup
        isOpen={aboutIsopen}
        onClose={aboutOnClose}
        title="About"
        children={<AboutPopupContent />}
        size="xl" />
    </>
  );
}
export default memo(Header);

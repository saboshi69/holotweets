import { Box } from '@chakra-ui/layout';
import { useMediaQuery } from "@chakra-ui/react";
import React, { createContext, useState, useEffect, useContext } from 'react';


const SettingContext = createContext();
const FollowingContext = createContext();

export function useSetting() {
  return useContext(SettingContext);
}

export function useFollowing() {
  return useContext(FollowingContext);
}

function SettingContextProvider({ children }) {
  const [isLargeDevice] = useMediaQuery(["(min-width: 600px)"]);

  const [isInit, setIsInit] = useState(true);
  const [config, setConfig] = useState(isLargeDevice ? {
    col: 4,
    row: 1,
    isWrap: true,
  } : {
    col: 1,
    row: 1,
    isWrap: true,
  });
  const [following, setFollowing] = useState([])

  useEffect(() => {
    if (isInit) {
      const localFollowing = localStorage.getItem('localFollowing');
      const localConfig = localStorage.getItem('localConfig');
      const visited = localStorage.getItem('visited');
      setIsInit(false);
      if (!visited) {
        localStorage.setItem('visited', JSON.stringify(true))
        setFollowing(["sakuramiko35", "AZKi_VDiVA", "yozoramel", "shirakamifubuki", "akaihaato", "minatoaqua", "natsuiromatsuri", "inugamikorone", "nekomataokayu", "ookamimio",])
        localStorage.setItem('localFollowing', JSON.stringify(following))
      }

      if (localConfig) {
        setConfig(JSON.parse(localConfig));
      }

      if (localFollowing) {
        setFollowing(JSON.parse(localFollowing));
      }
    }

    localStorage.setItem('localConfig', JSON.stringify(config));
    localStorage.setItem('localFollowing', JSON.stringify(following));

  }, [config, following]);

  return (
    <FollowingContext.Provider value={{ following, setFollowing }}>
      <SettingContext.Provider value={{ config, setConfig }}>
        <Box>
          {children}
        </Box>
      </SettingContext.Provider>
    </FollowingContext.Provider>
  );
}
export default SettingContextProvider;

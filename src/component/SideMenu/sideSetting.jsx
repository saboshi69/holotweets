import React, { memo, useMemo } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Text, Stack, Box } from "@chakra-ui/react"
import { useSetting } from 'container/SettingContextProvider'
import { useColorMode } from "@chakra-ui/react"



function SideSetting() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { config, setConfig } = useSetting();
  const isDarkMode = useMemo(() => {
    return colorMode === "light" ? false : true
  }, [colorMode])

  const onColChange = (number) => {
    setConfig(prev => {
      return {
        ...prev,
        col: number
      }
    })
  }

  const onRowChange = (number) => {
    setConfig(prev => {
      return {
        ...prev,
        row: number
      }
    })
  }

  const onWrap = () => {
    setConfig(prev => {
      return {
        ...prev,
        isWrap: !prev.isWrap
      }
    })
  }

  return (
    <Box>
      <Text fontSize="md">Columns:</Text>
      <Slider aria-label="slider-ex-4" onChange={onColChange} defaultValue={config.col} min={1} max={12} step={1}>
        <SliderTrack bg="teal">
          <SliderFilledTrack bg="teal" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Text fontSize="md">{config.col}</Text>
        </SliderThumb>
      </Slider>
      <Text fontSize="md" mt="10px">Rows:</Text>
      <Slider aria-label="slider-ex-4" onChange={onRowChange} defaultValue={config.row} min={1} max={3} step={1}>
        <SliderTrack bg="teal">
          <SliderFilledTrack bg="teal" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Text fontSize="md">{config.row}</Text>
        </SliderThumb>
      </Slider>
      <Stack align="flex-end" direction="row" mt="16px">
        <Text fontSize="md">Row Wrap:</Text>
        <Switch size="md" colorScheme="teal" onChange={onWrap} isChecked={config.isWrap} />
      </Stack>
      <Stack align="flex-end" direction="row" mt="16px">
        <Text fontSize="md">Dark Mode:</Text>
        <Switch size="md" colorScheme="teal" onChange={toggleColorMode} isChecked={isDarkMode} />
      </Stack>
    </Box>
  );
}
export default memo(SideSetting);

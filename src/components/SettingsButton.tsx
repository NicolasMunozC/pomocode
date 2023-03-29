import { AiFillSetting } from 'react-icons/ai'
import { theme } from '../utils/theme'
import { FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Switch, useColorMode, useDisclosure } from '@chakra-ui/react'

type SettingsProps = {
  currentTheme: string,
  focusTime: number,
  shortBreakTime: number,
  longBreakTime: number,
  setFocusTime: any,
  setShortBreakTime: any,
  setLongBreakTime: any,
}

export default function SettingsButton({currentTheme, focusTime, shortBreakTime, longBreakTime}: SettingsProps) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <button className={`${theme[colorMode].button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center`} onClick={onOpen}>
        <AiFillSetting className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered  >
        <ModalOverlay/>
        <ModalContent className='rounded-3xl'>
          <ModalHeader className={` ${theme[colorMode].text[currentTheme]} rounded-t-3xl`}>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody className={` ${theme[colorMode].text[currentTheme]}`}>
            <div className='flex flex-col my-10'>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='dark-mode' >
                  Dark Mode
                </FormLabel>
                <Switch id='dark-mode' onChange={toggleColorMode} isChecked={colorMode === 'dark' ? true : false} />
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='focus-minutes'>
                  Focus Minutes
                </FormLabel>
                <NumberInput id='focus-minutes' defaultValue={focusTime} maxW={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='shortBreakTime'>
                  Short Break Minutes
                </FormLabel>
                <NumberInput id='shortBreakTime' defaultValue={shortBreakTime} maxW={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='longBreakTime'>
                  Long Break Minutes
                </FormLabel>
                <NumberInput id='longBreakTime' defaultValue={longBreakTime} maxW={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='auto-start' >
                  Auto start
                </FormLabel>
                <Switch id='auto-start' />
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='sound' >
                  Sound
                </FormLabel>
                <Switch id='sound' />
              </FormControl>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}


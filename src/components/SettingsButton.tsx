import { AiFillSetting } from 'react-icons/ai'
import { theme } from '../utils/theme'
import { FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Switch, useColorMode, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'

type SettingsProps = {
  currentTheme: string,
  focusTime: number,
  shortBreakTime: number,
  longBreakTime: number,
  autoStart: boolean,
  setFocusTime: any,
  setShortBreakTime: any,
  setLongBreakTime: any,
  setAutoStart: any,
}

export default function SettingsButton({currentTheme, focusTime, shortBreakTime, longBreakTime, setFocusTime, setShortBreakTime, setLongBreakTime, autoStart, setAutoStart}: SettingsProps) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const onFocusTimeChange= (event: React.ChangeEvent<HTMLInputElement> ) => {
    setFocusTime(event.target.value)
  }

  return (
    <>
      <button className={`${theme[colorMode].button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center`} onClick={onOpen}>
        <AiFillSetting className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered  >
        <ModalOverlay/>
        <ModalContent>
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
                {/* ESTOY CREANDO LOS ONCHANGE!!!!! */}
                <NumberInput id='focus-minutes' defaultValue={focusTime} maxW={20}>
                  <NumberInputField onChange={onFocusTimeChange} />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={()=>{setFocusTime(focusTime + 1)}}/>
                    <NumberDecrementStepper onClick={()=>{setFocusTime(focusTime - 1)}}/>
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
                    <NumberIncrementStepper onClick={()=>{setShortBreakTime(shortBreakTime + 1)}}/>
                    <NumberDecrementStepper onClick={()=>{setShortBreakTime(shortBreakTime - 1)}}/>
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
                    <NumberIncrementStepper onClick={()=>{setLongBreakTime(longBreakTime + 1)}}/>
                    <NumberDecrementStepper onClick={()=>{setLongBreakTime(longBreakTime - 1)}}/>
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='auto-start' >
                  Auto start
                </FormLabel>
                <Switch id='auto-start' onChange={()=>setAutoStart(!autoStart)} isChecked={autoStart}/>
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                <FormLabel htmlFor='sound' >
                  Sound
                </FormLabel>
                <Switch id='sound' isDisabled className='disabled:cursor-not-allowed'/>
              </FormControl>
            </div>
          </ModalBody>
          <ModalFooter>
            <p>Created by <Link href='https://nmunoz.vercel.app' className={`font-bold ${theme[colorMode].text[currentTheme]} `}>Nicolás Muñoz 🇨🇱</Link></p>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}


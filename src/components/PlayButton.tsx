import { useColorMode } from '@chakra-ui/react'
import { IoPlaySharp, IoPlayForward, IoPause } from 'react-icons/io5'
import { theme } from '../utils/theme'

function PlayButton({currentTheme, isRunning, setIsRunning}: any) {
  const { colorMode } = useColorMode()
  return (
    <button className={`${theme[colorMode].button.specialBg[currentTheme]} w-32 h-24 rounded-3xl self-center`} onClick={()=>setIsRunning(!isRunning)}>
    {
      isRunning 
      ? <IoPause className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
      : <IoPlaySharp className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
    }
    </button>
  )
}

export default PlayButton
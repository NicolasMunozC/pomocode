import { IoPlayForward, IoReload } from 'react-icons/io5'
import { theme } from '../utils/theme'
import { pomodoroStages } from '@/utils/pomodoroStages'
import { useColorMode } from '@chakra-ui/react'

/* AGREGAR LA FUNCIONALIDAD DE QUE CUANDO ESTE EN EL ULTIMO STAGE EL BOTON SER REMPLACE POR UNO PARA REINICIAR EL POMODORO */


function ForwardButton({currentTheme, currentStage, setCurrentStage}: any) {
  const { colorMode } = useColorMode()
  return (
    <button className={`${theme[colorMode].button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center`} 
     onClick={
      ()=>{
        currentStage === pomodoroStages.length - 1
        ? setCurrentStage(0)
        : setCurrentStage(currentStage + 1)
      }
      }>
      {
        currentStage === pomodoroStages.length - 1
        ? <IoReload className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
        : <IoPlayForward className={`${theme[colorMode].button.text[currentTheme]} m-auto text-2xl`} />
      }
        
    </button>
  )
}

export default ForwardButton
import { IoPlayForward } from 'react-icons/io5'
import { theme } from '../utils/theme'

/* AGREGAR LA FUNCIONALIDAD DE QUE CUANDO ESTE EN EL ULTIMO STAGE EL BOTON SER REMPLACE POR UNO PARA REINICIAR EL POMODORO */


function ForwardButton({currentTheme, currentStage, pomodoroStages, setCurrentStage}: any) {
  return (
    <button className={`${theme.button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center disabled:cursor-not-allowed`} disabled={currentStage === pomodoroStages.length - 1 && true} onClick={()=>setCurrentStage(currentStage + 1)}>
        <IoPlayForward className={`${theme.button.text[currentTheme]} text-red-900 m-auto text-2xl`} />
    </button>
  )
}

export default ForwardButton
import { IoPlaySharp, IoPlayForward, IoPause } from 'react-icons/io5'

function PlayButton({theme, currentTheme, isRunning, setIsRunning}: any) {
  return (
    <button className={`${theme.button.specialBg[currentTheme]} w-32 h-24 rounded-3xl self-center`} onClick={()=>setIsRunning(!isRunning)}>
    {
      isRunning 
      ? <IoPause className={`${theme.button.text[currentTheme]} m-auto text-2xl`} />
      : <IoPlaySharp className={`${theme.button.text[currentTheme]} m-auto text-2xl`} />
    }
    </button>
  )
}

export default PlayButton
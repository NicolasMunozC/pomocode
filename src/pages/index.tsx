import PlayButton from '@/components/PlayButton'
import SettingsButton from '@/components/SettingsButton'
import Stage from '@/components/Stage'
import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { IoPlayForward } from 'react-icons/io5'

export default function Home() {

  const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [currentMinutes, setCurrentMinutes] = useState(focusTime)
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const pomodoroStages:string[] = ['Focus', 'Short Break', 'Focus', 'Short Break', 'Focus', 'Short Break', 'Focus', 'Long Break']
  const [currentTheme, setCurrentTheme] = useState('red')

  useEffect( () => {
    if(currentStage < pomodoroStages.length){
      if(pomodoroStages[currentStage] === 'Focus'){
        setCurrentTheme('red')
        setCurrentMinutes(focusTime)
        setCurrentSeconds(0)
      } 
      else if (pomodoroStages[currentStage] === 'Short Break'){
        setCurrentTheme('green')
        setCurrentMinutes(shortBreakTime)
        setCurrentSeconds(0)
      } else {
        setCurrentTheme('blue')
        setCurrentMinutes(longBreakTime)
        setCurrentSeconds(0)
      }
    } 
  }, [currentStage, focusTime, shortBreakTime, longBreakTime])


  const theme:any = {
    text: {
      red: 'text-red-900',
      blue: 'text-blue-900',
      green: 'text-green-900'
    },
    bg: {
      red: 'bg-red-50',
      blue: 'bg-blue-50',
      green: 'bg-green-50'
    },
    button: {
      text: {
        red: 'text-red-900',
        blue: 'text-blue-900',
        green: 'text-green-900'
      },
      bg: {
        red: 'bg-redAlpha-100/[0.15]',
        blue: 'bg-blueAlpha-100/[0.15]',
        green: 'bg-greenAlpha-100/[0.15]'
      },
      specialBg: {
        red: 'bg-redAlpha-700/[0.71]',
        blue: 'bg-blueAlpha-600/[0.62]',
        green: 'bg-greenAlpha-600/[0.62]'
      }
    }
  }

  function resetPomodoro(){
    setIsRunning(false)
    setCurrentStage(0)
  }

  useEffect( () => {
    if(isRunning) {
      let interval = setInterval( () => {
        if(currentSeconds > 0) setCurrentSeconds(currentSeconds - 1)
        else if(currentMinutes > 0){
          setCurrentMinutes(currentMinutes - 1)
          setCurrentSeconds(59)
        } else {
          if(currentStage === pomodoroStages.length - 1){
            resetPomodoro()
          } else {
            setCurrentStage(currentStage + 1)
          }
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  return (
    <>
      <Head>
        <title>PomoCode - Free Pomodoro for coders</title>
        <meta name="description" content="Pomodoro for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${theme.bg[currentTheme]} w-screen h-screen leading-none font-robotoFlex `}>
        <div className='grid place-content-center w-full h-full'>

          <div className='flex flex-col'>

            <div className='text-center'>
              <Stage currentStage={pomodoroStages[currentStage]} />
            </div>
            <div className={`${theme.text[currentTheme]} flex flex-col text-center text-[240px]`}>
              <h1 className={`${isRunning ? 'font-bold' : 'font-thin'}`}>{currentMinutes > 9 ? currentMinutes : '0' + currentMinutes}</h1>
              <h1 className={`${isRunning ? 'font-bold' : 'font-thin'}`}>{currentSeconds > 9 ? currentSeconds : '0' + currentSeconds}</h1>
            </div>

            <div className='flex flex-row gap-4 mt-6'>
              <SettingsButton theme={theme} currentTheme={currentTheme} />
              <PlayButton theme={theme} currentTheme={currentTheme} isRunning={isRunning} setIsRunning={setIsRunning} />
                {/* AGREGAR LA FUNCIONALIDAD DE QUE CUANDO ESTE EN EL ULTIMO STAGE EL BOTON SER REMPLACE POR UNO PARA REINICIAR EL POMODORO */}
              <button className={`${theme.button.bg[currentTheme]} w-20 h-20 rounded-3xl self-center disabled:cursor-not-allowed`} disabled={currentStage === pomodoroStages.length - 1 && true} onClick={()=>setCurrentStage(currentStage + 1)}>
                <IoPlayForward className={`${theme.button.text[currentTheme]} text-red-900 m-auto text-2xl`} />
              </button>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}

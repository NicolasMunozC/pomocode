import ForwardButton from '@/components/ForwardButton'
import PlayButton from '@/components/PlayButton'
import SettingsButton from '@/components/SettingsButton'
import Stage from '@/components/Stage'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { theme } from '../utils/theme'
import { pomodoroStages  } from '@/utils/pomodoroStages'
import { useColorMode } from '@chakra-ui/react'


export default function Home() {

  const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [currentMinutes, setCurrentMinutes] = useState(focusTime)
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [autoStart, setAutoStart] = useState(true)
  const [currentTheme, setCurrentTheme] = useState('red')
  const { colorMode } = useColorMode()

  // useEffect that change between stages and reset timers
  useEffect( () => {
    if(currentStage < pomodoroStages.length){

      !autoStart && setIsRunning(false)

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
  }, [currentStage, focusTime, shortBreakTime, longBreakTime, autoStart])

  function resetPomodoro(){
    setIsRunning(false)
    setCurrentStage(0)
  }

  // useEffect that update the time ever second.
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
      <main className={`${theme[colorMode].bg[currentTheme]} w-screen h-screen leading-none font-robotoFlex `}>
        <div className='grid place-content-center w-full h-full'>

          <div className='flex flex-col'>
            <Stage currentStage={pomodoroStages[currentStage]} currentTheme={currentTheme} />

            <div className={`${theme[colorMode].text[currentTheme]} flex flex-col text-center text-[240px]`}>
              <h1 className={`${isRunning ? 'font-bold' : 'font-thin'}`}>{currentMinutes > 9 ? currentMinutes : '0' + currentMinutes}</h1>
              <h1 className={`${isRunning ? 'font-bold' : 'font-thin'}`}>{currentSeconds > 9 ? currentSeconds : '0' + currentSeconds}</h1>
            </div>

            <div className='flex flex-row gap-4 mt-6'>
              <SettingsButton currentTheme={currentTheme} focusTime={focusTime} setFocusTime={setFocusTime} shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} longBreakTime={longBreakTime} setLongBreakTime={setLongBreakTime} autoStart={autoStart} setAutoStart={setAutoStart}   />
              <PlayButton currentTheme={currentTheme} isRunning={isRunning} setIsRunning={setIsRunning} />
              <ForwardButton currentTheme={currentTheme} currentStage={currentStage} pomodoroStages={pomodoroStages} setCurrentStage={setCurrentStage} />
            </div>

          </div>

        </div>
      </main>
    </>
  )
}

import Stage from '@/components/Stage'
import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { IoPlaySharp, IoPlayForward, IoPause } from 'react-icons/io5'

export default function Home() {

  const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [currentStage, setCurrentStage] = useState('focus')
  const pomodoroStages:string[] = ['focus', 'short', 'focus', 'short', 'focus', 'short', 'focus', 'long']

  return (
    <>
      <Head>
        <title>PomoCode - Free Pomodoro for coders</title>
        <meta name="description" content="Pomodoro for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen bg-red-50 leading-none font-robotoFlex'>
        <div className='grid place-content-center w-full h-full'>

          <div className='flex flex-col'>

            <div className='text-center'>
              <Stage currentStage={currentStage} />
            </div>
            <div className='flex flex-col text-center text-[240px] text-red-900'>
              <h1 className=''>25</h1>
              <h1 className=''>00</h1>
            </div>

            <div className='flex flex-row gap-4 mt-6'>
              <button className='bg-redAlpha-100/[0.15] w-20 h-20 rounded-3xl self-center'><AiFillSetting className='text-red-900 m-auto text-2xl' /></button>
              <button className='bg-redAlpha-700/[0.71] w-32 h-24 rounded-3xl self-center'><IoPlaySharp className='text-red-900 m-auto text-2xl' /></button>
              <button className='bg-redAlpha-100/[0.15] w-20 h-20 rounded-3xl self-center'><IoPlayForward className='text-red-900 m-auto text-2xl' /></button>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}

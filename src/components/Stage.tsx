import React, { useEffect, useState } from 'react'
import { TbBrain, TbCoffee } from 'react-icons/tb'

type StageProps = {
    currentStage: string,
}

export default function Stage({currentStage}: StageProps) {

  const [currentTheme, setCurrentTheme] = useState('bg-redAlpha-100/[0.15] border-red-900')

  useEffect(() => {
    currentStage === 'Focus' && setCurrentTheme('bg-redAlpha-100/[0.15] border-red-900')
    currentStage === 'Short Break' && setCurrentTheme('bg-greenAlpha-100/[0.15] border-green-900')
    currentStage === 'Long Break' && setCurrentTheme('bg-blueAlpha-100/[0.15] border-blue-900')
  }, [currentStage])


  return (
    <div className={`w-fit flex flexRow px-4 py-1 gap-2 mx-auto rounded-3xl border-2 ${currentTheme}`}>
      {
        currentStage === 'Focus'
        ? <TbBrain className='text-2xl self-center' />
        : <TbCoffee className='text-2xl self-center' />
      }
      <h2 className='text-xl capitalize'>{currentStage}</h2>
    </div>
  )
}


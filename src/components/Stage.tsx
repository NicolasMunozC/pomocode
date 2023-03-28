import React, { useEffect, useState } from 'react'
import { TbBrain, TbCoffee } from 'react-icons/tb'
import { theme } from '@/utils/theme'

type StageProps = {
    currentStage: string,
    currentTheme: string
}

export default function Stage({currentStage, currentTheme}: StageProps) {

  return (
    <div className={`w-fit flex flexRow px-4 py-1 gap-2 mx-auto rounded-3xl border-2 border-${currentTheme}-900 ${theme.bg[currentTheme]}`}>
      {
        currentStage === 'Focus'
        ? <TbBrain className='text-2xl self-center' />
        : <TbCoffee className='text-2xl self-center' />
      }
      <h2 className='text-xl capitalize'>{currentStage}</h2>
    </div>
  )
}


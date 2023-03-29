import React, { useEffect, useState } from 'react'
import { TbBrain, TbCoffee } from 'react-icons/tb'
import { theme } from '@/utils/theme'
import { useColorMode } from '@chakra-ui/react'

type StageProps = {
    currentStage: string,
    currentTheme: string
}

export default function Stage({currentStage, currentTheme}: StageProps) {

  const { colorMode } = useColorMode()

  return (
    <div className={`w-fit flex flexRow px-4 py-1 gap-2 mx-auto rounded-3xl border-2 ${theme[colorMode].border[currentTheme]} ${theme[colorMode].focusBg[currentTheme]}`}>
      {
        currentStage === 'Focus'
        ? <TbBrain className='text-2xl self-center' />
        : <TbCoffee className='text-2xl self-center' />
      }
      <h2 className='text-xl capitalize'>{currentStage}</h2>
    </div>
  )
}


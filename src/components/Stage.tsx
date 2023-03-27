import React from 'react'

type StageProps = {
    currentStage: string,
}

export default function Stage({currentStage}: StageProps) {


  return (
    <div>{currentStage}</div>
  )
}


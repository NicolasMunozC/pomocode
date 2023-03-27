import { Button } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PomoCode - Free Pomodoro for coders</title>
        <meta name="description" content="Pomodoro for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen bg-red-50'>
        <div className='grid place-content-center w-full h-full'>

          <div className='flex flex-col'>

            <div className='text-center'>
              <p className='font-bold text-3xl'>Estado</p>
            </div>
            <div className='flex flex-col text-center font-extrabold text-9xl text-red-900'>
              <p>23</p>
              <p>40</p>
            </div>

            <div className='flex flex-row gap-4'>
              <Button></Button>
              <Button></Button>
              <Button></Button>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}

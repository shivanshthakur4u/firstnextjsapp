import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Nextjs from '../public/images/next.svg'
const about = () => {
  return (
    <>
        <Head><title>About Page</title></Head>
        <div>
        <h1>about</h1>

        <Image  src={Nextjs} />
        </div>
    </>
  )
}

export default about
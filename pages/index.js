import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgba(250,244,255,53.31)]'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Hero/>
    </div>
  )
}

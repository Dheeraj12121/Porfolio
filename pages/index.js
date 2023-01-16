import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-[rgba(250,244,255,53.31)]'>
      <Head>
        <title>Dheeraj Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Hero/>

      <div className="grid sm:justify-center  overflow-scroll scrollbar-hide">
      <div className="">
      <h1 className='text-center text-2xl font-serif font-bold pb-12'>Projects</h1>
      </div>
      <Project/>
      </div>

      <Footer/>

    </div>
  )
}

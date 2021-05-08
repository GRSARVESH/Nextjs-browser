import Head from 'next/head'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import {useRef} from 'react'
import {useRouter} from 'next/router'
export default function Home() {
  const search=useRef(null);
  const router=useRouter();
  const query=(e)=>{
    e.preventDefault();
    const term=search.current.value
     if(!term)return;

     router.push(`/search/?term=${term}`)
  } 
  return (
    <div className="bg-white flex flex-col justify-between items-center h-screen">
      <Head>
        <title>Garlic Tor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" p-5 flex w-full justify-between items-center text-5xl text-gray-600">
          <p>Garlic Tor</p>
          <img className="h-20"
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBy6330p7vNulyBECBlvG-3c2GtdikdvRyQ1cMK8JRFxlWmz7&s"}/>
      </header>
      <form className="flex flex-col  flex-grow items-center">
        <p className=" m-20 text-5xl text-gray-700">Browser that's x times faster...</p>
        <div className="flex items-center w-full hover:shadow-lg rounded-full max-w-md border border-gray-400 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-8 mr-3 text-gray-700"/>
        <input ref={search} className="flex-grow text-gray-700 h-10 focus:outline-none" placeholder="Enter Search Query"/>
        </div>
        <button className="m-5 w-40 text-gray-700 focus:outline-none hover:shadow-md h-12 rounded-full border border-gray-400 bg-red-200" onClick={query}>SEARCH</button>
      </form>
      <Footer className="mx-10"/>
    </div>
  )
}

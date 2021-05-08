import React from 'react'
import {useRouter} from 'next/router'
import {API_KEY,CONTEXT_KEY} from '../key'
import {useRef } from 'react';
import {SearchIcon} from '@heroicons/react/outline'
import SearchResults from '../components/SearchResults'
import Head from 'next/head'

function search({data}) {
    const searchInput=useRef(null);
    const router=useRouter();
    const { pid } = router.query;
    const query=(e)=>{
    e.preventDefault();
    const term=searchInput.current.value
     if(!term)return;
     router.push(`/search/?term=${term}`)
  } 
  console.log(data)
    return (
        <div>
            <Head>
                <title>{pid}</title>
            </Head>
            <header className="flex w-full items-center justify-between sticky top-0 bg-white">
            <p className="sm:text-3xl text-gray-600 m-3 cursor-pointer hover:shadow-sm xs:text-xs"
            onClick={()=>{router.push('/')}}
            >
            Home</p>
            <form className="flex flex-grow items-center border rounded-full border-gray-400 text-gray-700">
            <input ref={searchInput} className=" m-3 w-full h-10 focus:outline-none" placeholder="Enter Search Query"/>
            <SearchIcon 
            className="h-10 mr-5 cursor-pointer"
            onClick={query}
            />
            <button hidden type="submit"  onClick={query} >Search</button>
            </form> 
            <img className="h-20 cursor-pointer"
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBy6330p7vNulyBECBlvG-3c2GtdikdvRyQ1cMK8JRFxlWmz7&s"}
            onClick={()=>{router.push('/')}}
            />      
        </header>
        <hr/>
        <p className="m-3 text-sm text-gray-600">
                Got You {" "}{data.searchInformation.formattedTotalResults} results in {" "}
                    {data.searchInformation.
                    formattedSearchTime} seconds
        </p>
        <SearchResults data={data}/>
        </div>
    )
}

export default search

export async function getServerSideProps(context)
{
    const result = await 
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    const data=await result.json();
    return { props: { data } }
}

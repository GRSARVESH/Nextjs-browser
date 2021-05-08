import React from 'react'
import Pagination from '../components/Pagination'

function SearchResults({data}) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%]
         md:pl-[14%] lg:pl-52">
            {data.items?.map((item) =>( 
                <div key={item.link} className="max-w-xl w-full m-8">
                    <div className="group">
                        <a href={item.link} className="test-sml">
                            {item.formattedUrl}
                        </a>
                        <a href={item.link} >
                            <h2 className="truncate text-red-400 font-medium group-hover:underline">
                                {item.title}
                            </h2>
                        </a>
                    </div>
                    <p>{item.snippet}</p>
                </div>
                ))}
            <Pagination/>
        </div>
    )
}

export default SearchResults

import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'
import {ChevronDoubleLeftIcon,ChevronDoubleRightIcon} from '@heroicons/react/solid'

function Pagination() {
    const router =useRouter();
    const start= Number(router.query.start) || 0;
    return (
        <div className="flex justify-between max-w-lg mb-10">
            {start>=10 && (
                <Link href={`/search?term=${router.query.term}&start=${start - 10}`}>
                    <div className="cursor-pointer flex flex-grow flex-col items-center hover:underline">
                        <ChevronDoubleLeftIcon className="h-10 text-gray-700"/>
                        <p className="text-red-400">Previous</p>
                    </div>
                </Link>    
            )}
                <Link href={`/search?term=${router.query.term}&start=${start + 10}`}>
                    <div className="cursor-pointer flex flex-grow flex-col items-center hover:underline">
                        <ChevronDoubleRightIcon className="h-10 text-gray-700"/>
                        <p className="text-red-400">Next</p>
                    </div>

                </Link>
                
        </div>
    )
}

export default Pagination

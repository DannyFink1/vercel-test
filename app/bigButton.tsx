import React from 'react'

type Props = {}


export default function bigButton({}: Props) {
  return (
    <div className=''>
        <button className='bg-red-700 m-5 border-2 w-50 h-50 rounded-full '>This won't do anything</button>
    </div>
  )
}
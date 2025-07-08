import { ImSpinner2 } from "react-icons/im";
import React from 'react'

export default function loading() {
  return (
    <div className='container flex items-center pt-52'>
      <ImSpinner2 className="text-purple-700 animate-spin text-5xl"/>
    </div>
  )
}
import React from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";

function Education() {
  return (
    <div id='edu' className='border-t my-12 py-9 flex justify-center items-center flex-col px-9'>
      <div >
        <button><MdOutlineCastForEducation className='size-14' /></button>
        <p className='text-slate-800  font-serif  uppercase'>Higher secondary school certificate From nimgachi Degree collage in 2022 from rajshahi bord </p>
      </div>
      <div>
        <button><MdOutlineCastForEducation className='size-14'  /></button>
        <p className='text-slate-800  font-serif  uppercase'>Secondary school certificate from nimgachi ml high school n 2020 from Rajshahi bord</p>
      </div>
    </div>
  )
}

export default Education
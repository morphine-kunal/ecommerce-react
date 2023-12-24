/* eslint-disable react/prop-types */
// import { useState } from "react"
const TabBtn = (props) => {
    

  return (
    <button className='px-4 py-1 rounded-full border-[1px] focus:bg-black focus:text-white text-sm' onClick={props.click}>
      {props.name}
    </button>
  )
}

export default TabBtn

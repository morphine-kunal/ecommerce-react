/* eslint-disable react/prop-types */
// import { useState } from "react"
const TabBtn = (props) => {
    

  return (
    <button className={`px-4 py-1 rounded-full border-[1px] text-sm ${props.bgc}`} onClick={props.click}>
      {props.name}
    </button>
  )
}

export default TabBtn

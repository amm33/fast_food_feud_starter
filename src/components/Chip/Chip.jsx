import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  let buttonClassName = "chip"
  if (isActive == true){
    buttonClassName = "chip active"
    // {<button className={buttonClassName}></button>}
  //isActive = true
}
  return (
    <button className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

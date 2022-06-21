import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"
import { useEffect } from "react"

export function NutritionalLabel(props) {
  useEffect(() => {console.log(props)}, []);
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((fact) =>(
          <NutritionalLabelFact item={props.item} key={fact.id}
          att={fact.attribute} elem={fact} label={fact.label}/>
        ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.att]}</span>
    </li>
  )
}

export default NutritionalLabel


// import * as React from "react"
// import { nutritionFacts } from "../../constants"
// import "./NutritionalLabel.css"

// export function NutritionalLabel({item}) {
//   return (
//     <div className="nutritional-label">
//       <h3 className="title">Nutrition Facts</h3>

//       <h4 className="item-name">{item.item_name}</h4>

//       <ul className="fact-list">{nutritionFacts.map((fact, idx) => 
//       <NutritionalLabelFact fact = {fact} key = {idx} item = {item}/>
//       )}</ul>
//     </div>
//   )
// }

// export function NutritionalLabelFact({fact, item}) {
//   return (
//     <li className="nutrition-fact" key = {fact.id} >
//       <span className="fact-label">{fact.label}</span>{" "}
//       <span className="fact-value">{item[fact.attribute]}</span>
//     </li>
//   )
// }

// export default NutritionalLabel
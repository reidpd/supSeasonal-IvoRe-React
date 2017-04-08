import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
// import ReactDOM from 'react-dom';
// import Single_ingredient from './Single_ingredient';



// const Ingredients_In_Season = (props) => {
//   const ingredients = props.____.map((ingredient) => {
//     return <IngredientListItem />
//   })
//
//   return (
//     <ul>
//       {ingredients}
//     </ul>
//   )
// }
const IngredientsList=  (props) => {

  // const singleIngredient = props.ingredient.map((ingredient) => {}

      return (
        <ListGroup>
          <ListGroupItem>Ingredient1 </ListGroupItem>
          {/* <ListGroupItem>Ingredient2 </ListGroupItem>
          <ListGroupItem>Ingredient3 </ListGroupItem>
          <ListGroupItem>Ingredient4 </ListGroupItem>
          <ListGroupItem>Ingredient5 </ListGroupItem> */}
        </ListGroup>

      )

}
export default IngredientsList

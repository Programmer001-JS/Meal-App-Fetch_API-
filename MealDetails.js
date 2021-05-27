import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./MealDetails.css"

export default class MealDetails extends Component {
  state = {
    details: []
  }
    

  componentDidMount() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data.meals
        })
      })
  } 
  render() {
    return (
      <div>
        <h1 className="details-header">Meal Details</h1>
        <div >
          <Link to="/" className="home-page">Go back to the Home Page</Link>
        </div>
          {this.state.details.map(item => {
            return (
              <div key={item.idMeal}>
                <div className="details-meal-header">
                  {item.strMeal}
                </div>
                <img className="img-details" src={item.strMealThumb} alt="" width="550" height="550" />
                <ul className="details-of-meal">
                  <li><h5>{item.strIngredient1}</h5></li>
                  <li><h5>{item.strIngredient2}</h5></li>
                  <li><h5>{item.strIngredient3}</h5></li>
                  <li><h5>{item.strIngredient4}</h5></li>
                  <li><h5>{item.strIngredient5}</h5></li>
                  <li><h5>{item.strIngredient6}</h5></li>
                  <li><h5>{item.strIngredient7}</h5></li>
                  <li><h5>{item.strIngredient8}</h5></li>
                  <li><h5>{item.strIngredient9}</h5></li>
                </ul>
              </div>
            )
          })}
      </div>
    )
  }
}

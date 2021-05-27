import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Meals.css"

export default class Meals extends Component {
  state = {
    meals: []
  }
  componentDidMount() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.categories}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          meals: data.meals
        })
      })
  }

//  uraditi ovo
  render() {
    return (
      <div>
        <h1 className="meals-header">Meals Of Category</h1>
        <div className="category-header">
          {this.props.match.params.categories}
        </div>
        <div >
          <Link to="/" className="home-page">Go back to the Home Page</Link>
        </div>
        <div className="meals-of-category">
          {this.state.meals.splice(0, 12).map(item => {
            return (
                <div key={item.idMeal} className="get-meals-of-category" >
                  <Link to={`/details/${item.idMeal}`} className="link-name">
                    <img src={item.strMealThumb} alt="" width="250" height="250" />
                    <h3 className="meals-name">{item.strMeal}</h3>
                  </Link>
                </div>
            )
          })}
        </div>
      </div>
    )
  }
}

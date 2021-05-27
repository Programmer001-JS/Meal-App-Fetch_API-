import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Categories.css"

export default class Categories extends Component {
  state = {
    categories: [],
    mealsData: [],
    message: "Meal doesn't exist"

  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data.categories
        })
      })
  }


  searchMeal = (key) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + key)
      .then(res => res.json())
      .then(data => {
        this.setState({ mealsData: data.meals })
      })
  }

  render() {
    return (
      <div classNamе="meal">
        <h1 className="meal-header">Meal App</h1>
        <div className="search-meal">
          <input className="search-input" type="text" placeholder="Search Meal..." onChange={(event) => this.searchMeal(event.target.value)} />
        </div>

        {this.state.mealsData ? <div>
          {this.state.mealsData.map(item => {
            return (
              <div key={item.idMeal} className="get-meals">
                <Link to={`/details/${item.idMeal}`} className="link-name">
                  <h3 className="get-meals-name">{item.strMeal}</h3>
                  <img className="get-meals-img" src={item.strMealThumb} alt="" width="250" height="250" />
                </Link>
              </div>
            )
          })}
        </div> : <div className="error-msg">{this.state.message}</div>
        }
        <div className="categories-meals">
          {this.state.categories.splice(0, 10).map(item => {
            return (
              <div key={item.idCategory} className="categories-meal">
                <Link to={`/meals/${item.strCategory}`} className="link-name">
                  <img src={item.strCategoryThumb} alt="" width="250" height="250" />
                  <h3 className="categories-name">{item.strCategory}</h3>
                </Link>
              </div>
            )
          })
          }
        </div>


      </div>
    )
  }
}

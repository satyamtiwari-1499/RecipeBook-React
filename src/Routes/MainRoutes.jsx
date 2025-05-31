import React from 'react'
import {Route, Routes } from 'react-router-dom'
import RecipeForm from '../pages/RecipeForm'
import UpdateRecipe from '../pages/UpdateRecipe'
import PageNotFound from '../pages/PageNotFound'
import RecipeSingle from '../pages/RecipeSingle'
import RecipeList from '../pages/RecipeList'
import RecipeFavorite from '../pages/RecipeFavorite'
import AboutPage from '../pages/AboutPage'



const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<RecipeForm/>}/>
    <Route path="/recipesingle/:id" element={<RecipeSingle/>}/>
    <Route path="/updaterecipe/:id" element={<UpdateRecipe/>}/>
    <Route path="/favoriterecipe" element={<RecipeFavorite/>}/>
    <Route path="/recipelist" element={<RecipeList/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  )
}

export default MainRoutes
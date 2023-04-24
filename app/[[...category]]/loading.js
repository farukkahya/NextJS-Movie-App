import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

const HomeLoading = () => {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </div>
  )
}

export default HomeLoading
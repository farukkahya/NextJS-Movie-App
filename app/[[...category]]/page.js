import React from 'react'
import HomeContainer from "@/containers/home";
import {getCategories, getPopularMovies, getSingleCategory, getTopRatedMovies} from "@/services/movie";
export default async function Home({params}) {
    let selectedCategory;
    const [{results:topRatedMovies},{results:popularMovies},{genres:categories}] =
      await Promise.all([getTopRatedMovies(),getPopularMovies(),getCategories()])
    if (params.category?.length > 0) {
        const{results} = await getSingleCategory(params.category[0]);
        selectedCategory =results
    }
    return (
        <HomeContainer
            categories={categories}
            topRatedMovies={topRatedMovies}
            popularMovies={popularMovies}
            selectedCategory={{
            id: params.category?.[0] ?? '',
            movies: selectedCategory ? selectedCategory.slice(0, 6) : []
        }}/>
    )
}

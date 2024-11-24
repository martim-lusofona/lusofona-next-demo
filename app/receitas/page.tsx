'use client'


import useSWR from "swr";
import CardComponent from "../_components/CardComponent";


export default function Receitas() {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/receitas', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)

    return <>
        {data.meals.map((meal: any) => {
            return <CardComponent key={meal.idMeal} imgSrc={meal.strMealThumb} name={meal.strMeal}></CardComponent>
        })}
    </>
}
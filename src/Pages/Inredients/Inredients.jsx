import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IngredientsCard from '../../Components/IngredientsCard/IngredientsCard';
import Loading from '../../Components/Loading/Loading';

export default function Inredients() {
    const [ingredients, setIngredients] = useState(null);

    async function getIngredients() {
        const options={
            url:'https://world.openfoodfacts.org/ingredients.json',
            method:'GET',
        }
        let {data} = await axios.request(options);
        setIngredients(data.tags);
        console.log(data.tags);
        
    }

    useEffect(()=>{
        getIngredients()
    },[])
  return (
   <>
   <div className='grid grid-cols-12 gap-4 px-8 pt-14'>
    {ingredients? (
        ingredients.map((ingredient)=>{
            return <IngredientsCard ingredientInfo={ingredient} />
        })
    ):(<Loading />)}
   </div>
   </>
  )
}

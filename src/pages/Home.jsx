import React, {useState} from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'


function Home() {
    let[cate,setCate]= useState(food_items)

    function filterType(category){
        if(category.toLowerCase() === "all"){
            setCate(food_items)
        }else{
            let newList = food_items.filter((item) => item.food_category.toLowerCase() === category.toLowerCase())
            setCate(newList)
        }
    }
  return (
    <div className='bg-lime-100 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
            {categories.map((item) => (
                <div key={item.id} className='w-[103px] h-[110px] justify-center items-center flex flex-col gap-2 font-semibold 
                rounded-md shadow-lg hover:bg-slate-400 cursor-pointer transition-all duration-200' 
                onClick={() => filterType(item.name)}>
                    {item.icon}
                    {item.name}
                    
                </div>
            ))}
        </div>
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
{cate.map((item) => (
    <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id}/>
))}
        </div>
       
    </div>
  )
}

export default Home
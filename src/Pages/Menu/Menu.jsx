import React, { useEffect, useMemo, useState } from "react";
import Cart from "../Cart/Cart";

import Loader from "../../Components/Loader/Loader";
import axios from "axios";
// import Counter from "../../Components/Counter/Counter";

// const pageSize = 3;

export default function Menu({products,setProducts,cartProducts,category,pageSize,currentPage,noOfPages
  ,AddItemToCart,currentCategory,changeCategory ,changeCurrentPage}) {
 


  useEffect(() => {
    async function getMenu() {
      try {
        let res = await axios.get("http://localhost:3000/menu");
        console.log(res);
        setProducts(res.data);
        // calculate number of pages
        let noOfPagess = Math.ceil(res.data.length / pageSize);
        setNoOfPages(noOfPagess);
        console.log(noOfPagess);
      } catch (error) {
        console.log(error);
      }
    }
    getMenu();
    console.log("effect..........");
  }, []);


  // function AddItemToCart(id) {
  //   console.log(id);
  //   //clone
  //   let newProducts = [...products];
  //   //edit
  //   newProducts = newProducts.map((item) =>
  //     item.id === id ? { ...item, inCart: !item.inCart } : item
  //   );
  //   let cartItems = newProducts.map((item) =>
  //     item.inCart === true ? item : ""
  //   );
  //   console.log(newProducts);
  //   console.log("cart items : ", cartItems);

  //   //update
  //   setProducts(newProducts);
  // }

  let newProducts = [...products];

  // useEffect(()=>{
  //   fetch('http://localhost:3000/menu').then((res)=>res.json()).then(data =>setProducts(data))
  // })
  console.log(products);


  //pagination
 
  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);

  console.log(pages);
  let pageRendered = currentPage === 1 ? pages : pages.filter((page)=>page.page === currentPage );

  let start = (currentPage * pageSize )- pageSize;
  let end = start + pageSize;

  //filter
  let itemsToRender = useMemo(()=>{ 
    return   currentCategory === "All"
      ? products
      : products.filter((product) =>
          product.category === currentCategory ? product : ""
        );

        
itemsToRender = itemsToRender.slice(start ,end);
 noOfPages = Math.ceil(itemsToRender.length /pageSize);
},[products,currentCategory]);
console.log(itemsToRender);



  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="join join-vertical col-span-1 mt-4 ">
          <button className="btn join-item btn-active">All</button>
          {category.map((item) => (
            <button
              onClick={() => changeCategory(item.category)}
              key={item.id}
              className="{`btn ${item.category === currentCategory ?bg-cyan-500:bg-gray-400 }`} "
            >
              {item.category}
            </button>
          ))}
        </div>

        {products.length !== 0 ? (
          <table className="col-span-9">
            <thead>
              <tr className="grid grid-cols-12">
                <th className="col-span-3 text-center"> Name</th>
                <th className="col-span-3 text-center">price</th>
                <th className="col-span-3 text-center">cart</th>
              </tr>
            </thead>
            <tbody>
              {itemsToRender.map((product) => (
                <tr className="grid grid-cols-12 gap-2" key={product.id}>
                  <td className="col-span-3 text-center">{product.title}</td>
                  <td className="col-span-3 text-center">{product.price}</td>
                  <td className="col-span-3 text-center">
                    {/* <Cart
                    onClick={AddItemToCart}
                      key={product.id}
                      AddItemToCart={AddItemToCart}
                      cartProducts={cartProducts}
                    /> */}


<button onClick={()=>{AddItemToCart(product.id)}}>
<i className={`fa-solid fa-cart-shopping`}></i>
</button>
                  </td>
                  {/* <td> <Counter /> </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Loader />
        )}
      </div>  
        <div className="join flex justify-center items-center mt-6">
        
       {pages.map((page)=>(
    
   
        <button key={page}
          className={` bg-cyan-500 text-white font-bold px-3 py-2 rounded-md  ${currentPage === page ? "btn-active" :""}`} 
          onClick={()=>{changeCurrentPage(page)}}
        >{page}</button>
       ))}
      </div>
    </>
  );
}

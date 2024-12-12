import React, { useState } from 'react'
import Data from './Data'
function Search() {
  let[store ,setStore] =useState(Data)
  let[data,setData] =useState()

    let filterOut = store.filter((currValue)=>{
        return currValue.name.toLocaleLowerCase().includes(data) || currValue.brand.toLocaleLowerCase().includes(data)
    })

  return (
    <>
    <h1>Search In React</h1>
    <div className="container">
<input type="text" name=""  onChange={(e)=>setData(e.target.value)}placeholder='Search Here.....' id="" />
 <div className="type">
    <h2>
        Name <hr />
    </h2>
    <h2>
        Brand <hr />
    </h2>
    <h2>
        Image <hr />
    </h2>
 </div>
 <hr />
 {   
   filterOut.map((curr)=>{
     return(
        <div className="itemList">
            <h3>{curr.name}</h3>
            <h3>{curr.brand}</h3>
            <img src={curr.image} alt="" />
            
        </div>
      )
   })
 }

    </div>
    
    </>
  )
}

export default Search
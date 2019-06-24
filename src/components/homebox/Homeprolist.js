import React from 'react';
const Com = ({homeprolist})=> (
  <div className="product">
    {
      homeprolist.map((item,index) =>{
        return <div key={index}>{item.title}</div>
      })
    }
  </div>
)
export default Com;
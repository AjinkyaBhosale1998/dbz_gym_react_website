import React from 'react';
import Gearitems from "./Gearitems";
import Gearsdata from "./Gearsdata";

function Mygears() {
    
    return (
    <div className="mygears" >
    
    <h1 className="text-center mt-3"  style={{ color: '#FF7F26' }}>💪 MY GEARS 🏋️</h1><br/>
    <h4 className="text-center" style={{color: 'orange'}}>This is what I use everyday to stay fit . I am not sponsored by any of these companies.</h4>
    <section className="py-4 container" >
    <div className="row justify-content-center">
      {Gearsdata.productData.map((item, index)=>{
        return(
            <Gearitems img={item.img} title={item.title} desc={item.desc} price={item.price}key={index}/>
        )
      })}

     </div>
    </section>
    </div>
  );
}

export default Mygears;

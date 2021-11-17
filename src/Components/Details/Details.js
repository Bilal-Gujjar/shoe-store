import React from 'react'
import { useParams } from 'react-router-dom';


function Details() {
    const shoes = {
        "air-jordan-3-valor-blue": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          name: "JORDAN MARS 270 LONDON",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },"New-Arrival": { 
          name: "Besties",
           img: 
           "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd12a1cb-fa6d-45f1-a416-ab8b65ad0831/kyrie-7-basketball-shoes-nNMZ3b.png" },
        
      };     

      const {productID} = useParams();
      const product = shoes[productID];
      const {name,img} = product;


    return (
        <div className='bcolu'>
            <h4>{name}</h4>
            <img src ={img} alt= {name}/>
        </div>
    )
    }

export default Details;
import React, { useState,useEffect} from 'react'
import { UseWeatherAPPContext } from '../../Context/Context'
import SingleCardComponents from '../SingleCard/Index'
const WeekInfoCardComponent =() =>{

    const {state:{daily}, dispatch } = UseWeatherAPPContext()

    const [selectedCard, setSelectedCard] =useState(0)

    //console.log('daily',daily)
    
    const updateCurrent =()=>{
        return (dispatch({
            type:'SET_CURRENT',
            payload :daily[selectedCard]
        })
        )
    }

   useEffect(()=>{
    updateCurrent();
   },[daily,selectedCard]);

    return( <>
        <div className='cardWrap'>
                <ul className='cardList'>
                    {
                        daily && daily.length >0 ? daily.map((item,index)=>{
                            if(index<7){
                            return( <SingleCardComponents  className ={index === selectedCard ? 'active' :""} onClick={()=>{
                                setSelectedCard(index);
                                updateCurrent();
                            }}key={index} item={item}/>
                            )
                        }
                        return '';
                        }):''
                    }
                </ul>
        </div>
    </>
    )
}

export default WeekInfoCardComponent
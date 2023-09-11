import React from 'react'
import ChooseStateComponents from './ChooseState'
import WeekInfoCardComponent from './WeekInfoCard/Index'
import HumidityComponents from './Humidity/Index'
import LeftComponents from './Left/Index'
const HomeComponents = ()=> {
  return (
    <>
      <div className='homeWrap'>
        <div className='weatherSection'>
            <LeftComponents />
            <div className='rightSide'>
                <ChooseStateComponents />
                <WeekInfoCardComponent/> 
                <HumidityComponents />
            </div>
        </div>
      </div>
    </>
    
  )
}

export default HomeComponents

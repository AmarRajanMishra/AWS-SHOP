import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slideData } from './slideData'

function HomeSlider() {

    const items = slideData.map((item)=><img src={item.imgPath} />)

  return (
    <AliceCarousel
        items={items}
    />
  )
}

export default HomeSlider;
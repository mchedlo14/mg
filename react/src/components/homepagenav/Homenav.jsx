import React from 'react'
import InfoImg from '../../assets/svgs/infoIcon.svg'
import expertsImg from '../../assets/svgs/expertsIcon.svg'
import JobImg from '../../assets/svgs/jobsIcon.svg'
import couponImg from '../../assets/svgs/couponsIcon.svg'
import carImg from '../../assets/svgs/autoIcon.svg'
import homeImg from '../../assets/svgs/homeIcon.svg'
import SHopImg from '../../assets/svgs/shopIcon.svg'
import eventImg from '../../assets/svgs/eventsIcon.svg'

import { useNavigate } from 'react-router'

const Homenav = () => {

    const router = useNavigate()

  return (
    <section className='home-nav-conteiner'>
        <div className='cards' onClick={() => router('info')}>
            <img src={InfoImg} alt='show image'/>
            <p>ინფო</p>
        </div>

        <div className='cards' onClick={() => router('/expertsCount')}>
            <img src={expertsImg} alt='expert image'/>
            <p>ექსპერტები</p>
        </div>

        <div className='cards' onClick={() => router('/jobs')}>
            <img src={JobImg} alt='employee image'/>
            <p>სამსახური</p>
        </div>

        <div className='cards'>
            <img src={couponImg} alt='coupon image'/>
            <p>კუპონები</p>
        </div>

        <div className='cards'>
            <img src={carImg} alt='car image'/>
            <p>ავტო</p>
        </div>

        <div className='cards'>
            <img src={homeImg} alt='home image'/>
            <p>უძრავი ქონება</p>
        </div>

        <div className='cards'>
            <img src={SHopImg} alt='product image'/>
            <p>მარკეტი</p>
        </div>
        <div className='cards'>
            <img src={eventImg} alt='event image'/>
            <p>ივენთები</p>
        </div>
    </section>
  )
}

export default Homenav
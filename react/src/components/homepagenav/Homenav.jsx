import React from 'react'
import serviceImg from '../../assets/images/shop.png'
import expertsImg from '../../assets/images/expert.png'
import employeeImg from '../../assets/images/employee.png'
import couponImg from '../../assets/images/coupons.png'
import carImg from '../../assets/images/car.png'
import homeImg from '../../assets/images/house.png'
import productImg from '../../assets/images/cart.png'
import eventImg from '../../assets/images/calendar.png'
import newsImg from '../../assets/images/news.png'
import { useNavigate } from 'react-router'

const Homenav = () => {

    const router = useNavigate()

  return (
    <section className='home-nav-wrapper'>
        <div className='home-card'>
            <img src={serviceImg} alt='show image'/>
            <p>ყველა სერვისი</p>
        </div>

        <div className='home-card' onClick={() => router('/experts')}>
            <img src={expertsImg} alt='expert image'/>
            <p>ექსპერტები</p>
        </div>

        <div className='home-card' onClick={() => router('/jobs')}>
            <img src={employeeImg} alt='employee image'/>
            <p>სამსახური</p>
        </div>

        <div className='home-card'>
            <img src={couponImg} alt='coupon image'/>
            <p>კუპონები</p>
        </div>

        <div className='home-card'>
            <img src={carImg} alt='car image'/>
            <p>ავტო</p>
        </div>

        <div className='home-card'>
            <img src={homeImg} alt='home image'/>
            <p>უძრავი ქონება</p>
        </div>

        <div className='home-card'>
            <img src={productImg} alt='product image'/>
            <p>მარკეტი</p>
        </div>
        <div className='home-card'>
            <img src={eventImg} alt='event image'/>
            <p>ივენთები</p>
        </div>
    </section>
  )
}

export default Homenav
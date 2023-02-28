import React from 'react'
import z from '../../assets/images/z.jpg'
export const ExpertPersonPage = () => {
  return (
    <div className='expert-person-wrapper'>
        <div className='person-image-container' style={{backgroundImage:`url(${z})`}}>
            <div className='profile-img-container'>
                <div className='image-box'>
                    <img src={z}/>

                    <div>
                        <p>ლევან მჭედლიშვილი</p>
                    </div>
                </div>

                <div className='phone-box'>
                    <p>593 12 21 28</p>
                </div>
            </div>

            <div className='expert-detail'>
                <p>დეტალები</p>

                <div className='details-box'>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                    <div className='box'>
                        <h4>შესრულებული</h4>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

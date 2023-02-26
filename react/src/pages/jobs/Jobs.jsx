import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import searchIcon from '../../assets/svgs/search.svg'
import clockIcon from '../../assets/images/clock.png'
import pinIcon from '../../assets/images/pin.png'
import walletIcon from '../../assets/images/wallet.png'
const Jobs = () => {
  return (
    <section className='jobs-wrapper'>
        <div className='header-test'>

        </div>

        <div className='title-wrapper'>
            <h3>
                <Typewriter words={['იპოვე შენი სამსახური!','განათავსე ვაკანსია აქ!']}   />
            </h3>
            <p>ჩვენს პლატფორმაზე მარტივად შეძლებ სასურველი სამსახურის პოვნას</p>
        </div>

        <div className='jobs-search-wrapper'>
            <input placeholder='მაგ: გაყიდვების მენეჯერი'/>
            <img src={searchIcon} alt='search'/>
        </div>


        <div className='jobs-list-wrapper'>
          <div className='jobs-filter-wrapper'>
            <div>
              <p>სულ განცხადება (236)</p>
            </div>

            <div>
              <h3>ფასიის შუალედი</h3>
              <div className='price-box'>250 ₾ - 500 ₾</div>
              <div className='price-box'>500 ₾ - 1000 ₾</div>
              <div className='price-box'>1000 ₾ - 1500 ₾</div>
              <div className='price-box'>1500₾+</div>
            </div>

            <div>
              <h3>დასაქმების ტიპი</h3>
              <div>
                <input type='checkbox' />
                <label>სრული განაკვეთი</label>
              </div>
              <div>
                <input type='checkbox' />
                <label>არასრული განაკვეთი</label>
              </div>
            </div>


            <div>
              <h3>გამოცდილება</h3>
              <div>
                <input type='checkbox' />
                <label>გამოცდილების გარეშე</label>
              </div>
              <div>
                <input type='checkbox' />
                <label>1 წელზე ნაკლები</label>
              </div>
              <div>
                <input type='checkbox' />
                <label>1-2 წელი</label>
              </div>
              <div>
                <input type='checkbox' />
                <label>2-3 წელი</label>
              </div>
              <div>
                <input type='checkbox' />
                <label>5+ წელი</label>
              </div>
            </div>
          </div>

          <div className='jobs-list-container'>
            <div className='job-card'>
              <div className='card-title'>
                <img src='https://www.epam.com/etc/designs/epam-core/images/common/logo.png'/>
                <div>
                  <h3>ქოლ-ცენტრის ოპერატორი</h3>
                  <p>ჭრელი აბანო</p>
                </div>
              </div>

              <div className='card-detail'>
                <div>
                  <img src={clockIcon} alt='clock icon'/>
                  <h5>სრული განაკვეთი</h5>
                </div>

                <div>
                  <img src={pinIcon} alt='pin icon'/>
                  <h5>წერეთლის გამზირი</h5>
                </div>

                <div>
                  <img src={walletIcon} alt='clock icon'/>
                  <h5>900-1100₾</h5>
                </div>
              </div>


              <div className='date-wrapper'>
                <p>24 თებ-26 მარ</p>
              </div>
            </div>

                        <div className='job-card'>
              <div className='card-title'>
                <img src='https://www.epam.com/etc/designs/epam-core/images/common/logo.png'/>
                <div>
                  <h3>ქოლ-ცენტრის ოპერატორი</h3>
                  <p>ჭრელი აბანო</p>
                </div>
              </div>

              <div className='card-detail'>
                <div>
                  <img src={clockIcon} alt='clock icon'/>
                  <h5>სრული განაკვეთი</h5>
                </div>

                <div>
                  <img src={pinIcon} alt='pin icon'/>
                  <h5>წერეთლის გამზირი</h5>
                </div>

                <div>
                  <img src={walletIcon} alt='clock icon'/>
                  <h5>900-1100₾</h5>
                </div>
              </div>


              <div className='date-wrapper'>
                <p>24 თებ-26 მარ</p>
              </div>
            </div>
          </div>

        </div>

    </section>
  )
}

export default Jobs
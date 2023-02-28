import {useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import ExpertFilter from '../../components/expertFilter/ExpertFilter'

const ExpertDetail = () => {
  const [isNumber,setIsNmber] = useState(false)

  const router = useNavigate()

  const {path} = useParams()
  
  return (
    <section className='expert-detail-wrapper'>

      <div className='expert-row'>

        {
          path === 'repair' && <ExpertFilter />
        }

        <div className='detail-box-wrapper'>
          
          <div className='expert-detail-box-wrapper'>
            <img src='https://mg.ge/service-experts/images/services/31926pexels-photo-7155779.jpeg' />
            <p>ლევან მჭედლიშვილი</p>

            <div className='expert-detail-btns-wrapper'>
              <button onClick={() =>setIsNmber(!isNumber)}>593 12 {isNumber ? ' ** **' : '15 18'} </button>
              <button onClick={() => router('jnm')}>დეტალურად</button>
            </div>
          </div>

          <div className='expert-detail-box-wrapper'>
            <img src='https://mg.ge/service-experts/images/services/31926pexels-photo-7155779.jpeg' />
            <p>ლევან მჭედლიშვილი</p>

            <div className='expert-detail-btns-wrapper'>
              <button onClick={() =>setIsNmber(!isNumber)}>593 12 {isNumber ? ' ** **' : '15 18'} </button>
              <button>დეტალურად</button>
            </div>
          </div>

          <div className='expert-detail-box-wrapper'>
            <img src='https://mg.ge/service-experts/images/services/31926pexels-photo-7155779.jpeg' />
            <p>ლევან მჭედლიშვილი</p>

            <div className='expert-detail-btns-wrapper'>
              <button onClick={() =>setIsNmber(!isNumber)}>593 12 {isNumber ? ' ** **' : '15 18'} </button>
              <button>დეტალურად</button>
            </div>
          </div>
        </div>
        

      </div>

    </section>
  )
}

export default ExpertDetail
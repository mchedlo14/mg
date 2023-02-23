import React from 'react'
import { useNavigate } from 'react-router'
import { expertApp } from '../../components/localjson/expert'

const Expert = () => {
    const router = useNavigate()
  return (
    <section className='expert-wrapper'>
        <div className='expert-text-wrapper'>
            <h1>მოძებნეთ სერვისის ექსპერტი</h1>
            <p>ჩვენ გაგიადვილებთ თქვენი სერვისისთვის შესაფერისი პროფესიონალის მოძებენაში</p>
        </div>


        <div className='all-service-wrapper'>
            <div className='text-wrapper'>
                <h2>ყველა სერვისი</h2>
                <p>lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla.</p>
            </div>
            <div className='search-wrapper'>

            </div>
            <div className='services-list-wrapper'>
            {
                expertApp.map(item => (
                    <div key={item.id} onClick={() => router(item.url)}>
                        <img src={item.image}/>
                        <h3>{item.title}</h3>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Expert

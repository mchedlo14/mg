import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import searchIcon from '../../assets/svgs/search.svg'
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
            <input placeholder='მაგ: პროგრამისტი'/>
            <img src={searchIcon} alt='search'/>
        </div>

    </section>
  )
}

export default Jobs
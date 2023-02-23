import logo from '../../assets/images/logomg.png'
import lightIcon from '../../assets/svgs/brightness.svg'
import searchIcon from '../../assets/svgs/search.svg'
import Homenav from '../../components/homepagenav/Homenav';
import Weather from '../../components/weather/Weather';
function HomePage() {
    return ( 
        <div className="home-wrapper">
            <div className="home-page-logo-container">
                <div>
                    <img src={logo} alt="logo" className='logo'/>
                </div>

                <div className='home-button-wrapper'>
                    <button>შესვლა</button>
                    <img src={lightIcon} alt='brightness'/>
                </div>
            </div>


            <div className='search-container'>
                <input placeholder='მოიძებნება ყველაფერი'/>
                <img src={searchIcon} alt='search icon' />
            </div>
            <Weather />
            <Homenav />
        </div>
     );
}

export default HomePage;
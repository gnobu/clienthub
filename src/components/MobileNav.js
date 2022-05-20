import './styles/MobileNav.css';
// import '../index.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import profile from '../assets/profile.png';


export default function MobileNav(props){
    function toggleSideBar(e){
        const clicked = e.target;
        clicked.classList.contains('hamburger')
            ? clicked.classList.toggle('active')
            : clicked.parentElement.classList.toggle('active');
        props.func(curr => !curr);
    }

    return (
        <header className=" mobileNav width-100">
            <MobileSideBar open={props.isOpen} />
            <div className='nav bg-dark-blue f-row width-100'>
                <div onClick={toggleSideBar} className="hamburger column">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <input className="searchInput width-100" type="search" placeholder="Search games" />
            </div>
        </header>
    )
}

function MobileSideBar(props){
    return (
        <div id='sideBar' className={`bg-dark-blue column ${props.open? 'mobileSideBar': 'mobileSideBarOff'}`}>
            <h2 className="logo text-center">GameHub</h2>
            <div className="container column">
                <div className="profileWrap">
                    <img className="profilePic" src={profile} alt="user's profile pic" />
                </div>
                <h3 className='text-center'>Username</h3>
                <p className='text-center'>9999XP</p>
            </div>
            <div className="container column">
                <nav className="column width-100 container">
                    <a href="#" className="nav__link width-100">
                        Games
                        <ArrowForwardIosRoundedIcon fontSize='small'/>
                    </a>
                    <a href='#' className="nav__link width-100">
                        Leaderboards
                        <ArrowForwardIosRoundedIcon fontSize='small'/>
                    </a>
                </nav>
            </div>
            <hr className='width-100'/>
            <div className="container column">
                <button id="signIn" className="btn action width-100 marg-b-5">Sign in</button>
                <button id="register" className="btn width-100">Register</button>
            </div>
        </div>
    )
}
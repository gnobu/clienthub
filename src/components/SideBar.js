import profile from '../assets/profile.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './styles/SideBar.css';
import { Divider } from '@mui/material';


export default function Sidebar(props){
    return (
        <div id='sideBar' className={`bg-dark-blue column sidebar`}>
            <h2 className="logo text-center">GameHub</h2>
            <div className="container column">
                <div className="profileWrap">
                    <img className="profilePic" src={profile} alt="user's profile pic" />
                </div>
                <h3 className='text-center'>Username</h3>
                <p className='text-center'>9999XP</p>
            </div>
            <div className="container column">
                <input className="searchInput width-100 marg-b-5" type="search" placeholder="Search games" />
                {/* <br /> */}
                <nav className="container column width-100">
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
            {/* <Divider/> */}
            <hr className='width-100'/>
            <div className="container column">
                <button id="signIn" className="btn action width-100 marg-b-5">Sign in</button>
                {/* <br /> */}
                <button id="register" className="btn width-100">Register</button>
            </div>
        </div>
    )
}
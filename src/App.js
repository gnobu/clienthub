import {useState} from 'react';
import Sidebar from './components/SideBar';
import Content from './components/Content';
import MobileNav from './components/MobileNav';
import './App.css';
import { NavBar } from './components/MobileNav';


function App(props){
    const [sideBarOpen, changeSideBarOpen] = useState(false);

    return (
        <div className="body column">
            <MobileNav isOpen={sideBarOpen} func={changeSideBarOpen}/>
            <div className="main f-row">
                <Sidebar/>
                <Content />
            </div>
        </div>
    )
}
export default App;
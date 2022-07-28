import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill, BsLockFill } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './styles/form.css';
import { Link } from 'react-router-dom';


export default function LogIn(props) {
    return (
        <div className="page">
            <div className='hero'></div>
            <SignUp />
        </div>)

}


function SignUp(props) {
    const [visible, setVisible] = useState({ display: false, identifier:'' });
    
    function togglePassword(e) {
        const input = e.target.previousElementSibling || e.target.parentElement.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        setVisible(prev => ({ display: !prev.display, identifier: input.id}))
    }
    
    return (
        <div className='formContainer'>
            <form className="form column">
            <p className='formHeading'>Sign up to get started</p>
                <div className='inputDiv'>
                    <MdEmail className='icon' />
                    <input className=" formInput email" type="email" placeholder="Email" required />
                </div>
                <div className='inputDiv'>
                    <BsFillPersonFill className='icon' />
                    <input className="formInput username" type="text" placeholder="Username" required />
                </div>
                <div className='inputDiv'>
                    <BiLock className='icon' />
                    <input className="formInput pass" id='pass' type="password" placeholder="Password" required />
                    {(visible.display && visible.identifier === 'pass') ? <AiOutlineEyeInvisible className='icon svg' onClick={togglePassword} /> : <AiOutlineEye className='icon svg' onClick={togglePassword} />}
                </div>
                <div className='inputDiv'>
                    <BiLock className='icon' />
                    <input className="formInput confirmPass" id='cpass' type="password" placeholder="Confirm Password" required />
                    {(visible.display && visible.identifier === 'cpass') ? <AiOutlineEyeInvisible className='icon svg' onClick={togglePassword} /> : <AiOutlineEye className='icon svg' onClick={togglePassword} />}
                </div>
                <p className='errorMsg'>Error message</p>
                <button id="signIn" className="btn action width-100 marg-b-5 btn-text">Sign Up</button>
                <div>
                    <p className='p-text'>Already have an account? <span>LogIn</span></p>
                </div>
            </form>
        </div>
    )
}



function SignIn(props) {
    return (
        <form className="form column" onSubmit="">
            <div className="column inputDiv">
                <input className=" formInput email" type="email" placeholder="Email..." />
                <input className="formInput pass" type="password" placeholder="Password..." />
                <button id="signIn" className="btn action width-100 marg-b-5">Sign Up</button>
            </div>
        </form>
    )
}
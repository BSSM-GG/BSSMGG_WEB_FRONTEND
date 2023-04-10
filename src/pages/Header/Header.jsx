import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import './Header.scss';
export default function Header() {
    const [urls, setUrls] = React.useState('/');
    const [judge, setJudge] = React.useState(true);
    function change() {

    }
    return (
        <div className='headermain'>
            <img src='/images/logo.png' className='logimg' alt=''></img>
            <Link to="/">
                <h1 className='h1text'>홈</h1>
            </Link>
            <Link to="/rank">
                <h1 className='h2text'>랭킹</h1>
            </Link>
            <Link to="/builder">
                <h1 className='h3text'>내전 팀 빌더</h1>
            </Link>
            <Link to={urls} onClick={change}>
                <img src="/images/lol.png" className='games' alt=''></img>
            </Link>
            <Link to={urls} onClick={change}>
                <img src="/images/val.png" className='gamese' alt=''></img>
            </Link>
        </div>
    )
}   
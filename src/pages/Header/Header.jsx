import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import './Header.scss';
export default function Header() {
    const [judge, setJudge] = React.useState(true);
    const holy = useRef(null);
    const sh = useRef(null);
    function change() {
        if (judge === false) {
            setJudge(!judge);
        }
        console.log(judge);
        sh.current.style.opacity = '0.5';
        holy.current.style.opacity = '1';
    }
    function change2() {
        if (judge === true) {
            setJudge(!judge);
        }
        console.log(judge);
        holy.current.style.opacity = '0.5';
        sh.current.style.opacity = '1';
    }
    return (
        <div className='headermain'>
            <img src='/images/logo.png' className='logimg' alt=''></img>
            <Link to={judge ? "/" : "/valorant"}>
                <h1 className='h1text'>홈</h1>
            </Link>
            <Link to={judge ? "/rank" : "/valrank"}>
                <h1 className='h2text'>랭킹</h1>
            </Link>
            <Link to={judge ? "/builder" : "/valbuilder"}>
                <h1 className='h3text'>내전 팀 빌더</h1>
            </Link>
            <span>
                <Link to="/" onClick={change}>
                    <img src="/images/lol.png" className='games' alt='' ref={holy}></img>
                </Link>
            </span>
            <span>
                <Link to="/valorant" onClick={change2}>
                    <img src="/images/val.png" className='gamese' alt='' ref={sh}></img>
                </Link>
            </span>
        </div >
    )
}   
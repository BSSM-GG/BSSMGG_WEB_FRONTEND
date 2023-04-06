import { useNavigate } from 'react-router-dom';
import './Header.scss';
export default function Header() {
    const nav = useNavigate();
    function home() {
        nav('/');
    }
    function rank() {
        nav('/');
    }
    function build() {
        nav('/');
    }
    return (
        <div className='headermain'>
            <img src='/images/logo.png' className='logimg' alt=''></img>
            <h1 className='h1text' onClick={home}>홈</h1>
            <h1 className='h2text' onClick={rank}>랭킹</h1>
            <h1 className='h3text' onClick={build}>내전 팀 빌더</h1>
        </div>
    )
}   
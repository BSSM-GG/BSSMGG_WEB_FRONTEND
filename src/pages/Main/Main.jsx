import './Main.scss';
export default function Main() {
    function change() {

    }
    return (
        <div className='mains'>
            <img src="/images/logos.png" className="logos"></img>
            <p className="logotext">League of Legends</p>
            <input type='text' className='wow' placeholder="챔피언, 소환사명 검색"></input>
            <h1 className='best'>베스트 플레이어</h1>
            <img src="/images/lol.png" className='changes' onClick={change}></img>
        </div>
    );
}
import react from 'react';
import './Build.scss'
export default function Builder() {
    return (
        <div className='lolbuilder'>
            <img src='/images/vs.jpg' className='backgroundbuild'></img>
            <div className='buildfirstuser'>
                <div className='teamcolor'></div>
                <div className='bluebg'>
                    <p className='one'>BLUE 1</p>
                </div>
                <div className='redbg'>
                    <p className='redone'>RED 1</p>
                </div>
            </div>
            <div className='middleline'></div>
            <div className='buildseconduser'>
                <div className='teamcolor'></div>
                <div className='bluebg'>
                    <p className='two'>BLUE 2</p>
                </div>
                <div className='redbg'>
                    <p className='redtwo'>RED 2</p>
                </div>
            </div>
            <div className='middlelinetwo'></div>
            <div className='buildthirduser'>
                <div className='teamcolor'></div>
                <div className='bluebg'>
                    <p className='three'>BLUE 3</p>
                </div>
                <div className='redbg'>
                    <p className='redthree'>RED 3</p>
                </div>
            </div>
            <div className='middlelinethree'></div>
            <div className='buildfourthuser'>
                <div className='teamcolor'></div>
                <div className='bluebg'>
                    <p className='four'>BLUE 4</p>
                </div>
                <div className='redbg'>
                    <p className='redfour'>RED 4</p>
                </div>
            </div>
            <div className='middlelinefourth'></div>
            <div className='buildfifthuser'>
                <div className='teamcolor'></div>
                <div className='bluebg'>
                    <p className='five'>BLUE 5</p>
                </div>
                <div className='redbg'>
                    <p className='redfive'>RED 5</p>
                </div>
            </div>
        </div>
    );
}
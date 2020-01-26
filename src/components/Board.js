import React from 'react';
import TargetContainer from '../containers/TargetContainer';
import ScoreContainer from '../containers/ScoreContainer';
import '../styles/board.scss';

export function Board() {
    return (
        <section className='board'>
            <div className = "title1">Isaiah's (and kind of Marlina's) Capybara game</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4ZJWPZmzEONG2WzR6W4ecBB62oGiaE3dimed-rkS07OwZOiCHQ&s" className="bground"></img>
            <TargetContainer/>
            <ScoreContainer/>
        </section>
    );
}

import React, { Component } from 'react';
import Picture from '../picture/picture';
import mice from '../../mice.json';
import './picture-block.css';

let score = 0;
console.log("Whuuuu");

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

class PictureBlock extends Component {
    state = {
        shuffled: false,
        lose: false,
        win: false,
        mice: mice,
        score: score,
    }
    
    shufflePics = (id) => {
        console.log("i shuffled");
        let clickedMice = [];
        const newMice = [...this.state.mice];
        const clickedMouse = newMice.find(mouse => mouse.id === id);
        if (clickedMouse.clicked) {
            this.lost();
        }
        clickedMouse.clicked = true;
        let goodClicks = newMice.filter(mouse => mouse.clicked).forEach((e, i) => {
            clickedMice.push('one');
        })
        console.log(clickedMice);
        if (clickedMice.length == newMice.length) {
            this.win();
        }

        this.setState({ shuffled: true, mice: shuffle(newMice), score: clickedMice.length });
    }

    lost = () => {
        this.setState({ lose: true });
        console.log('you lost');
    }

    win = () => {
        this.setState({ win: true });
        console.log('winner, winner, chicken.');
    }

    render() {
        let screen;
        const mouseElems =
            <div id="pleaseWork">
                        <h2>Score:</h2>
                        <h2>{this.state.score}/{this.state.mice.length}</h2>
                {this.state.mice.map(mouse => {
                    return <div>
                        <Picture {...mouse} handleClick={(id) => this.shufflePics(id)} />
                    </div>
                })}
            </div>;
        const loseElem = <h1>You lost - you were explicitly told not to click them more than once.</h1>;
        const winElem = <h1> You win! Way to remember things!</h1>
        if (this.state.lose) {
            screen = loseElem;
        } else if (this.state.win) {
            screen = winElem;
        } else {
            screen = mouseElems;
        }
        return (
            <div> {screen}
            </div>
        )
    }
}

export default PictureBlock;

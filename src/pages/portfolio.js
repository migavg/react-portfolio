import React from 'react';
import 'bulma/css/bulma.min.css';
import ragingbullScreenshot from '../images/ragingbullScreenshot.jpg';
import BattleBinder from '../images/BattleBinder.PNG';

const Portfolio = () => {
    return (
        <div class="container mt-6 mb-6">
            <div class="columns mb-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
                    <h3>Project 1</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={ragingbullScreenshot} alt='app screenshot' />
                </div>

                <div class="column is-half has-background-link ml-1 has-text-white">
                <h3>Project 2</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={BattleBinder} alt='app screenshot' />
                    
                </div>
            </div>


            <div class="columns mt-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
            
                <h3>Project 2</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={BattleBinder} alt='app screenshot' />
                    
                </div>
                <div class="column is-half has-background-link ml-1 has-text-white"> <h3>Project 2</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={BattleBinder} alt='app screenshot' />
                    
                </div>
            </div>

            <div class="columns mt-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
            
                <h3>Project 2</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={BattleBinder} alt='app screenshot' />
                    
                </div>
                <div class="column is-half has-background-link ml-1 has-text-white"> <h3>Project 2</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    </a>
                    <img src={BattleBinder} alt='app screenshot' />
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio;


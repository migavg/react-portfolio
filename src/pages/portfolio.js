import React from 'react';
import 'bulma/css/bulma.min.css';
import ragingbullScreenshot from '../images/ragingbullScreenshot.jpg';
import BattleBinder from '../images/BattleBinder.PNG';
import weather from '../images/weather.PNG'
import workday from '../images/workday.PNG'
import generator from '../images/generator.png'
import pwa from '../images/pwa.PNG'
const Portfolio = () => {
    return (
        <div class="container mt-6 mb-6">
            <div class="columns mb-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
                    <h3>Project 1</h3>
                    <a href="https://josiesavill.github.io/RagingBullCookbook/" class="">
                    <img src={ragingbullScreenshot} alt='app screenshot' />
                    </a>
                    
                </div>

                <div class="column is-half has-background-link ml-1 has-text-white">
                <h3>Project 2</h3>
                    <a href="https://arcane-falls-03228.herokuapp.com/" class="">
                    <img src={BattleBinder} alt='app screenshot' />
                    </a>
                    
                    
                </div>
            </div>


            <div class="columns mt-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
            
                <h3>Project 3</h3>
                    <a href="https://migavg.github.io/weather-dashboard/" class="">
                    
                    <img src={weather} alt='app screenshot' />
                    </a>
                    
                    
                </div>
                
                <div class="column is-half has-background-link ml-1 has-text-white"> <h3>Project 4</h3>
                    <a href="https://migavg.github.io/work-day-scheduler/" class="">
                    <img src={workday} alt='app screenshot' />
                    </a>
             
                    
                </div>
            </div>

            <div class="columns mt-5">
                <div class="column is-half has-background-link mr-1 has-text-white">
            
                <h3>Project 5</h3>
                    <a href="https://migavg.github.io/password-generator/" class="">
                    <img src={generator} alt='app screenshot' />
                    </a>
                   
                    
                </div>


                <div class="column is-half has-background-link ml-1 has-text-white"> <h3>Project 6</h3>
                    <a href="https://justanothertexteditorpwa.herokuapp.com/" class="">
                        <img src={pwa} alt='app screenshot' />
                    </a>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio;


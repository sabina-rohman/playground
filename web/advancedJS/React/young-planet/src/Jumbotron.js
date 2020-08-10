import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
    return (
        <div class="jumbotron">
            <h1>Space Age</h1>
            <div className="first-text"><em>"Wonder what your age is in Mercury?"</em></div>
            <div className="second-text"><em>"Or your weight in Jupiter?"</em></div>
            <div class="star sun"></div>
            <div class="plan mercury"></div>
            <div class="plan venus"></div>
            <div class="plan earth"></div>
            <div class="plan mars"></div>
            <div class="plan jupiter"></div>
            <div class="plan saturn"></div>
            <div class="plan uranus"></div>
            <div class="plan neptune"></div>
        </div>
    )
}

export default Jumbotron;
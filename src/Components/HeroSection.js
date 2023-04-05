import React from 'react'
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';

function HeroSection() {

  return (
    <div className="hero-container">
        <h1>The Art & Science of Machine Learning</h1>
        <Button className="btns" buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Get Started
        </Button>
    </div>
  )
}

export default HeroSection
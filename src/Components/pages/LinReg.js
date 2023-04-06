import React from 'react';
import '../../App.css';
import { useRef } from "react";
import '../SideNav.css';
import ScatterPlot from '../ScatterPlot';

function LinearRegression() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const section5 = useRef(null);

    const xData = [2, 4, 6, 8, 10, 12];
    const yData = [4, 7, 9, 12, 15, 18];

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

    return (
    <div className="page-container">
        <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(section1)} className="link">
            Overview
          </li>
          <li onClick={() => scrollToSection(section2)} className="link">
            Overview2
          </li>
          <li onClick={() => scrollToSection(section3)} className="link">
            Overview3
          </li>
          <li onClick={() => scrollToSection(section4)} className="link">
            Overview4
          </li>
          <li onClick={() => scrollToSection(section5)} className="link">
            Overview5
          </li>
        </ul>
        </nav>
        <div className='title-card'>
            <h1 className="page-title">
                Linear Regression
            </h1>
        </div>
        <div ref={section1} className="lesson-card">
        <h3 className='lesson-title'>Overview</h3>
        <div className='lesson-text-card'>
            <p className='lesson-text'>Linear regression is a statistical method used to establish a relationship between two continuous variables. It assumes that the relationship between the variables is linear, meaning that a change in one variable is proportional to a change in the other variable.

The method works by fitting a straight line through a set of data points that best represents the relationship between the two variables. The line is defined by an equation of the form y = mx + b, where y is the dependent variable (the variable being predicted), x is the independent variable (the variable used to make the prediction), m is the slope of the line, and b is the y-intercept.

Linear regression can be used for both simple regression, which involves only one independent variable, and multiple regression, which involves two or more independent variables. It is commonly used in various fields such as economics, finance, social sciences, and engineering to model and predict relationships between variables.

The accuracy of the linear regression model is determined by how well the line fits the data. This is measured by a statistical metric called the R-squared value, which represents the proportion of the variance in the dependent variable that can be explained by the independent variable(s). A higher R-squared value indicates a better fit between the data and the model.</p>
        </div>
      </div>
      <div ref={section2} className="lesson-card">
        <h3 className='lesson-title'>Example</h3>
        <div>
            <h3>Suppose we have the following dataset</h3>
        </div>
        <div>
          <table>
            <tr>
              <th>X</th>
              <th>Y</th>
            </tr>
            <tr>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>4</td>
              <td>7</td>
            </tr>
            <tr>
              <td>6</td>
              <td>9</td>
            </tr>
            <tr>
              <td>8</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10</td>
              <td>15</td>
            </tr>
            <tr>
              <td>12</td>
              <td>18</td>
            </tr>
          </table>
        </div>
        <div>
          <p className='lesson-text'>
            1. Plot the data: The first step is to plot the data points on a scatter plot to visualize the relationship between X and Y.
          </p>
        </div>
        <div>
      <h1>Scatter Plot Example</h1>
      <ScatterPlot xData={xData} yData={yData} />
    </div>
    <div>
      <p className='lesson-text'>2. Calculate the slope and y-intercept of the line of best fit: The next step is to calculate the slope and y-intercept of the line of best fit. The formula for the slope is:</p>
    </div>
      </div>
      <div ref={section3} className="lesson-card">
        <h3 className='lesson-title'>Overview3</h3>
        <div>
            <h3>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
    </div>     
    )    
}

export default LinearRegression;
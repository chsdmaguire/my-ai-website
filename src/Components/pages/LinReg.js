import React from 'react';
import '../../App.css';
import { useRef } from "react";
import '../SideNav.css';
import ScatterPlot from '../ScatterPlot';
import ScatterPlotWithLine from '../ScatterPlotWithLine';

function LinearRegression() {
    const overviewSection = useRef(null);
    const stepOne = useRef(null);
    const stepTwo = useRef(null);
    const stepThree = useRef(null);
    const stepFour = useRef(null);

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
          <li onClick={() => scrollToSection(overviewSection)} className="link">
            Overview
          </li>
          <li onClick={() => scrollToSection(stepOne)} className="link">
            Step One
          </li>
          <li onClick={() => scrollToSection(stepTwo)} className="link">
            Step Two
          </li>
          <li onClick={() => scrollToSection(stepThree)} className="link">
            Step Three
          </li>
          <li onClick={() => scrollToSection(stepFour)} className="link">
            Step Four
          </li>
        </ul>
        </nav>
        <div className='title-card'>
            <h1 className="page-title">
                Linear Regression
            </h1>
        </div>
        <div ref={overviewSection} className="lesson-card">
        <h3 className='lesson-title'>Overview</h3>
        <div className='lesson-text-card'>
            <p className='lesson-text'>Linear regression is a statistical method used to establish a relationship between two continuous variables. It assumes that the relationship between the variables is linear, meaning that a change in one variable is proportional to a change in the other variable.

The method works by fitting a straight line through a set of data points that best represents the relationship between the two variables. The line is defined by an equation of the form y = mx + b, where y is the dependent variable (the variable being predicted), x is the independent variable (the variable used to make the prediction), m is the slope of the line, and b is the y-intercept.

Linear regression can be used for both simple regression, which involves only one independent variable, and multiple regression, which involves two or more independent variables. It is commonly used in various fields such as economics, finance, social sciences, and engineering to model and predict relationships between variables.

The accuracy of the linear regression model is determined by how well the line fits the data. This is measured by a statistical metric called the R-squared value, which represents the proportion of the variance in the dependent variable that can be explained by the independent variable(s). A higher R-squared value indicates a better fit between the data and the model.</p>
        </div>
      </div>
      <div ref={stepOne} className="lesson-card">
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
        <div ref={stepOne}>
          <p className='lesson-text'>
            1. Plot the data: The first step is to plot the data points on a scatter plot to visualize the relationship between X and Y.
          </p>
        </div>
        <div>
      <h1>Scatter Plot Example</h1>
      <ScatterPlot xData={xData} yData={yData} />
    </div>
    <div ref={stepTwo}>
      <p className='lesson-text'>2. Calculate the slope and y-intercept of the line of best fit: The next step is to calculate the slope and y-intercept of the line of best fit. The formula for the slope is:</p>
    </div>
    <div>
      <p className='lesson-text'>m = (nΣXY - ΣXΣY) / (nΣX^2 - (ΣX)^2)</p>
    </div>
    <div>
      <p className='lesson-text'>where n is the number of data points, ΣXY is the sum of the product of X and Y, ΣX is the sum of X, ΣY is the sum of Y, and ΣX^2 is the sum of the square of X.

Similarly, the formula for the y-intercept is:</p>
    </div>
    <div>
      <p className='lesson-text'>b = (ΣY - mΣX) / n</p>
    </div>
    <div>
      <p className='lesson-text'>Substituting the values from the data set, we get:</p>
    </div>
    <div>
      <p className='lesson-text'>Substituting the values from the data set, we get:</p>
    </div>
    <div>
      <p className='lesson-text'>
      n = 6
      ΣX = 42
      ΣY = 65
      ΣXY = 616
      ΣX^2 = 520

      m = (6*616 - 42*65) / (6*520 - 42^2) = 1.5
      b = (65 - 1.5*42) / 6 = -1
      </p>
    </div>
    <div>
      <p className='lesson-text'>
      So the equation of the line of best fit is:
      </p>
    </div>
    <div>
      <p className='lesson-text'>
      y = 1.5x - 1
      </p>
    </div>
    <div ref={stepThree}>
      <p className='lesson-text'>3. Evaluate the model: Finally, we can evaluate the accuracy of the model by calculating the R-squared value. The formula for R-squared is:</p>
    </div>
    <div>
      <p className='lesson-text'>
      R^2 = 1 - (SSres / SStot)
      </p>
    </div>
    <div>
      <p className='lesson-text'>
      where SSres is the sum of the squared residuals (the difference between the predicted and actual values) and SStot is the total sum of squares (the difference between the actual values and the mean of Y).
      </p>
    </div>
    <div>
      <p className='lesson-text'>
      SSres = 4.5
      SStot = 39

      R^2 = 1 - (4.5 / 39) = 0.885
      </p>
    </div>
    <div>
      <p className='lesson-text'>
      This means that 88.5% of the variance in Y can be explained by the linear relationship with X.
      </p>
    </div>
    <div ref={stepFour}>
      <p className='lesson-text'>
      4. Plot the line of best fit: Finally, we can plot the line of best fit on the scatter plot to see how well it fits the data.
      </p>
    </div>
    <div>
      <ScatterPlotWithLine xData={xData} yData={yData} />
    </div>
      </div>
    </div>     
    )    
}

export default LinearRegression;
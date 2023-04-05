import React from 'react';
import '../../App.css';
import { useRef } from "react";
import '../SideNav.css';

function LinearRegression() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const section5 = useRef(null);

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
            Overview1
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
        <h3 className='lesson-title'>Overview1</h3>
        <div className='lesson-text-card'>
            <h3 className='lesson-text'>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
      <div ref={section2} className="lesson-card">
        <h3 className='lesson-title'>Overview2</h3>
        <div>
            <h3>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
      <div ref={section3} className="lesson-card">
        <h3 className='lesson-title'>Overview3</h3>
        <div>
            <h3>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
      <div ref={section4} className="lesson-card">
        <h3 className='lesson-title'>Overview4</h3>
        <div>
            <h3>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
      <div ref={section5} className="lesson-card">
        <h3 className='lesson-title'>Overview5</h3>
        <div>
            <h3>saodijcdsocijsdcjsdocisjdncosdjcnos;dicjs;doicjsdoicnjsaidocsa;doics;icdscnsdkcs;odcno;sdcn;sodcnos;cnosd;cnso;cnsdco;</h3>
        </div>
      </div>
    </div>     
    )    
}

export default LinearRegression;
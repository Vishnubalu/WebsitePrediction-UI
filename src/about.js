import React from 'react';
import './footer.css'

function About(props) {
    return (
        <div className='about'>
            <h1>
                ABOUT
            </h1>
            <p className='info'> Malicious websites are of great concern because it is a problem to analyse the websites
                one by one and to index each URL in a black list. Unfortunately, there is a scarcity of datasets
                with malicious and benign web characteristics. The dataset used in this use case is a research
                production of the characteristics. The project consisted to evaluate different classification models
                to predict malicious and benign websites, based on application layer and network characteristics.
                The data were obtained by using different verified sources of benign and malicious URL's,
                in a low interactive client honeypot to isolate network traffic. During the research process we found
                that one way to study a malicious website was the analysis of features from its application layer and
                network layer, in order to get them, the idea is to apply the dynamic and static analysis.</p>
            <footer className="footer">
                <p className='head'>

                    <h2>
                     All Rights Reserved To <a href="https://www.virtusa.com">@VIRTUSA</a>
                    </h2>
                </p>
            </footer>
        </div>


    );
}

export default About;
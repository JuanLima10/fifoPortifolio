import React from 'react';
import Footer from '../../components/Footer';
import NavContent from '../../components/NavContent';

function Trabalhos(){
    return(
        <div id="page-wrap">
            <div id="hero-wrapper2">
                <NavContent />
            </div>
            <div class="body-content2 wow fadeIn" data-wow-delay="0.36s">
	            <h1>VIDEOS</h1>
            <small>⇣</small>
<br/><br/>
        <center><div class="container"> 
            <div class="row">
              <div class="col wow fadeIn">
                    <iframe src="https://www.youtube.com/embed/Q4sGlVvF93k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col wow fadeIn ">
                    <iframe src="https://www.youtube.com/embed/lrK9vPGd3T4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
<br/>
            <div class="row">
              <div class="col wow fadeIn">
                    <iframe src="https://www.youtube.com/embed/6QxdRXNUmCI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col wow fadeIn ">
                    <iframe src="https://www.youtube.com/embed/e4dWsAD_7V0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
			</div>
<br/>
			<div class="row">
				<div class="col wow fadeIn">
                    <iframe src="https://www.youtube.com/embed/a6jskf_3cRs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
        </div></center>
	        </div>
<br/>
            <Footer />
        </div>
    );
}

export default Trabalhos;
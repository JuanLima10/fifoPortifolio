import React from 'react';
import Footer from '../../components/Footer';
import NavContent from '../../components/NavContent';

import Imagem1 from '../../assets/img/galeria/imagem (1).jpg'
import Imagem2 from '../../assets/img/galeria/imagem (2).jpg'
import Imagem3 from '../../assets/img/galeria/imagem (3).jpg'
import Imagem4 from '../../assets/img/galeria/imagem (4).jpg'
import Imagem5 from '../../assets/img/galeria/imagem (5).jpg'
import Imagem6 from '../../assets/img/galeria/imagem (6).jpg'
import Imagem7 from '../../assets/img/galeria/imagem (7).jpg'
import Imagem8 from '../../assets/img/galeria/imagem (8).jpg'
import Imagem9 from '../../assets/img/galeria/imagem (9).jpg'
import Imagem10 from '../../assets/img/galeria/imagem (10).jpg'
import Imagem11 from '../../assets/img/galeria/imagem (11).jpg'
import Imagem12 from '../../assets/img/galeria/imagem (12).jpg'

function Galeria(){
    return(
        <div id="page-wrap">
            <div id="hero-wrapper2">
                <NavContent />
            </div>
            <div className="body-content2 wow fadeIn" data-wow-delay="0.36s">
                <h1>IMAGENS</h1>
                <small>⇣</small>
<br/><br/>
                <center><div id="galeriaContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.30s"><br/><img src={Imagem1} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.35s"><br/><img src={Imagem2} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.40s"><br/><img src={Imagem3} width="340px"/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.30s"><br/><img src={Imagem7} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.35s"><br/><img src={Imagem9} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.40s"><br/><img src={Imagem6} width="340px"/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.30s"><br/><img src={Imagem4} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.35s"><br/><img src={Imagem5} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.40s"><br/><img src={Imagem10} width="340px"/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.30s"><br/><img src={Imagem12} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.35s"><br/><img src={Imagem11} width="340px"/></div>
                            <div className="col-sm wow fadeIn fadeInBottom animated" data-wow-delay="0.40s"><br/><img src={Imagem8} width="340px"/></div>
                        </div>
                    </div>
                </div></center>
            </div>
<br/><br/>
            <Footer />
        </div>
    );
}

export default Galeria;
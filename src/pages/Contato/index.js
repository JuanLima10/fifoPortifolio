import React from 'react';
import Footer from '../../components/Footer';
import NavContent from '../../components/NavContent';

function Contato(){
    
    return(
        <div id="page-wrap">
            <div id="hero-wrapper2">
                <NavContent />
            </div>
            <div className="body-content2 wow fadeIn" data-wow-delay="0.36s">
            <h1>CONTATO</h1>
                <small>⇣</small>
<br/><br/>
                <div id="form" className="col-lg-6 col-sm-5 wow fadeInUp delay-05s">
                    <div className="form">
                        <form role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control input-text" id="name" placeholder="Seu nome" data-rule="minlen:4" data-msg="Digite pelo menos 4 caracteres" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control input-text" name="email" id="email" placeholder="Seu Email" data-rule="email" data-msg="Por favor insira um emal válido" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control input-text text-area" id="mensagem" name="menssage" rows="5" data-rule="required" data-msg="Por favor deixe sua mensagem" placeholder="Dúvidas, comentários ou sugestões."></textarea>
                            </div>
                                <div className="text-center"><button type="submit" className="btn btn-md download-btn-first2 wow fadeInLeft animated" data-wow-delay="0.85s">Enviar mensagem</button></div>
                        </form>
                            <p className="text-center"> ou </p>
                            <div className="text-center"><a href="https://api.whatsapp.com/send?phone=5511947988275&text=Olá Felipe, conheci seus trabalhos através do seu site, você pode estar falando?" target="_blank"><button className="btn btn-md download-btn-first wow fadeInRight animated" data-wow-delay="0.85s"><i className="fab fa-whatsapp"></i> +55 11 94798-8275</button></a></div>
                    </div>
                </div>
            </div>
<br/><br/>
            <Footer />
        </div>
    );
}

export default Contato;
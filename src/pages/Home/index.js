import React from 'react';

import NavContent from '../../components/NavContent';
import Footer from '../../components/Footer';

import PerfilImg from "../../assets/img/perfil.jpg";


function Home(){
    return(
        <div id="page-wrap">
            <div id="hero-wrapper">
            <NavContent />
                <div className="container hero-inner">
                    <h1 className="animated fadeIn wow" data-wow-delay="0.4s">EDIÇÃO DE VIDEO E IMAGEM</h1>
                    <p className="animated fadeIn wow" data-wow-delay="0.67s">
                    Nome: Felipe Vertedor Franzoni <br/>
                    Cursando audio visual na Universidade Paulista <br/>
                    Email: felipevertedor@hotmail.com</p>
                    <a href="https://api.whatsapp.com/send?phone=5511947988275&text=Olá Felipe, conheci seus trabalhos através do seu site, você pode estar falando?" target="_blank"><button className="btn btn-md download-btn-first wow fadeInRight animated" data-wow-delay="0.85s"><i className="fab fa-whatsapp"></i> +55 11 94798-8275</button></a>
                    <img className="hero-perfil" data-wow-delay="1s" src={PerfilImg} alt="Smartphone"/>
                </div>
            </div>
            <div className="body-content wow fadeIn" data-wow-delay="0.36s">
                <h1>MAIS SOBRE</h1>
                <small>⇣</small>
                <p>Bem vindo ao meu portfólio! Meu nome é Felipe Vertedor Franzoni, sou editor de vídeos, imagens, som e estou me formando em técnico audiovisual.</p>
                <p>Comecei minha carreira como editor com meus 14 anos. Na época, editava vídeos para meu canal do Youtube, que era apenas um hobby. Com o passar do tempo, fui aprimorando meus conhecimentos, e hoje edito inúmeros tipos de vídeos, como gameplays, tutoriais, vlogs, institucionais e entre outros.
                Aqui você encontrará alguns de meus principais trabalhos que executei no decorrer dos anos.
                Espero que goste!!</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
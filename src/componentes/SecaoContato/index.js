import React from "react";
import './contato.css'

export default function SecaoContato(){
    return(
        <footer>
            <div className="secao-contato limitar-secao">
                <h1> FALE CONOSCO </h1>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento. </p>
                
                <div className="container-contato">

                    <div className="contato">

                        <h3> Contato </h3>
                        <div className="texto-contato">
                            <img src='assets/local.png'/>
                            <p> Nova Iguaçu, RJ </p>
                        </div>

                        <div className="texto-contato">
                            <img src="assets/telefone.png"/>
                            <p> (21) 9999-9999 </p>
                        </div>

                        <div className="texto-contato">
                            <img src="assets/email.png"/>
                            <p> contato@oticavida.com </p>
                        </div>

                    </div>
                    
                    <div className="redes-sociais">

                        <h3> Nossas Redes Sociais </h3>

                        <div className="texto-redes">
                            <img src="assets/fb.png" />
                            <p> /OticaVida </p>
                        </div>

                        <div className="texto-redes">
                            <img src="assets/ig.png" />
                            <p> @oticaVidarj</p>
                        </div>

                        <div className="texto-redes">
                            <img src="assets/tt.png" />
                            <p> @oticaVidarj </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
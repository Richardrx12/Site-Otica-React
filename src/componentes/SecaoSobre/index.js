import React from "react";
import './sobre.css'

export default function SecaoSobre(){
    return(
        <main>
            <div className="secao-sobre limitar-secao">
                <h2> QUEM SOMOS NÓS? </h2>
                <p> Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                
                <div className="container-sobre">
                    
                        <img src="assets/loja.png" />
                   

                    <div className="texto">
                        <h3>Nossas Filiais</h3>
                        <  p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    
                    <div className="texto">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>

                    <img src="assets/atendimento.png" />

                </div>

            </div>
        </main>
    );
}
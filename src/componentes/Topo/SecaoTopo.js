import React from "react";
import './topo.css';

export default function Topo() {
    return(
        <header>
            
            <div className="limitar-secao">
                <div className="topo">
                    <img src="assets/logo.png" />
                    <nav> 
                        <a href='{SecaoProdutos}'> PRODUTOS </a> 
                        <a href="{SecaoSobre}"> SOBRE </a> 
                        <a href="{SecaoContato}"> CONTATO </a> 
                    </nav>
                </div>   
            </div>
        </header>
    );
}
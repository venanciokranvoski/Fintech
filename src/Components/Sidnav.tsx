import React from "react";
import resume from "../assets/icons/resumo.svg";
import sales from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import settings from "../assets/icons/configuracoes.svg";
import acountMe from "../assets/icons/contato.svg";
import exit from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

function Sidnav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <span>
            <img src={resume} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
           <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={acountMe} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a>Sair</a>  
        </li>
      </ul>
    </nav>
  );
}

export default Sidnav;

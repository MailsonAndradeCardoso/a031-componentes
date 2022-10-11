import React from "react"
import { InfoUsuarios } from "./InfoUsuarios";

export function CardVideo() {
    function reproduzVideo = () => {
        return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <h4>{titulo}</h4>
        <InfoUsuarios/>
      </div>
        )
    }
}
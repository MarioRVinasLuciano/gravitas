import React from "react";
import settingsIcon from "../Icons/technical-support.png";
import { Footer } from "../Components/Footer";
import { SolutionCard } from "../Components/SoltionCards";
import Cardcontent from "../Functions/Cardcontent";


export default function Soluciones() {
    return (
            <div className="h-auto w-full flex flex-col items-center justify-center">
                <div className="p-12 flex flex-row">
                    <h1 className="text-4xl lg:text-6xl xl:text-6xl font-bold">
                        Soluciones
                    </h1>
                    <span >
                        <img src={settingsIcon} alt="img" className="w-14 h-14 ml-4"></img>
                    </span>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                    {Cardcontent.map(props => (
                        <SolutionCard
                        key={props.id}
                        image={props.image}
                        title={props.title}
                        text={props.text}
                        />
                    ))}
                    </div>
                    
                
                



               
                <Footer/>
            </div>
    )
}
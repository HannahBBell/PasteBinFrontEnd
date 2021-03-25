import './component.css';
import React from "react";

interface ImodalBox {
    title: string | undefined | null;
    content: string | undefined; 
    isModalShown: boolean;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ModalBox(props: ImodalBox) {
   
    return (
        <div className={props.isModalShown? 'modal' : 'modal hide'}>
            <div className="modal-content">
                <button onClick={()=> props.setIsModalShown(false)}>x</button>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
};


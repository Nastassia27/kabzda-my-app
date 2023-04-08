import React, {useState} from "react";
import {Accordion} from "./Accordion";


export default{
    title: 'Accordion stories',
    component: Accordion,
};

export const CollapsedMode = ()=> <Accordion value={true} onChange={x=>x} titleValue={'Menu'}/>
export const UncollapsedMode = ()=> <Accordion titleValue={'List'} onChange={x=>x} value={false}/>

export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>



}
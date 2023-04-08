import React, {useState} from "react";
import {UncontrolledAccordion} from './SelfControlledAccordion'


export default{
    title: 'SCAccordion stories',
    component: UncontrolledAccordion,
};

export const CollapsedMode = ()=> <UncontrolledAccordion titleValue={'menu'}/>


/*
export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>

}*/

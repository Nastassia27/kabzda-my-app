import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default{
    title: 'Accordion stories',
    component: Accordion,
};


const Template: Story<AccordionPropsType> = (args)=><Accordion {...args}/>

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args={
    titleValue:'Menu',
    value: true,
    onChange: x=>x

}

export const UncollapsedMode = ()=> <Accordion titleValue={'List'} onChange={x=>x} value={false}/>

export const ModeChanging = ()=>{
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Menu'} value={value} onChange={setValue}/>



}
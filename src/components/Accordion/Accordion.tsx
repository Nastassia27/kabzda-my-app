import React from "react";

export type AccordionPropsType = {
    titleValue: string
    /**
     * Element collapse story if it's true and closes when false
     */
    value: boolean
    onChange: (value:boolean )=>void
}


export function Accordion (props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} value={props.value}/>

        </div>

}


type AccordionTitlePropsType = {
    title: string
    onChange: (value:boolean)=>void
    value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    /*debugger*/
    return (
        <div>
        <h3 onClick={()=>{props.onChange(!props.value)}}>{props.title}</h3>
         {!props.value ? <AccordionBody/>: ''}
    </div>
)
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


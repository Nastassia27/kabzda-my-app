import React from "react";

type OnOffType = {
    isOn: boolean
}


export function OnOff(props: OnOffType) {
    const OnStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: props.isOn ? "green" : "white"
    }
    const OffStyle = {
        width: '60px',
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        backgroundColor: props.isOn ? "white" : "red"
    }

    const IndicatorStyle = {
        width: '30px',
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
marginLeft:"5px",
        backgroundColor: props.isOn ? "green" : "red"
    }

    return (
        <div>
            <div style={OnStyle}>On</div>
            <div style={OffStyle}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}


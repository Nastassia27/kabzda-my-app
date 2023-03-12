import React from "react";

type RatingPropsType = {
    value: number
}
export function Rating(props: RatingPropsType) {
    //debugger
return(
    <div>
        <Star selected={props.value>0}/>
        <Star selected={props.value>1}/>
        <Star selected={props.value>2}/>
        <Star selected={props.value>3}/>
        <Star selected={props.value>4}/>
    </div>
)

}

type StarPropsType ={
    selected: boolean
}
function Star(props: StarPropsType) {
    console.log('Star rendering')

    if(props.selected === true){
        return <span><b>star </b></span>
    } else {}
    return <span>star </span>


}
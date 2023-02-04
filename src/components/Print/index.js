//Component for text output
//ARGUMENTS: 
//component -> component name (ex. p, h2, span, etc.) 
//class     -> class name
//text      -> text in the component
const Print = props => {
    return <props.component className={props.class}>{props.text}</props.component>
}

export default Print;
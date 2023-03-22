// import react from "react";

const Scroll = (props) => {
    return (
        <div className="noScrollBar" style={{ overflowY: 'scroll'}}>

        {props.children}
        </div>  
    )}    


export default Scroll;
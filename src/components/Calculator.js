import '../App.css'
import '../Calculator.css'
import '../About.css'
import React from "react";
import Button from "./Button.js";
import profile from "../assets/profile.jpeg"

import {useState} from "react";

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [answer, setAnswer] = useState(0)
    const [visibility, setVisibility] = useState("gone")

    const ClickHandle = (e) => {
        if (e.target.value==="C")
        {

            setText("")
        }
        else if  (e.target.value==="=")
        {
            setAnswer(eval(text1))
        }
        else
            setText(text1+e.target.value)
    };

    function ShowAboutMe() {
        if(visibility === "gone") {
            setVisibility("visible")
        } else {
            setVisibility("gone")
        }
    }

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value= {text1} />
            </div>


            <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/>
            </div>

            <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
            </div>
            <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
            </div>
            <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
            </div>
            <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
            </div>
            <Button
                label="About me"
                about="about"
                ClickHandle={ShowAboutMe} />
            <div className="screen-row">
                <input type="text" readOnly value={answer} />
            </div>
            <div className={visibility}>
                <img className="picture" src={profile}/>
                <div className="person-name">
                    <h3>Arpit Garg</h3>
                    <p>Web developer</p>
                </div>
            </div>

        </div>
    );

}
export default KeyPadComponent;
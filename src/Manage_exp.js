import React, { useState } from 'react'
import "./Manage_exp.css";
function Manage_exp() {
    const [tState, settState] = useState(1);

    const toggleTab = (index) => {
        settState(index);
    };
    return (
        <div>
            <div className="upper">
                <label><b>Add Experiment</b></label>
                <input type="text" placeholder="exp name" className="add_exp"></input>
                <button className="all_btn add_btn">Add</button>
            </div>
            <div className="middle">
                <label>1.</label>
                <input type="text" placeholder="" className="middle_input"></input>
                <button className="middle_btn_edit">Edit</button>
                <button className="middle_btn_del">Delete</button><br></br>
                <label>2.</label>
                <input type="text" placeholder="" className="middle_input"></input>
                <button className="middle_btn_edit">Edit</button>
                <button className="middle_btn_del">Delete</button><br></br>
                <label>3.</label>
                <input type="text" placeholder="" className="middle_input"></input>
                <button className="middle_btn_edit">Save</button>
                <button className="middle_btn_del">Discard</button><br></br>
                
                    <div className="container_inner">
                        <div className="bloc-tabs">
                            <button style={{border: "none"}}
                            className={tState === 1 ? "tabs_inner active-tabs_inner" : "tabs_inner"}
                            onClick={() => toggleTab(1)}
                            >
                            Basic Details
                            </button>
                            <button style={{border: "none"}}
                            className={tState === 2 ? "tabs_inner active-tabs_inner" : "tabs_inner"}
                            onClick={() => toggleTab(2)}
                            >
                            Docker Confugration
                            </button>
                            <button style={{border: "none"}}
                            className={tState === 3 ? "tabs_inner active-tabs_inner" : "tabs_inner"}
                            onClick={() => toggleTab(3)}
                            >
                            Experiment Files
                            </button>
                            <button style={{border: "none"}}
                            className={tState === 4 ? "tabs_inner active-tabs_inner" : "tabs_inner"}
                            onClick={() => toggleTab(4)}
                            >
                            Evaluation Details
                            </button>
                        </div>

                        <div className="content-tabs">
                            <div
                            className={tState === 1 ? "content  active-content" : "content"}
                            >
                            <h2>Content 1</h2>
                            </div>

                            <div
                            className={tState === 2 ? "content  active-content" : "content"}
                            >
                            <h2>Content 2</h2>
                            </div>

                            <div
                            className={tState === 3 ? "content  active-content" : "content"}
                            >
                            <h2>Content 3</h2>
                            </div>
                            <div
                            className={tState === 4 ? "content  active-content" : "content"}
                            >
                            <h2>Content 4</h2>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        
    )
}

export default Manage_exp;

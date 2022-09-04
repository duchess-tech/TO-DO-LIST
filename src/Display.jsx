import React, { useState } from "react";
import App from "./App";
import './App.css';

function Display() {

    const [Todo, setTodo] = useState({})


    return (
        <>
            <table>
                <tr>
                    <td>{ }</td>
                    <td>{ }</td>
                    <td>{ }</td>
                    <td>
                        <button onClick={submit} className="table-btn">Remove</button>
                    </td>
                </tr>


            </table>


        </>
    )
}
export default Display
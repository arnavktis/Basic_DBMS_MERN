import React, { useState } from 'react';
import axios from "axios";

export default function Home() {

    

    const searchEmployee = () => {
        var employeeName = document.getElementById("employeeName").value;
        var departmentType = document.getElementById("departmentType").value;

        var searchResult = `Searching for employee: ${employeeName} in department type: ${departmentType}`;
        document.getElementById("searchResult").innerText = searchResult;
    };

    const buttonClicked1 = () => {
        var divToToggle = document.querySelector(".inputstyle");
        if (
        divToToggle.style.display === "none" ||
        divToToggle.style.display === ""
        ) {
        divToToggle.style.display = "block";
        } else {
        divToToggle.style.display = "none";
        }
    };

    const buttonClicked2 = () => {
        var divToToggle = document.querySelector(".inputstyle");
        if (
        divToToggle.style.display === "none" ||
        divToToggle.style.display === ""
        ) {
        divToToggle.style.display = "block";
        } else {
        divToToggle.style.display = "none";
        }
    };

    const buttonClicked3 = () => {
        var divToToggle = document.querySelector(".inputstyle");
        if (
        divToToggle.style.display === "none" ||
        divToToggle.style.display === ""
        ) {
        divToToggle.style.display = "block";
        } else {
        divToToggle.style.display = "none";
        }
    };

    const buttonClicked4 = () => {
        var divToToggle = document.querySelector(".inputstyle");
        if (
        divToToggle.style.display === "none" ||
        divToToggle.style.display === ""
        ) {
        divToToggle.style.display = "block";
        } else {
        divToToggle.style.display = "none";
        }
    };

    const [msg,setMsg]=useState('')

    const submit = async(e)=>{
        e.preventDefault()

        try{
            await axios.post("https://localhost:3000/",{
                msg
            });
        }
        catch(e){
            console.log(e);
        }
    };

    return (
        <div className="container">
        <h2>Allotment Database</h2>
        <div className="input-group">
            <form action="POST">
                <label htmlFor="employeeName">Employee Name:</label>
                <textarea id="employeeName" name="text" onChange={(e) => { setMsg(e.target.value) }} placeholder="Enter employee name..." cols="30" rows="10"></textarea>
                <input type = "submit" onClick ={submit} value ="submit"></input>
            
            {/* <input
            type="text"
            id="employeeName"
            placeholder="Enter employee name..."
            style={{ marginBottom: "10px" }}
            /> */}
            <input type="text" id="employeeId" placeholder="Enter employee ID..." />
            </form>
        </div>
        <div className="input-group">
            <label htmlFor="departmentType">Department Type:</label>
            <select id="departmentType">
            <option value="All">All</option>
            <option value="Electricity">Electricity</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Horticulture">Horticulture</option>
            <option value="None">None</option>
            </select>
        </div>
        <button className="btnS" onClick={searchEmployee}>
            Search
        </button>
        <div className="button-section">
            <button className="btn" onClick={buttonClicked1}>
            Insert
            </button>
            <button className="btn" onClick={buttonClicked2}>
            Update
            </button>
            <button className="btn" onClick={buttonClicked3}>
            Delete
            </button>
            <button className="btn" onClick={buttonClicked4}>
            Read
            </button>
        </div>
        <div className="inputCRUD">
            <div className="inputstyle">
            <div className="Tools">
                <label htmlFor="toolName">Tool Info:</label>
                <input
                type="text"
                id="toolName"
                placeholder="Enter tool name..."
                style={{ marginTop: "5px" }}
                />
                <input type="text" id="toolId" placeholder="Enter tool ID..." />
            </div>
            <div className="Allotment">
                <label htmlFor="allotmentId">Allotment Info:</label>
                <input
                type="text"
                id="allotmentId"
                placeholder="Enter Allotment Id..."
                style={{ marginTop: "5px" }}
                />
            </div>
            </div>
        </div>
        </div>
    );
    }

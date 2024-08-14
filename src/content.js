import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Content(){
    return(
        <div id="content">
            <table>
                <tr>
                    <th>S.No.</th>
                    <th>Student Name</th>
                    <th>Register Number</th>
                    <th>Department</th>
                    <th>College</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Akash</td>
                    <td>720721106005</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Arunesh</td>
                    <td>720721106029</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>Barath</td>
                    <td>720721106034</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>Guhan</td>
                    <td>720721106047</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
            </table>
            
            <form>
                <div id="elt">
                    <label>Username: </label>
                    <input type="text"></input><br></br>
                </div>
                <div id="elt">
                    <label>Password: </label>
                    <input type="password"></input>
                </div>
                <div id='elt'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Content;
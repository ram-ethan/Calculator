import React from 'react'
import './App.css'
import { useState } from 'react';
export default function Calculator() {
    const [string, setString] = useState(""); // State to store the string input
    const [place, setPalce] = useState("0");
    // Function to handle button clicks
    const handleClick = (value) => {
        if (value === '=') {

            // Evaluate the expression
            // if(arr.length==0)

            try {
                if (string.length == 0)
                    return;
                // Attempt to evaluate the expression
                const c = eval(string);

                const x = (c.toString().length);
                if (x > 12) {
                    setString("");
                    setPalce("Limit !");
                }
                else { setString(eval(string).toString()); setPalce("0"); }
                return true; // If no errors occur, the expression is valid
            } catch (error) {
                setPalce("Inv@lid");
                setString("");
                return false; // If an error occurs during evaluation, the expression is invalid
            }
        } else if (value === 'AC') {
            // Clear the input
            setString(""); setPalce("0");
        } else if (value === 'DEL') {
            // Delete the last character
            setString(string.substring(0, string.length - 1)); setPalce("0");
        } else {
            // Append the value to the string
            //   if (value == '*' || value == '+' || value == '-' || value == '/' || value == '%' )
            setString(string + value); setPalce("0");
        }
    };
    return (
        <div className='container'>
            <div className="ans">
                <input className='inputs' value={string} type="text" placeholder={place} />
            </div>
            <div className="pads">
                <button className="items special" onClick={() => handleClick('AC')}>AC</button>
                <button className="items special" onClick={() => handleClick('DEL')}>DEL</button>
                <button className="items special" onClick={() => handleClick('%')}>%</button>
                <button className="items special" onClick={() => handleClick('/')}>/</button>
                <button className="items" onClick={() => handleClick('7')}>7</button>
                <button className="items" onClick={() => handleClick('8')}>8</button>
                <button className="items" onClick={() => handleClick('9')}>9</button>
                <button className="items special" onClick={() => handleClick('*')}>*</button>
                <button className="items" onClick={() => handleClick('4')}>4</button>
                <button className="items" onClick={() => handleClick('5')}>5</button>
                <button className="items" onClick={() => handleClick('6')}>6</button>
                <button className="items special" onClick={() => handleClick('-')}>-</button>
                <button className="items" onClick={() => handleClick('1')}>1</button>
                <button className="items" onClick={() => handleClick('2')}>2</button>
                <button className="items" onClick={() => handleClick('3')}>3</button>
                <button className="items special" onClick={() => handleClick('+')}>+</button>
                <button className="items" onClick={() => handleClick('00')}>00</button>
                <button className="items" onClick={() => handleClick('0')}>0</button>
                <button className="items" onClick={() => handleClick('.')}>.</button>
                <button className="items special" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    )
}

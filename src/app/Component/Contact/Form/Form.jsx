"use client"
import React, { useState } from "react";

const Form = () => {
  const [isFocused, setIsFocused] = useState([false, false, false, false]);
  const [inputValues, setInputValues] = useState(["", "", "", ""]);

  // handle focus
  const handleFocus = (index) => {
    const newIsFocused = [...isFocused];
    newIsFocused[index] = true;
    setIsFocused(newIsFocused);
  };

  // handle  bluer
  const handleBlur = (index, e) => {
    if (e.target.value === "") {
      const newIsFocused = [...isFocused];
      newIsFocused[index] = false;
      setIsFocused(newIsFocused);
    }
  };

  // handle input changes
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };


  // send from  information to the server
  const handleSubmit = (e) => {

    alert(`
     This From wil not work | 
     I have created only functionality
     for sending email from server |
     you can check  the code server: 
     https://github.com/Faruks23/markall_server"
     and post functionality  in client side

    `);
   
      e.preventDefault();
//  fetch  methods for  post request
    fetch("http://localhost:5000/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    
 
  }


  const InputName = ["Name", "Email", "Phone", "Message"];

  return (
    <div className="mt-[70px]">
      <form
        onSubmit={handleSubmit}
        className=" text-[#828282] text-[18px] font-[500] relative"
      >
        {/* input */}
        {InputName.map((name, index) => (
          <div className="mb-[40px] relative" key={index}>
            <label
              className={`absolute transition-all origin-left text-gray-600 ${
                isFocused[index] ? "top-[-16px] text-blue-500" : ""
              }`}
            >
              {name}*
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2  border-b outline-none focus:outline-none  transition duration-300 ${
                isFocused[index] ? "border-blue-500 pl-[70px]" : ""
              }`}
              placeholder=""
              onChange={(e) => {
                handleInputChange(index, e.target.value);
              }}
              onFocus={() => handleFocus(index)}
              onBlur={(e) => handleBlur(index, e)}
            />
          </div>
        ))}
        <button
          type="submit"
          className="md:px-[40px] px-[20px] py-[16px] bg-[#2F80ED] text-white  rounded text-[18px] font-[500]"
        >
          {" "}
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;

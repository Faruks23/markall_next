"use client"
import React, { useState } from "react";

const Form = () => {
  const [isFocused, setIsFocused] = useState([false, false, false, false]);
  const [inputValues, setInputValues] = useState(["", "", "", ""]);

  const handleFocus = (index) => {
    const newIsFocused = [...isFocused];
    newIsFocused[index] = true;
    setIsFocused(newIsFocused);
  };

  const handleBlur = (index, e) => {
    if (e.target.value === "") {
      const newIsFocused = [...isFocused];
      newIsFocused[index] = false;
      setIsFocused(newIsFocused);
    }
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    console.log(inputValues);
  }
console.log(inputValues);

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
          className="px-[40px] py-[16px] bg-[#2F80ED] text-white  rounded text-[18px] font-[500]"
        >
          {" "}
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;

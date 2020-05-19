import React, { useState } from 'react';
import './App.css';
import pet3 from './data/pet3.json'
function App() {

  const [searchValue, setSearchValue] = useState("")
  const [textAreaValue, setTextAreaValue] = useState("")

  function searchJson() {
    if (searchValue === "") {
      setTextAreaValue(JSON.stringify(pet3, null, 2))

    } else {
      let searchArr = searchValue.split(".")
      let filteredJson = pet3
      searchArr.forEach(item => {
        if (!item.includes("[")) {
          filteredJson = filteredJson[item]
        } else {
          let index = item[item.length - 2]
          let key = item.slice(0, -3)
          filteredJson = filteredJson[key][index]
        }
      })
      setTextAreaValue(JSON.stringify(filteredJson, null, 2))
    }
  }

  function onChangeInput(e) {
    setSearchValue(e.currentTarget.value)
  }
  return (
    <div className="App">
      <div className="section1">
        <input className="input" onChange={(e) => onChangeInput(e)} />
        <button className="button" onClick={() => searchJson()}>run</button>
      </div>
      <div className="section2">
        <textarea readOnly value={textAreaValue} cols="90" rows="45" className="text-area"></textarea>
      </div>
    </div>
  );
}

export default App;

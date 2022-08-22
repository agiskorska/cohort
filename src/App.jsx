import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [ students, setStudents ] = useState([{name: "Matt"}, {name:"Chicken"}]);
  const [ cohort, setCohorts ] = useState('bhatia');
  const [ inputValue, setInputValue ] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setCohorts(inputValue)

  }

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${cohort}/roster.json`)
    .then(res => res.json())
    .then(data => setStudents(data.students));
  }, [cohort]);

  return (
    <div className="App">
      {students.map((stud) => <p key={stud.name}>{stud.name}</p>)}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

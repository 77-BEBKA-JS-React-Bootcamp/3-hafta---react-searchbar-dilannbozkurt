import './App.css';
import React,{useState} from "react";
import universities from './universities';

export default function App() {
  const [universities, setUniversity] = useState('');
  const [details, setDetails] = useState(null);

  const handleClick = async () => {
    try {
    const responce = await universities.detail(universities)
    setDetails(responce);
  } catch (err) {
    setDetails({ error: "University not found" });
  }
};

  return (
    <div className="App">
     <h1>Let's write a university</h1>
      <input value={universities} onChange={evt => setUniversity(evt.target.value)} />
      <button onClick={handleClick}>Search</button>

      { details && (
        details.error ? (
          <h1>{details.error}</h1>
        ) : (
          <div>
            <h1>{details.name}</h1>
            <img src={details.sprites.front_default} alt="lolsorry" />
          </div>
      ))}

    </div>
  )
}
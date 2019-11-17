import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ResultForm() { 
    const [results, setResults] = useState([]);
    const [name, setName] = useState('');

    const getResults = async () => {
        let res = await axios.get('http://localhost:3001/api/results');
        setResults(res.data);
    }

    const addResult = async () => { 
        let obj = {
            name: name
        }
        await axios.post('http://localhost:3001/api/result', obj)
        setName('');
        getResults();
    }

    useEffect(() => {
        if(results.length === 0) {
            getResults();
        }
    })

    const renderResult = (result, i) => {
        return (<p key={i}>{result.name}</p>)
    }

    return (
        <div>
            <input type="text" value={name} onChange={event => (setName(event.target.value))} />
            <button onClick={addResult}>Add</button>
            {(results.map((result, i) => renderResult(result, i)))}
        </div>
    );
}

export default ResultForm
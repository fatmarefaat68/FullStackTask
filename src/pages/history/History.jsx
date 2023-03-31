import React, { useEffect, useState } from 'react';
import "./history.scss";
import { format } from 'date-fns'

const History = () => {

  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8800/result`,{
      method: 'GET',
    }).then(response => response.json())
    .then(response => setResults(response))
		.catch(err => console.error(err));
  },[]);



  return (
    <>
    <div className="history">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>phone number</th>
            <th>date</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => 
          <tr key={result._id}>
            <td>{result.username}</td>
            <td>{result.phoneNumber}</td>
            <td>{format(new Date(result.createdAt), 'yyyy-MM-dd')}</td>
            <td>{result.status}</td>
          </tr>

          )}
        </tbody>
        
      </table>
    </div>
    </>
  )
}

export default History;
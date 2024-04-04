import React, { useEffect, useState } from 'react';
import './SolutionList.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
//import AddSolution from './AddSolution.js';

function SolutionList() {
    const [solutions, setSolutions] = useState([]);
    const [selectedSolution, setSelectedSolution] = useState(null);
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        // Fetch solutions from your backend API
        fetch('http://Localhost:8080/solution/getAllSolutions')
            .then((response) => response.json())
            .then((data) => {
                setSolutions(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const deleteSolution = (id) => {
        // Send a request to delete the solution
        fetch(`http://Localhost:8080/solution/deleteSolution/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            // Remove the deleted solution from the list
            setSolutions(solutions.filter((solution) => solution._id !== id));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const updateSolution = (id) => {
        // Navigate to the edit route for the selected solution
        navigate(`/edit/${id}`);
        //return <Link to={`/edit/${id}`} />; // Use the navigate function to change routes
        console.log(`Update solution with id: ${id}`);
    };

    return (

    <div>
        <div className="solution-list">
            <h1>SOLUTIONS FROM USERS</h1>
            <Link to='/account'>
               <button type="button" >Add My Solution</button>
            </Link>
            
            <ul>
                {solutions.map((solution) => (
                    <li
                        key={solution._id}
                        onClick={() => setSelectedSolution(solution._id)}
                        className={selectedSolution === solution._id ? 'selected' : ''}
                    >
                        <h2><strong>POST BY : </strong>{solution.ownerName}</h2>
                        <p><strong>Problem Name:</strong> {solution.problemName}</p>
                        <p><strong>Problem Type:</strong> {solution.problemType}</p>
                        <p><strong>District:</strong> {solution.district}</p>
                        <p><strong>Started Date:</strong> {solution.timeRange}</p>
                        <p><strong>Problem Description:</strong> {solution.problemDescription}</p>
                        <p><strong>Solution:</strong> {solution.solution}</p>
                        {selectedSolution === solution._id && (
                            <div className="button-container">
                                <button onClick={() => deleteSolution(solution._id)}>Delete</button>
                                <button onClick={() => updateSolution(solution._id)}>Update</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>

        
          
    </div>
    );
}

export default SolutionList;

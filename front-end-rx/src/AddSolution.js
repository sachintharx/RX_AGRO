import React, { useState } from 'react';
import './AddSolution.css'; // Assuming you have a CSS file
import { Link } from 'react-router-dom';
//import { Navigate } from 'react-router';
//import SolutionList from './SolutionList';

function AddSolution() {
    const [ownerName, setOwnerName] = useState('');
    const [problemName, setProblemName] = useState('');
    const [problemDescription, setProblemDescription] = useState('');
    const [problemType, setProblemType] = useState(''); // Initial value
    const [timeRange, setTimeRange] = useState('');
    const [district, setDistrict] = useState(''); // Initial value
    const [solution, setSolution] = useState('');
    const [message, setMessage] = useState('');

    const addSolution = () => {
        if (!ownerName || !problemName || !problemDescription || !problemType || !timeRange || !district || !solution) {
            setMessage('All fields are required.');
            return;
        }

        const data = {
            ownerName,
            problemName,
            problemDescription,
            problemType,
            timeRange,
            district,
            solution
        };

        fetch('http://Localhost:8080/solution/addSolution', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data);
            
        })
        .catch(error => {
            console.error('Error:', error);
            setMessage('An error occurred while adding the solution.');
        });
    }

    return (
        
        <div className='addSolution'>
            <div className="solution-form">
            <h1>Add Your Solution</h1>
            <form>
                <img class="solution-image" src="agri.jpg" alt="A farmer working in the field" />


                <label htmlFor="ownerName">Owner Name:</label>
                <input type="text" id="ownerName" required value={ownerName} onChange={(e) => setOwnerName(e.target.value)} /><br /><br />

                <label htmlFor="problemName">Problem Name:</label>
                <input type="text" id="problemName" required value={problemName} onChange={(e) => setProblemName(e.target.value)} /><br /><br />

                <label htmlFor="problemDescription">Problem Description:</label>
                <textarea id="problemDescription" required value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} /><br /><br />

                <label htmlFor="problemType">Problem Type:</label>
                <select id="problemType" required value={problemType} onChange={(e) => setProblemType(e.target.value)}>
                    <option value="">Select Problem Type</option>

                        <option value="Pest and Disease Control">Pest and Disease Control</option>
                        <option value="Soil Quality">Soil Quality</option>
                        <option value="Water Management">Water Management</option>
                        <option value="Crop Yield">Crop Yield</option>
                        <option value="Crop Rotation">Crop Rotation</option>
                        <option value="Weather-Related Challenges">Weather-Related Challenges</option>
                        <option value="Weed Control">Weed Control</option>
                        <option value="Livestock Health">Livestock Health</option>
                        <option value="Market Access">Market Access</option>
                        <option value="Sustainable Agriculture">Sustainable Agriculture</option>
                        <option value="Technology Adoption">Technology Adoption</option>
                        <option value="Land Management">Land Management</option>
                        <option value="Labor Shortage">Labor Shortage</option>
                        <option value="Supply Chain Management">Supply Chain Management</option>
                        <option value="Storage and Post-Harvest Loss">Storage and Post-Harvest Loss</option>
                        <option value="Food Safety">Food Safety</option>
                        <option value="Access to Finance">Access to Finance</option>
                        <option value="Training and Education">Training and Education</option>
                        <option value="Climate Change Adaptation">Climate Change Adaptation</option>
                        <option value="Government Policies">Government Policies</option>

                </select><br /><br />

                <label htmlFor="timeRange">Started Date:</label>
                <input type="date" id="timeRange" required value={timeRange} onChange={(e) => setTimeRange(e.target.value)} /><br /><br />

                <label htmlFor="district">District:</label>
                <select id="district" required value={district} onChange={(e) => setDistrict(e.target.value)}>
                    <option value="">Select District</option>
                    
                    <option value="Ampara">Ampara</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Batticaloa">Batticaloa</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Galle">Galle</option>
                        <option value="Gampaha">Gampaha</option>
                        <option value="Hambantota">Hambantota</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Kalutara">Kalutara</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Kegalle">Kegalle</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                        <option value="Kurunegala">Kurunegala</option>
                        <option value="Mannar">Mannar</option>
                        <option value="Matale">Matale</option>
                        <option value="Matara">Matara</option>
                        <option value="Monaragala">Monaragala</option>
                        <option value="Mullaitivu">Mullaitivu</option>
                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Puttalam">Puttalam</option>
                        <option value="Ratnapura">Ratnapura</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Vavuniya">Vavuniya</option>

                </select><br /><br />

                <label htmlFor="solution">Solution:</label>
                <textarea id="solution" required value={solution} onChange={(e) => setSolution(e.target.value)} /><br /><br />

                <button type="button" onClick={addSolution}>Submit Solution</button>
                <Link to = '/solutionList'>

                    <button type="button" >Solution List</button>
                
                </Link>
            </form>

            <div className="message">{message}</div>
        </div>

           

    </div>
    );
}

export default AddSolution;

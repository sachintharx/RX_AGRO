import React, { useState, useEffect } from 'react';
import './SolutionEdit.css';
import { useNavigate, useParams } from 'react-router-dom';

function SolutionEdit() {
    const [solution, setSolution] = useState({
        ownerName: '',
        problemName: '',
        problemDescription: '',
        problemType: '',
        timeRange: '',
        district: '',
        solution: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://Localhost:8080/solution/getSolutions/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setSolution(data.solution);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleUpdate = () => {
        // Send a PUT request to update the solution
        fetch(`http://Localhost:8080/solution/updateSolution/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(solution),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Solution updated:', data);
                // After updating, you can navigate back to the solution list or another page
                navigate('/solutionList'); // Example: navigate back to the solution list
            })
            .catch((error) => {
                console.error('Error updating solution:', error);
            });
    };

    const handleCancel = () => {
        // Handle the cancel action (e.g., navigate back to the solution list)
        navigate('/solutionList'); // Example: navigate back to the solution list
    };

    return (
        <div className="solution-edit">
            <h1>Edit Solution of {solution.ownerName}</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="problemName">Problem Name:</label>
                    <input
                        type="text"
                        id="problemName"
                        value={solution.problemName}
                        onChange={(e) => setSolution({ ...solution, problemName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="problemDescription">Problem Description:</label>
                    <textarea
                        id="problemDescription"
                        value={solution.problemDescription}
                        onChange={(e) => setSolution({ ...solution, problemDescription: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="problemType">Problem Type:</label>
                    <select
                        id="problemType"
                        value={solution.problemType}
                        onChange={(e) => setSolution({ ...solution, problemType: e.target.value })}
                    >
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
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="timeRange">Started Date:</label>
                    <input
                        type="date"
                        id="timeRange"
                        value={solution.timeRange}
                        onChange={(e) => setSolution({ ...solution, timeRange: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="district">District:</label>
                    <select
                        id="district"
                        value={solution.district}
                        onChange={(e) => setSolution({ ...solution, district: e.target.value })}
                    >
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
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="solution">Solution:</label>
                    <textarea
                        id="solution"
                        value={solution.solution}
                        onChange={(e) => setSolution({ ...solution, solution: e.target.value })}
                    />
                </div>
                <div className="button-container">
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="button" onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SolutionEdit;

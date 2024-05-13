
import { render } from "react-dom";
import React, { useEffect, useState } from 'react';
import { fetchWebsiteUsageData } from '../api';
function Popup(){
//login.jsx
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic here (e.g., send login request to backend)
};

//ristricted.jsx
const [restrictedSites, setRestrictedSites] = useState([]);
const [newSite, setNewSite] = useState('');

const handleAddSite = () => {
    setRestrictedSites([...restrictedSites, newSite]);
    setNewSite('');
};

const handleDeleteSite = (site) => {
    setRestrictedSites(restrictedSites.filter(s => s !== site));
};

//activity.jsx
useEffect(() => {
    const handleActivity = () => {
        // Add logic to track user activity
        console.log('User is active');
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);

    return () => {
        document.removeEventListener('mousemove', handleActivity);
        document.removeEventListener('keydown', handleActivity);
    };
}, []);

//dashboard

const [websiteUsageData, setWebsiteUsageData] = useState([]);

useEffect(() => {
    // Mock API call to fetch website usage data
    fetchWebsiteUsageData()
      .then(data => setWebsiteUsageData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  //watchlist
    const [people, setPeople] = useState([]);
    const [newPerson, setNewPerson] = useState('');

    const handleAddPerson = () => {
        setPeople([...people, newPerson]);
        setNewPerson('');
    };

return (

    <>
    <h1 align='center'>Activity Tracker</h1>

    <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
    </form>

    <div className="restricted-sites">
    <h2 className="rs">Restricted Sites</h2>
        <input type="text" value={newSite} onChange={(e) => setNewSite(e.target.value)} placeholder="Enter website URL" />
        <button onClick={handleAddSite}>Add Site</button>
        <ul>
            {restrictedSites.map(site => (
                <li key={site}>
                    {site}
                    <button onClick={() => handleDeleteSite(site)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>

    <div>
    <h2 className="rs">Dashboard</h2>
    {/* Display website usage data */}
    <ul id="db">
        {websiteUsageData.map((site, index) => (
        <li key={index}>{site.name}: {site.timeSpent}</li>
        ))}
    </ul>
    </div>


    <div>
        <input id="npi" type="text" value={newPerson} onChange={(e) => setNewPerson(e.target.value)} />
        <button id="npb"onClick={handleAddPerson}>Add Person</button>
        <ul>
            {people.map(person => (
                <li key={person}>{person}</li>
            ))}
        </ul>
    </div>
    
    </>
);

    
}
render(<Popup />,document.getElementById("react-target"))
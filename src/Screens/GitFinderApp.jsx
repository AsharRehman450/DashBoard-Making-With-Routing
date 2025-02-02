import React, { useState } from 'react';
import { Button } from '@mui/material';  
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { useNavigate } from 'react-router-dom';  
import '../Screens/GitApp.css';  

const GitHubProfile = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();  

 
  const fetchGitHubUser = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('User not found');
      const user = await res.json();
      setUserData(user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const displayProfile = (user) => {
    return (
      <div className="profile-card p-4 text-center">
        <img
          src={user.avatar_url}
          alt="Profile Picture"
          className="img-thumbnail rounded-circle mb-3"
          style={{ width: '150px' }}
        />
        <h3>{user.name || 'No Name'}</h3>
        <p>@{user.login}</p>
        <p>{user.bio || 'No bio available.'}</p>
        <a href={user.html_url} target="_blank" className="btn view-profile-btn mt-2">
          View Profile
        </a>
        <div className="mt-3 stats">
          <span className="badge repos">Public Repos: {user.public_repos}</span>
          <span className="badge followers">Followers: {user.followers}</span>
          <span className="badge following">Following: {user.following}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <header>
        <h1>Search GitHub Accounts</h1>
      </header>
      <div className="search-container">
        <input
          id="searchInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
        />
        <button
          id="searchBtn"
          onClick={() => username && fetchGitHubUser(username)}
        >
          Search
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {userData && displayProfile(userData)}
    </div>
  );
};

export default GitHubProfile;

import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    grade: '11',
    email: 'johndoe@example.com',
    bio: 'I am a passionate student who loves maths and science. Always eager to learn new things and excel in my studies.',
    profilePicture: '/path/to/default-avatar.png', 
  });

  const handleEditProfile = () => {
    
    alert('Edit Profile functionality coming soon!');
  };

  const handleLogOut = () => {
    
    alert('Logged out successfully!');
  };

  return (
    <div className="profilecontainerback">
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-avatar"
          src={user.profilePicture}
          alt=""
        />
        <h1>Profile</h1>
      </div>

      <div className="profile-content">
        {/* Name Section */}
        <div className="profile-section">
          <h2>Name</h2>
          <p>{user.name}</p>
        </div>

        {/* Grade Section */}
        <div className="profile-section">
          <h2>Grade</h2>
          <p>{user.grade}</p>
        </div>

        {/* Email Section */}
        <div className="profile-section">
          <h2>Email</h2>
          <p>{user.email}</p>
        </div>

        {/* Bio Section */}
        <div className="profile-section">
          <h2>Bio</h2>
          <p>{user.bio}</p>
        </div>

        {/* Buttons */}
        <div className="profile-buttons">
          <button className="edit-profile-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button className="logout-button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;





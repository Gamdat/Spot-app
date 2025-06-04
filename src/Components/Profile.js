import React, {useState} from 'react';
import './Profile.css';
import profileImg from '../assets/bessie.jpeg';

function Profile() {
    const [showEditForm, setShowEditForm] = useState(false);
     const [showPostForm, setShowPostForm] = useState(false);

     const [username, setUsername] = useState('Bessie Coleman');
     const [bio, setBio] = useState('Edit Profile');
     const [postText, setPostText] = useState("");

 
     const handleEditSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated");
        setShowEditForm(false);
     };

      const handlePostSubmit = (e) => {
        e.preventDefault();
        alert("New post created:" + postText);
        setPostText("");
        setShowPostForm(false);
     };
    return (
        <div className='profile'>
            <img src={profileImg} alt="Bessie Coleman" className="profile-img"></img>
            <h2>Bessie Coleman</h2>
            <p className="bio">
                Civil Aviator
            </p>

            <div className='Edit'>
               <button className='edit-btn' onClick={() => setShowEditForm(!showEditForm)}>
                {showEditForm ? "Close Edit" : "Edit Profile"}
               </button>
            </div>
            <div className='NewPost'>
                <button className='new-post-btn' onClick={() => setShowPostForm(!setShowPostForm)}>
                     {showPostForm ? "Close Post" : "+New Post"}
               </button>
            </div>

            {showEditForm && (

        <form className="profile-form" onSubmit={handleEditSubmit}>
          <input  type="text"  value={username}   placeholder="Name"
 onChange={(e) => setUsername(e.target.value)} />
          <textarea
            value={bio}
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      )}

      {/* New Post Form */}
      {showPostForm && (
        <form className="profile-form" onSubmit={handlePostSubmit}>
          <textarea value={postText}
            onChange={(e) => setPostText(e.target.value)}
             placeholder="Write your post here...?"
             rows={4}
          ></textarea>
          <button type="submit">Post</button>
        </form>
      )}
        </div>
    
    );
}

export default  Profile;
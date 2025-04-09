import React, { useState } from 'react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    institution: 'University of Example',
    bio: 'Computer Science major with a passion for algorithms and data structures.'
  });

  const [uploadedMaterials, setUploadedMaterials] = useState([
    {
      id: 1,
      title: 'Data Structures Cheat Sheet',
      subject: 'Computer Science',
      downloads: 45,
      rating: 4.2
    },
    {
      id: 2,
      title: 'Linear Algebra Notes',
      subject: 'Mathematics',
      downloads: 32,
      rating: 4.5
    }
  ]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Profile updated:', profileData);
    setEditMode(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <button 
          onClick={() => setEditMode(!editMode)}
          className="btn"
        >
          {editMode ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-3xl text-gray-500">JD</span>
              </div>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="text-xl font-semibold text-center mb-1 w-full"
                />
              ) : (
                <h2 className="text-xl font-semibold">{profileData.name}</h2>
              )}
              <p className="text-gray-600">{profileData.role}</p>
            </div>

            {editMode ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Role</label>
                  <select
                    name="role"
                    value={profileData.role}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Researcher">Researcher</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={profileData.institution}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Bio</label>
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="w-full"
                  />
                </div>
                <button type="submit" className="btn w-full">
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Email</p>
                  <p>{profileData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Institution</p>
                  <p>{profileData.institution}</p>
                </div>
                <div>
                  <p className="text-gray-600">Bio</p>
                  <p>{profileData.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">My Uploads</h2>
            {uploadedMaterials.length > 0 ? (
              <div className="space-y-4">
                {uploadedMaterials.map(material => (
                  <div key={material.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{material.title}</h3>
                        <p className="text-sm text-gray-600">{material.subject}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {material.downloads} downloads
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          ⭐ {material.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">You haven't uploaded any materials yet.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">My Requests</h2>
            <p className="text-gray-500">You haven't made any requests yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

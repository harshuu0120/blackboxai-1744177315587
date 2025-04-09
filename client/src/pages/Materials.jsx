import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import MaterialDetailModal from '../components/MaterialDetailModal';

// Mock data - will be replaced with API calls
const mockMaterials = [
  {
    id: 1,
    title: 'Introduction to Algorithms',
    subject: 'Computer Science',
    type: 'PDF',
    uploader: 'John Doe',
    rating: 4.5,
    downloads: 120,
    date: '2023-10-15'
  },
  {
    id: 2,
    title: 'Organic Chemistry Notes',
    subject: 'Chemistry',
    type: 'Document',
    uploader: 'Jane Smith',
    rating: 4.2,
    downloads: 85,
    date: '2023-09-28'
  },
  {
    id: 3,
    title: 'Calculus Lecture Slides',
    subject: 'Mathematics',
    type: 'Presentation',
    uploader: 'Prof. Johnson',
    rating: 4.7,
    downloads: 210,
    date: '2023-11-02'
  }
];

const Materials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [savedMaterials, setSavedMaterials] = useState([]);

  const filteredMaterials = mockMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         material.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'all' || material.subject === filterSubject;
    const matchesType = filterType === 'all' || material.type === filterType;
    return matchesSearch && matchesSubject && matchesType;
  });

  // Get unique subjects and types for filters
  const subjects = ['all', ...new Set(mockMaterials.map(m => m.subject))];
  const types = ['all', ...new Set(mockMaterials.map(m => m.type))];

  // Load saved materials from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedMaterials')) || [];
    setSavedMaterials(saved);
  }, []);

  const handleSaveMaterial = (materialId) => {
    const updatedSaved = savedMaterials.includes(materialId)
      ? savedMaterials.filter(id => id !== materialId)
      : [...savedMaterials, materialId];
    
    setSavedMaterials(updatedSaved);
    localStorage.setItem('savedMaterials', JSON.stringify(updatedSaved));
  };

  const getRelatedMaterials = (currentMaterial) => {
    return mockMaterials
      .filter(m => 
        m.id !== currentMaterial.id && 
        m.subject === currentMaterial.subject
      )
      .slice(0, 3);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {selectedMaterial && (
        <MaterialDetailModal 
          material={selectedMaterial}
          relatedMaterials={getRelatedMaterials(selectedMaterial)}
          isSaved={savedMaterials.includes(selectedMaterial.id)}
          onSave={handleSaveMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Study Materials</h1>
        <Link to="/upload" className="btn">
          Upload Material
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Search</label>
            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              className="w-full"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map(material => (
            <div 
              key={material.id} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedMaterial(material)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{material.title}</h3>
                  <p className="text-gray-600">{material.subject} • {material.type}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    ⭐ {material.rating}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Uploaded by {material.uploader} on {material.date} • {material.downloads} downloads
                </p>
                <div className="flex gap-2">
                  <button 
                    className="btn btn-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Download logic here
                    }}
                  >
                    Download
                  </button>
                  <button 
                    className={`btn btn-sm ${savedMaterials.includes(material.id) 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-gray-100 text-gray-800'} hover:bg-gray-200`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveMaterial(material.id);
                    }}
                  >
                    {savedMaterials.includes(material.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No materials found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;

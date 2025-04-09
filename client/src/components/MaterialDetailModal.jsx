import React from 'react';
import { Link } from 'react-router-dom';

const MaterialDetailModal = ({ 
  material, 
  relatedMaterials, 
  isSaved, 
  onSave, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{material.title}</h2>
              <p className="text-gray-600">{material.subject} • {material.type}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Description</h3>
                <p>{material.description || 'No description provided'}</p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  ⭐ {material.rating}
                </span>
                <span className="text-gray-600">
                  Uploaded by {material.uploader} on {material.date}
                </span>
                <span className="text-gray-600">
                  {material.downloads} downloads
                </span>
              </div>

              <div className="flex space-x-3">
                <button className="btn">
                  Download
                </button>
                <button 
                  className={`btn ${isSaved ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100'}`}
                  onClick={() => onSave(material.id)}
                >
                  {isSaved ? 'Saved' : 'Save for Later'}
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Related Materials</h3>
              {relatedMaterials.length > 0 ? (
                <div className="space-y-3">
                  {relatedMaterials.map(item => (
                    <Link 
                      key={item.id}
                      to="#"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    >
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.subject}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No related materials found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetailModal;

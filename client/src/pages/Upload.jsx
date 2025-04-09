import React, { useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    type: 'PDF',
    description: '',
    file: null
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    // TODO: Implement actual file upload logic
    console.log('Upload form submitted:', formData);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsUploading(false);
    setUploadSuccess(true);
    setFormData({
      title: '',
      subject: '',
      type: 'PDF',
      description: '',
      file: null
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Upload Study Material</h1>
      
      {uploadSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
          Your material has been uploaded successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">Subject*</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block mb-1 font-medium">Type*</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full"
            required
          >
            <option value="PDF">PDF</option>
            <option value="Document">Document (Word)</option>
            <option value="Presentation">Presentation</option>
            <option value="Spreadsheet">Spreadsheet</option>
            <option value="Image">Image</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="file" className="block mb-1 font-medium">File*</label>
          <div className="border border-dashed border-gray-300 rounded-md p-4">
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label htmlFor="file" className="cursor-pointer">
              <div className="text-center">
                {formData.file ? (
                  <p className="text-green-600">{formData.file.name}</p>
                ) : (
                  <>
                    <p className="mb-1">Click to select a file</p>
                    <p className="text-sm text-gray-500">Max file size: 10MB</p>
                  </>
                )}
              </div>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full btn"
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Material'}
        </button>
      </form>
    </div>
  );
};

export default Upload;

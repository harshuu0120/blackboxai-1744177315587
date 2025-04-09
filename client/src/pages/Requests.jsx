import React, { useState } from 'react';

// Mock data - will be replaced with API calls
const mockRequests = [
  {
    id: 1,
    title: 'Advanced Calculus Textbook',
    subject: 'Mathematics',
    description: 'Looking for the latest edition of Stewart Calculus textbook',
    requester: 'Alex Johnson',
    date: '2023-11-10',
    status: 'open',
    offers: 2
  },
  {
    id: 2,
    title: 'Machine Learning Lecture Notes',
    subject: 'Computer Science',
    description: 'Need notes from CS229 course, preferably with problem solutions',
    requester: 'Sam Wilson',
    date: '2023-11-05',
    status: 'fulfilled',
    offers: 5
  },
  {
    id: 3,
    title: 'Organic Chemistry Lab Reports',
    subject: 'Chemistry',
    description: 'Looking for sample lab reports for reference',
    requester: 'Taylor Smith',
    date: '2023-10-28',
    status: 'open',
    offers: 1
  }
];

const Requests = () => {
  const [showForm, setShowForm] = useState(false);
  const [requestData, setRequestData] = useState({
    title: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement request submission logic
    console.log('Request submitted:', requestData);
    setShowForm(false);
    setRequestData({
      title: '',
      subject: '',
      description: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Material Requests</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="btn"
        >
          {showForm ? 'Cancel' : 'Make a Request'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">New Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1 font-medium">Title*</label>
              <input
                type="text"
                id="title"
                name="title"
                value={requestData.title}
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
                value={requestData.subject}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 font-medium">Description*</label>
              <textarea
                id="description"
                name="description"
                value={requestData.description}
                onChange={handleChange}
                rows="4"
                className="w-full"
                required
              />
            </div>
            <button type="submit" className="btn">
              Submit Request
            </button>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {mockRequests.map(request => (
          <div key={request.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{request.title}</h3>
                <p className="text-gray-600">{request.subject}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                request.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {request.status === 'open' ? 'Open' : 'Fulfilled'}
              </span>
            </div>
            <p className="mt-2">{request.description}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <p>Requested by {request.requester} on {request.date} • {request.offers} offers</p>
              {request.status === 'open' && (
                <button className="btn btn-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                  Offer Material
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;

import React, { useState } from 'react';

// Mock data - will be replaced with API calls
const mockThreads = [
  {
    id: 1,
    title: 'Help with Calculus problem',
    author: 'Alex Johnson',
    subject: 'Mathematics',
    replies: 5,
    views: 42,
    lastReply: '2023-11-12'
  },
  {
    id: 2,
    title: 'Best resources for Machine Learning?',
    author: 'Sam Wilson',
    subject: 'Computer Science',
    replies: 12,
    views: 87,
    lastReply: '2023-11-10'
  },
  {
    id: 3,
    title: 'Organic Chemistry study group',
    author: 'Taylor Smith',
    subject: 'Chemistry',
    replies: 8,
    views: 65,
    lastReply: '2023-11-08'
  }
];

const Forum = () => {
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const [threadData, setThreadData] = useState({
    title: '',
    subject: '',
    content: ''
  });

  const handleChange = (e) => {
    setThreadData({
      ...threadData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement thread creation logic
    console.log('New thread created:', threadData);
    setShowNewThreadForm(false);
    setThreadData({
      title: '',
      subject: '',
      content: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Discussion Forum</h1>
        <button 
          onClick={() => setShowNewThreadForm(!showNewThreadForm)}
          className="btn"
        >
          {showNewThreadForm ? 'Cancel' : 'New Thread'}
        </button>
      </div>

      {showNewThreadForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Thread</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1 font-medium">Title*</label>
              <input
                type="text"
                id="title"
                name="title"
                value={threadData.title}
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
                value={threadData.subject}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block mb-1 font-medium">Content*</label>
              <textarea
                id="content"
                name="content"
                value={threadData.content}
                onChange={handleChange}
                rows="5"
                className="w-full"
                required
              />
            </div>
            <button type="submit" className="btn">
              Post Thread
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold border-b">
          <div className="col-span-6">Thread</div>
          <div className="col-span-2">Subject</div>
          <div className="col-span-1 text-center">Replies</div>
          <div className="col-span-1 text-center">Views</div>
          <div className="col-span-2">Last Reply</div>
        </div>
        
        {mockThreads.map(thread => (
          <div key={thread.id} className="grid grid-cols-12 p-4 border-b hover:bg-gray-50">
            <div className="col-span-6">
              <a href="#" className="font-medium hover:text-primary">
                {thread.title}
              </a>
              <p className="text-sm text-gray-500">by {thread.author}</p>
            </div>
            <div className="col-span-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {thread.subject}
              </span>
            </div>
            <div className="col-span-1 text-center">
              {thread.replies}
            </div>
            <div className="col-span-1 text-center">
              {thread.views}
            </div>
            <div className="col-span-2 text-sm text-gray-500">
              {thread.lastReply}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;

import React, { useState } from 'react';

const PeerSupport = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Student A', content: 'Feeling overwhelmed with exams. Anyone else?', timestamp: '2 hours ago' },
    { id: 2, author: 'Student B', content: 'Hey, hang in there! Taking small breaks helps a lot.', timestamp: '1 hour ago' },
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() === '') return;
    const newPostData = {
      id: posts.length + 1,
      author: 'You (Anonymous)',
      content: newPost,
      timestamp: 'Just now',
    };
    setPosts(prev => [newPostData, ...prev]);
    setNewPost('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-4">Peer Support Forum</h3>
      <div className="flex-grow overflow-y-auto space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border-b pb-4">
            <p className="font-bold">{post.author} <span className="text-sm text-gray-500 font-normal"> - {post.timestamp}</span></p>
            <p className="mt-1">{post.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full border rounded-md p-2"
          rows="3"
          placeholder="Share your thoughts anonymously..."
        ></textarea>
        <button onClick={handlePost} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Post Anonymously</button>
      </div>
    </div>
  );
};

export default PeerSupport;
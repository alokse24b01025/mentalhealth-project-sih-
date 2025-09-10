import React, { useState } from 'react';

const PeerSupport = () => {
  const [posts, setPosts] = useState([
    { id: 2, author: 'Student B', content: 'Hey, hang in there! Taking small breaks and practicing mindfulness has really helped me. You\'re not alone in this.', timestamp: '1 hour ago' },
    { id: 1, author: 'Student A', content: 'Feeling really overwhelmed with final exams. Anyone else struggling to focus?', timestamp: '2 hours ago' },
  ]);
  const [newPost, setNewPost] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = () => {
    if (newPost.trim() === '') return;
    setIsPosting(true);

    setTimeout(() => {
      const newPostData = {
        id: Date.now(),
        author: 'You (Anonymous)',
        content: newPost,
        timestamp: 'Just now',
      };
      setPosts(prev => [newPostData, ...prev]);
      setNewPost('');
      setIsPosting(false);
    }, 700);
  };

  return (
    // This container is designed to be flexible and fill the space its parent gives it
    <div className="flex-1 flex flex-col bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 min-h-0">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-900">Peer Support Forum</h2>
        <p className="mt-1 text-gray-600">A safe space to share and connect with others. You are anonymous.</p>
      </div>

      <div className="mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white/80"
          rows="3"
          placeholder="Share your thoughts anonymously..."
        ></textarea>
        <button 
          onClick={handlePost} 
          disabled={isPosting}
          className={`w-full mt-2 py-3 px-4 font-semibold rounded-lg shadow-md transition-all duration-300 ${
            isPosting
              ? 'bg-green-300 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isPosting ? 'Posting...' : 'Post Anonymously'}
        </button>
      </div>

      {/* This posts feed is now the ONLY part that will scroll */}
      <div className="flex-grow overflow-y-auto space-y-4 pr-2">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm mr-3">
                {post.author.charAt(0)}
              </span>
              <div>
                <p className="font-bold text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerSupport;
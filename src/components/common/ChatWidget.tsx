import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'support'; time: string }[]>([
    {
      text: 'Hello! How can we help you today?',
      sender: 'support',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      text: message,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate reply after 1 second
    setTimeout(() => {
      const supportMessage = {
        text: "Thank you for your message! One of our customer service representatives will get back to you shortly.",
        sender: 'support' as const,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        className={`fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-xl w-full max-w-sm transition-all transform duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '400px' }}
      >
        {/* Header */}
        <div className="bg-blue-900 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            <h3 className="font-medium">Live Support</h3>
          </div>
          <button onClick={toggleChat} className="text-gray-100 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 overflow-y-auto" style={{ height: 'calc(400px - 130px)' }}>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-3 ${msg.sender === 'user' ? 'text-right' : ''}`}
            >
              <div 
                className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t p-3 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <button 
            type="submit"
            className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AIChat() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage = { 
      text: inputValue, 
      sender: 'user', 
      timestamp: new Date().toLocaleTimeString() 
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const botResponse = {
        text: `I received your message: "${inputValue}". This is a simulated AI response. In a real implementation, this would connect to an actual AI API.`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        text: 'Sorry, there was an error processing your request.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 border-b border-gray-700 px-6 py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-green-500">&lt;</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI Chat</span>
            <span className="text-green-400">&gt;</span>
          </h1>
          <a href="/" className="text-indigo-400 hover:text-indigo-300 transition">
            Back to Portfolio
          </a>
        </div>
      </motion.header>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-y-auto mb-4 bg-gray-800 rounded-lg p-4"
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <i className="fas fa-robot text-6xl mb-4"></i>
              <p className="text-xl">AI Chat Assistant</p>
              <p className="text-sm mt-2">Ask me anything about programming, AI, or projects!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <p className="text-sm mb-1">{message.text}</p>
                    <p className="text-xs text-gray-300 text-right">{message.timestamp}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition disabled:opacity-70 disabled:bg-indigo-600"
          >
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className="fas fa-paper-plane"></i>
            )}
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs text-gray-500 text-center mt-2"
        >
          Note: This is a simulated AI chat. In production, it would connect to real AI APIs.
        </motion.p>
      </div>
    </div>
  )
}
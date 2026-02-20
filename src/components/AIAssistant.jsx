import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { useChatStore } from '../store/chatStore'
import ReactMarkdown from 'react-markdown'
import toast from 'react-hot-toast'

export default function AIAssistant() {
  const { messages, isOpen, isTyping, addMessage, setTyping, toggleChat } = useChatStore()
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Mock AI responses - In production, this would connect to your backend
  const getAIResponse = async (userMessage) => {
    setTyping(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const lowerMessage = userMessage.toLowerCase()

    let response = ''

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      response = `I have extensive experience with:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n\n**Backend:** Node.js, Express, .NET Core, MongoDB, PostgreSQL\n\n**Tools:** Docker, Git, AWS, Redis\n\n**AI/ML:** LangChain, OpenAI API, TensorFlow\n\nIs there a specific technology you'd like to know more about?`
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('years')) {
      response = `I have **4+ years** of professional experience in full-stack development. I've worked on various projects ranging from e-commerce platforms to healthcare management systems, and I specialize in building scalable, modern web applications with AI integration.`
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      response = `I've built several impressive projects:\n\n🚀 **AI-Powered E-Commerce Platform** - React, Node.js, OpenAI\n\n💬 **Real-Time Collaboration Tool** - Socket.io, WebRTC\n\n🏥 **Healthcare Management System** - .NET Core, Azure\n\n🏠 **Smart Home Dashboard** - Next.js, MQTT, IoT\n\nWould you like to know more about any of these?`
    } else if (lowerMessage.includes('microservices') || lowerMessage.includes('architecture')) {
      response = `Yes! I have extensive experience with microservices architecture. I've designed and implemented distributed systems using:\n\n- Docker & Kubernetes for containerization\n- Message queues (RabbitMQ, Redis)\n- API Gateway patterns\n- Service discovery\n- Event-driven architecture\n\nI can help build scalable, maintainable microservices for your project.`
    } else if (lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('contact')) {
      response = `I'm currently **available** for new opportunities! 🎉\n\nYou can reach me through:\n\n📧 **Email:** az3269868@gmail.com\n📱 **Phone:** +92 312 0279996\n\nFeel free to scroll down to the contact section to send me a message, or let's schedule a call to discuss your project!`
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('gpt')) {
      response = `I'm passionate about AI integration! I specialize in:\n\n🤖 Building AI-powered features using **LangChain** and **OpenAI**\n\n📊 Implementing **RAG (Retrieval Augmented Generation)** systems\n\n💡 Creating intelligent chatbots and assistants\n\n🔍 Natural language processing and document analysis\n\nThis very assistant you're talking to demonstrates my AI integration capabilities!`
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = `Hello! 👋 I'm Hafiz Ali Zahoor's AI assistant. I can answer questions about:\n\n- Technical skills and experience\n- Project portfolio\n- Availability for work\n- Technology expertise\n\nWhat would you like to know?`
    } else {
      response = `That's an interesting question! While I can provide information about Hafiz Ali Zahoor's skills, experience, and projects, I'd recommend reaching out directly for detailed discussions.\n\nYou can ask me about:\n- Technical skills\n- Project experience\n- Availability\n- Specific technologies\n\nOr scroll down to the contact form to send a direct message! 📨`
    }

    setTyping(false)
    return response
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    addMessage(userMessage)
    setInput('')

    // Get AI response
    const aiResponse = await getAIResponse(input)

    const assistantMessage = {
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date(),
    }

    addMessage(assistantMessage)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Initial greeting when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = {
        role: 'assistant',
        content: `👋 Hi! I'm Hafiz Ali Zahoor's AI assistant. I can help you learn about his skills, experience, and projects. What would you like to know?`,
        timestamp: new Date(),
      }
      addMessage(greeting)
    }
  }, [isOpen, messages.length, addMessage])

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-2xl hover:shadow-accent-500/50 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-24 right-8 z-40 w-[400px] h-[600px] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me anything about Hafiz Ali Zahoor</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                        : 'bg-slate-800/50 text-slate-200'
                    }`}
                  >
                    <ReactMarkdown className="text-sm prose prose-invert prose-sm max-w-none">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/50 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

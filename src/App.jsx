import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = input.toLowerCase();
      let botResponse = "I'm not sure I understood that. Could you rephrase or ask something about selling software licenses?";

      // Dynamic responses based on keywords
      if (userMessage.includes("sell") || userMessage.includes("license") || userMessage.includes("software")) {
        botResponse = "To sell your software license, simply upload your license details on our platform, get an instant valuation, and receive payment quickly. Would you like to start the process now?";
      } else if (userMessage.includes("valuation") || userMessage.includes("quote") || userMessage.includes("price") || userMessage.includes("worth") || userMessage.includes("value")) {
        botResponse = "We provide instant valuations for your software licenses based on market data. Just upload your license details, and you'll get a fair quote. Need help uploading?";
      } else if (userMessage.includes("payment") || userMessage.includes("paid") || userMessage.includes("money") || userMessage.includes("cash") || userMessage.includes("transfer")) {
        botResponse = "Once you accept the valuation, payment is processed within 24 hours via secure methods. Do you have a license ready to sell?";
      } else if (userMessage.includes("help") || userMessage.includes("support") || userMessage.includes("how") || userMessage.includes("assist") || userMessage.includes("question")) {
        botResponse = "I'm here to help! You can upload your license, get a valuation, or contact us for support. What specific assistance do you need with selling your license?";
      } else if (userMessage.includes("contact") || userMessage.includes("reach") || userMessage.includes("email") || userMessage.includes("phone") || userMessage.includes("form")) {
        botResponse = "You can reach us via the Contact Us form on our website. Fill in your details, and we'll get back to you soon. Want to try the form now?";
      } else if (userMessage.includes("hi") || userMessage.includes("hello") || userMessage.includes("hey") || userMessage.includes("greetings")) {
        botResponse = "Hello! Welcome to SoftSell. How can I assist you with selling your unused software licenses today?";
      } else if (userMessage.includes("thanks") || userMessage.includes("thank") || userMessage.includes("appreciate")) {
        botResponse = "You're welcome! If you have any more questions about selling licenses, I'm here to help.";
      }

      setMessages([...messages, { user: input, bot: botResponse }]);
      setInput('');
    }
  };
  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <Helmet>
        <title>SoftSell - Sell Unused Software Licenses</title>
        <meta name="description" content="Sell your unused software licenses easily with SoftSell. Get instant valuations and fast payouts." />
        <meta name="keywords" content="software licenses, sell licenses, SoftSell, software resale" />
      </Helmet>
      {/* Hero Section */}
      <header className="w-screen bg-blue-600 text-white py-12 flex flex-col items-center relative">
        <div className="absolute top-4 right-4">
          <DarkModeSwitch
            checked={darkMode}
            onChange={setDarkMode}
            size={32}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          SoftSell
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Easily Sell Your Software Licenses
        </motion.h1>

        <p className="text-lg mb-6 text-center">Get instant valuations and fast payouts for your unused or surplus software licenses with SoftSell.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold shadow hover:bg-blue-50 transition">Get a Quote</button>
      </header>


      {/* How It Works */}
      <section className="w-screen py-12 bg-white dark:bg-gray-800 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center w-full text-black dark:text-white">How It Works</h2>
        <div className="w-screen flex flex-col md:flex-row gap-8 px-8">
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-4xl mb-2 hover:scale-110 hover:rotate-12 hover:text-blue-600 transition-transform duration-300 cursor-pointer">📤</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">1. Upload License</h3>
            <p className="text-gray-700 dark:text-gray-300">Submit your unused license details securely.</p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-4xl mb-2 hover:scale-110 hover:rotate-12 hover:text-blue-600 transition-transform duration-300 cursor-pointer">💰</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">2. Get Valuation</h3>
            <p className="text-gray-700 dark:text-gray-300">Receive an instant, fair market quote.</p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-4xl mb-2 hover:scale-110 hover:rotate-12 hover:text-blue-600 transition-transform duration-300 cursor-pointer">⚡</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">3. Get Paid</h3>
            <p className="text-gray-700 dark:text-gray-300">Accept the offer and get paid quickly.</p>
          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="w-screen py-12 bg-gray-100 flex flex-col items-center dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center w-full text-black dark:text-white">Why Choose Us</h2>
        <div className="w-screen flex flex-col md:flex-row gap-8 px-8">
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-3xl mb-2 hover:scale-110 hover:rotate-12 hover:text-green-600 transition-transform duration-300 cursor-pointer">⏱️</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">Fast Payments</h3>
            <p className="text-gray-700 dark:text-gray-300">Get paid within 24 hours of acceptance.</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-3xl mb-2 hover:scale-110 hover:rotate-12 hover:text-green-600 transition-transform duration-300 cursor-pointer">🔒</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">Secure Process</h3>
            <p className="text-gray-700 dark:text-gray-300">Your data and transactions are always safe.</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <div className="text-3xl mb-2 hover:scale-110 hover:rotate-12 hover:text-green-600 transition-transform duration-300 cursor-pointer">💬</div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-100">Expert Support</h3>
            <p className="text-gray-700 dark:text-gray-300">Our team is here to help you at every step.</p>
          </div>
        </div>

      </section>

      {/* Testimonials */}
      <section className="w-screen py-12 bg-white flex flex-col items-center dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center w-full text-black dark:text-white">Customer Testimonials</h2>
        <div className="w-screen flex flex-col md:flex-row gap-8 px-8">
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <p className="mb-2 text-gray-800 dark:text-gray-200">"SoftSell made it so easy to sell our unused licenses. Fast and reliable!"</p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">- John Doe, IT Manager, TechCorp</span>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow shadow-gray-200 dark:shadow-gray-700 w-full">
            <p className="mb-2 text-gray-800 dark:text-gray-200">"Great service and support. Highly recommended for any business."</p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">- Jane Smith, Operations, FinServe</span>
          </div>
        </div>

      </section>

      {/* Contact Form */}
      <section className="w-screen py-12 bg-gray-100 flex flex-col items-center dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center w-full text-black dark:text-white">Contact Us</h2>
        <form className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow shadow-gray-200 dark:shadow-gray-700 w-full flex flex-col gap-4 px-8 md:w-2/3">
          <input
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            type="text"
            placeholder="Company"
            required
          />
          <select
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            required
          >
            <option value="">Select License Type</option>
            <option value="windows">Windows</option>
            <option value="office">Office</option>
            <option value="adobe">Adobe</option>
          </select>
          <textarea
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition h-24 resize-y"
            placeholder="Message"
            required
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
            type="submit"
          >
            Send
          </button>
        </form>

        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
          {/* Cloud Prompt - Shows only when chat is closed */}
          {!chatOpen && (
            <div className="relative mb-2 flex flex-col items-center">
              <div className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-lg text-sm font-medium animate-bounce pointer-events-none select-none">
                Ask me anything!
              </div>
              <div className="w-3 h-3 bg-white dark:bg-gray-800 rotate-45 -mt-1"></div>
            </div>
          )}
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <span>💬 Chat</span>
          </button>
          {chatOpen && (
            <div className="bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-2xl p-4 mt-2 flex flex-col absolute bottom-10 right-0 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">SoftSell Assistant</h3>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto mb-3 p-2 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700">
                {messages.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Ask me anything about selling software licenses!</p>
                ) : (
                  messages.map((msg, index) => (
                    <div key={index} className="mb-3">
                      <p className="text-black dark:text-white text-sm bg-blue-100 dark:bg-blue-900 rounded-lg p-2 inline-block max-w-[80%]">
                        <strong>You:</strong> {msg.user}
                      </p>
                      <p className="text-black dark:text-white text-sm bg-gray-200 dark:bg-gray-700 rounded-lg p-2 inline-block max-w-[80%] mt-1">
                        <strong>Bot:</strong> {msg.bot}
                      </p>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border rounded-md px-3 py-2 text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Ask a question..."
                />
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
                  ➤
                </button>
              </form>
            </div>
          )}
        </div>


      </section>
      <Analytics />
    </div>
  );
}

export default App;

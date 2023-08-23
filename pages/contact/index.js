
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message
    };

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    try {
      const TELEGRAM_BOT_API_KEY = '6161906218:AAEWBQBQYKbmKlkfNvGJgMmRvKCGsD2L45E';
      const CHAT_ID = '-1001801524585';
      const messageText = JSON.stringify(formData);

      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_API_KEY}/sendMessage`, {
        chat_id: CHAT_ID,
        text: messageText
      });

      console.log('Form data sent to Telegram:', response.data);
    } catch (error) {
      console.error('Error sending form data to Telegram:', error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center mb-12">
            Let`s <span className="text-accent">connect.</span></motion.h2>
         {/* from */}
         <motion.form id="tg"
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
         className="flex-1 flex flex-col gap-6 w-full mx-auto" onSubmit={handleSubmit}>
           <div className="flex gap-x-6 w-full">
            <input  type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} className="input" /> 
             <input  type="text"
          placeholder="Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)} className="input" /> 
           </div>
           <input type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className="input" />
          <div>
           <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} className="textarea"> </textarea></div>
          <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group:">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Lets tolk
              </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
         </motion.form>
        </div> 
      </div>
    
   
    </div> 
    
  );
}

export default ContactForm;


 
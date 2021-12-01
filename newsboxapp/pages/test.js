import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Bob =
  "https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const John =
  "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const Jane =
  "https://images.pexels.com/photos/53453/marilyn-monroe-woman-actress-pretty-53453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const Grace =
  "https://images.pexels.com/photos/60712/fashion-girl-sexy-women-60712.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

const MESSAGES = [
  { id: 0, avatar: Bob, author: "Bob", message: "dolor sit amet, consect" },
  {
    id: 1,
    avatar: John,
    author: "John",
    message: "sed do eiusmod tempor incididunt "
  },
  {
    id: 2,
    avatar: Jane,
    author: "Jane",
    message: "Excepteur sint occaecat cupidatat"
  },
  {
    id: 3,
    avatar: Grace,
    author: "Grace",
    message: "cillum dolore eu fugiat nu"
  }
]

const DELETE_BTN_WIDTH = 70

const MESSAGE_DELETE_ANIMATION = { height: 0, opacity: 0 }
const MESSAGE_DELETE_TRANSITION = {
  opacity: {
    transition: {
      duration: 0
    }
  }
}

const Test = () => {
  const [messagesList, setMessagesList] = useState(MESSAGES)

  const handleDragEnd = (info, messageId) => {
    const dragDistance = info.point.x
    if (dragDistance < -DELETE_BTN_WIDTH) {
      setMessagesList(messagesList.filter(message => message.id !== messageId))
    }
  }

  return (
    <main className="">
      <header>
        <h1>Messages</h1>
      </header>
      <input type="text" placeholder="🔍 Search" />
      <ul className='mt-3'>
        <AnimatePresence>
          {messagesList.map(message => (
            <motion.li
            className='relative'
              key={message.id}
              exit={MESSAGE_DELETE_ANIMATION}
              transition={MESSAGE_DELETE_TRANSITION}
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => handleDragEnd(info, message.id)}
                className="relative z-20 flex items-center bg-red-700"
              >
                <img
                  className="user-icon"
                  src={message.avatar}
                  alt="User icon"
                  height='100px'
                  width='100px'
                />
                <div className="message-text">
                  <h3>{message.author}</h3>
                  <p>{message.message}</p>
                </div>
              </motion.div>
              <div className="z-10 top-1/2 right-0 absolute h-[calc(100%-2px)] w-1/2 bg-green-400 flex justify-center items-center -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>

              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </main>
  )
}

export default Test

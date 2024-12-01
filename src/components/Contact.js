import React from 'react'

function Contact() {
  return (
    <section className="p-10">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <form className="flex flex-col mt-4">
            <input type="text" className="border p-2 mb-4" placeholder="Your Name" />
            <input type="email" className="border p-2 mb-4" placeholder="Your Email" />
            <textarea className="border p-2 mb-4" placeholder="Your Message"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
        </form>
    </section>
  )
}

export default Contact
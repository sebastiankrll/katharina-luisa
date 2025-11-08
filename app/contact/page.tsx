'use client'

import InstagramIcon from "@/components/icons/Instagram";
import { useState } from "react";
import "./contact.css"

export default function Page() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('Sending...')

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })

        if (res.ok) {
            setStatus('Message sent!')
            setForm({ name: '', email: '', message: '' })
        } else {
            setStatus('Failed to send message. Try again.')
        }
    }

    return (
        <div className='page' id="contact">
            <a
                href="https://www.instagram.com/katharinalsk/"
                target="_blank"
            >
                <InstagramIcon />
            </a>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        rows={4}
                    />
                </label>
                <button type="submit">Send</button>
            </form>
            {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
    )
}
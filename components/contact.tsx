'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { socials } from '@/config/socials'
import { contacts } from '@/config/contacts'

/**
 * Render a contact section with contact info cards, a client-managed contact form, and social links.
 *
 * The form manages name, email, subject, and message locally, shows a loading state while submitting,
 * displays a temporary success banner after submission, and resets the form fields.
 *
 * @returns The contact section as a JSX element
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-50 mb-4">
            let&apos;s Connect
          </h2>
          <p className="text-lg text-amber-900/70 dark:text-amber-100/70">
            Have a question, commission inquiry, or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contacts.map((item, i) => (
            <Card
              key={i}
              role="button"
              tabIndex={0}
              className='hover:cursor-pointer group'
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-amber-900 dark:text-amber-50 mb-1">{item.title}</h3>
                {item.href && item.href !== '#' ? (
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-amber-900/70 dark:text-amber-100/70 hover:underline"
                  >
                    {item.content}
                  </a>
                  ) : (
                    <p className="text-amber-900/70 dark:text-amber-100/70">{item.content}</p>
                  )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800"
              >                <p className="text-green-900 dark:text-green-100 font-semibold">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-amber-900/70 dark:text-amber-100/70 mb-4">
            Stay connected on social media
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className="px-4 py-2 rounded-lg border border-amber-300 text-amber-900 hover:bg-amber-50 transition-colors dark:border-amber-600 dark:text-amber-100 dark:hover:bg-amber-900/20 font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

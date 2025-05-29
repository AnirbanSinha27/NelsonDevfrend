'use client'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Button } from '../../components/ui/button'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the data to your backend
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-sm"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <Input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
            Subject
          </label>
          <Input
            id="subject"
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className="w-full"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="bg-amber-500 hover:bg-amber-600 mt-4">
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}
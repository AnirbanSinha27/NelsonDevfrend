'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, User } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'

const classes = [
  { 
    name: "Private Sessions", 
    time: "Flexible Hours", 
    day: "Tuesday", 
    instructor: "Personal Trainer", 
    level: "All Levels",
    description: "We'll create a plan for your unique objectives.",
    image: "/images/schedule-private.png"
  },
  { 
    name: "Evening Flow", 
    time: "7:30 PM - 8:45 PM", 
    day: "Wednesday", 
    instructor: "Emma", 
    level: "All Levels",
    description: "Farnsworth Park, Upper Davies Building",
    image: "/images/schedule-group.png"
  },
  { 
    name: "Power Yoga", 
    time: "6:00 PM - 7:15 PM", 
    day: "Thursday", 
    instructor: "David", 
    level: "Intermediate",
    description: "The Awareness Center, Pasadena",
    image: "/images/schedule-group1.png"
  },
  { 
    name: "Breakfast Club", 
    time: "9:00 AM - 10:15 AM", 
    day: "Friday", 
    instructor: "Sophia", 
    level: "All Levels",
    description: "The Awareness Center, Pasadena",
    image: "/images/schedule-breakfast.png"
  },
  { 
    name: "Weekend Session", 
    time: "9:00 AM - 10:00 AM", 
    day: "Saturday", 
    instructor: "Priya", 
    level: "All Levels",
    description: "YMCA, San Gabriel Valley",
    image: "/images/schedule-weekend.png"
  }
]

export default function ClassSchedule() {
  return (
    <section id="schedule" className="scroll-mt-20 container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Current Class Schedule
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Join us for transformative yoga experiences.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* First Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {classes.slice(0, 3).map((cls, index) => (
            <ClassCard key={index} cls={cls} index={index} />
          ))}
        </div>

        {/* Second Row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
          {classes.slice(3).map((cls, index) => (
            <ClassCard key={index + 3} cls={cls} index={index + 3} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
            Contact for Private Sessions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ClassCard({ cls, index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col"
    >
      {/* Centered small image */}
      <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-amber-100">
        <Image
          src={cls.image}
          alt={cls.name}
          fill
          className="object-cover"
          sizes="100px"
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">{cls.name}</h3>
      
      {/* Description */}
      <p className="text-slate-600 text-center mb-4 text-sm">{cls.description}</p>

      <div className="flex items-center gap-2 text-slate-600 mb-1">
        <Clock className="w-4 h-4" />
        <span>{cls.time}</span>
      </div>
      <div className="flex items-center gap-2 text-slate-600 mb-1">
        <Calendar className="w-4 h-4" />
        <span>{cls.day}</span>
      </div>
      <div className="flex items-center gap-2 text-slate-600 mb-4">
        <User className="w-4 h-4" />
        <span>{cls.instructor} • {cls.level}</span>
      </div>

      <Button className="w-full bg-amber-500 hover:bg-amber-600 mt-auto">
        Book Now
      </Button>
    </motion.div>
  )
}
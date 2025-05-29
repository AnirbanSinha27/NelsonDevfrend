import Hero from '@/app/components/Hero'
import Features from '@/app/components/Features'
import Testimonials from '@/app/components/Testimonials'
import ClassSchedule from './components/ClassSchedule'
import About from './components/About'
import Schedule from './components/Schedule'
import YogaWisdom from './components/Wisdom'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section id="home" className="scroll-mt-20">
      <Hero /> </section>
      <YogaWisdom/>
      <About/>
      <ClassSchedule/>
      <Schedule/>
      <Features />
      <Testimonials />
      <Contact/>
    </div>
  )
}
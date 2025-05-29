'use client'
import { Button } from '@/components/ui/button'

export default function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Please join me for Yoga Online!</h1>
          <p className="text-lg text-slate-600 mb-8">
            I currently offer 3 different classes each week. I hope one of these days is right for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Wednesday Class */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Wednesday 4:30-5:45pm</h2>
            <p className="text-slate-600 mb-4">
              Please contact me for information on joining. This class is offered by invitation.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600">
              Contact for Details
            </Button>
          </div>

          {/* Friday Class */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Friday 9:00-10:15am</h2>
            <p className="text-slate-600 mb-4">
              Offered through The Awareness Center.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600">
              Register at Awareness Center
            </Button>
          </div>

          {/* Sunday Class */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Sunday 10:00-11:15am <span className="text-amber-500">NEW CLASS!</span></h2>
            <p className="text-slate-600 mb-4">
              Please contact me for the link to this class.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600">
              Get Zoom Link
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
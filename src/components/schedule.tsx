"use client";

import { motion } from "motion/react";

const days = [
  {
    date: "April 17",
    label: "Thursday Evening",
    title: "The Introduction",
    items: [
      { time: "18:00", event: "Doors open & networking" },
      { time: "18:30", event: "Welcome & hackathon overview" },
      { time: "19:00", event: "Non-profits pitch their challenges" },
      { time: "20:00", event: "Team formation & planning" },
      { time: "21:00", event: "Closing & social" },
    ],
  },
  {
    date: "April 18",
    label: "Friday Full Day",
    title: "The Build Day",
    items: [
      { time: "09:00", event: "Doors open & breakfast" },
      { time: "09:30", event: "Kick-off & hacking begins" },
      { time: "13:00", event: "Lunch & mentor check-ins" },
      { time: "16:00", event: "Final sprint & polish" },
      { time: "17:30", event: "Demos & presentations" },
      { time: "19:00", event: "Awards & celebration" },
    ],
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Schedule
          </p>
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight">
            Two days, one mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: dayIndex * 0.15 }}
              className="bg-background border border-border rounded-2xl p-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h3 className="font-pixel text-3xl">{day.date}</h3>
                  <p className="text-sm text-foreground-muted mt-1">
                    {day.label}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-medium">
                  {day.title}
                </span>
              </div>

              <div className="space-y-0 divide-y divide-border">
                {day.items.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-baseline gap-4 py-3.5"
                  >
                    <span className="text-sm font-mono text-foreground-muted w-14 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-sm">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

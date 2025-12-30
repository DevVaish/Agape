import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";

import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.png";

const events = [
  { date: "24 Jan, 2026", title: '"Meet Your Care Team" Open House', image: event1, slug: "meet-your-care-team-open-house" },
  { date: "27 Feb, 2026", title: "Heart Health Check-Up Day", image: event2, slug: "heart-health-check-up-day" },
  { date: "10 Mar, 2026", title: "Temperature Logistics In Europe", image: event3, slug: "temperature-logistics-in-europe" },
];

const Events = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="section-title">Upcoming Health & Wellness Events</h1>
            <p className="section-subtitle mt-4">
              Join us for educational events, health screenings, and community gatherings designed to support your wellness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <EventCard
                key={event.slug}
                date={event.date}
                title={event.title}
                image={event.image}
                slug={event.slug}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

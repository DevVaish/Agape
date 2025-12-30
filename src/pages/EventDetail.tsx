import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.png";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import speaker5 from "@/assets/speaker-5.jpg";

const eventsData: Record<string, {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  highlights: string;
}> = {
  "meet-your-care-team-open-house": {
    title: '"Meet Your Care Team" Open House',
    date: "24 Jan, 2026",
    time: "8:00 AM",
    location: "Hyatt Hotel, London",
    image: event1,
    description: 'Join us for our upcoming "Meet Your Care Team" Open House, where you\'ll have the chance to get to know the doctors, nurses, and specialists who look after our patients every day.',
    highlights: "During this informal event, you can tour the clinic, ask questions about our services, and learn more about how we work together as a coordinated team to provide safe, compassionate care.",
  },
  "heart-health-check-up-day": {
    title: "Heart Health Check-Up Day",
    date: "27 Feb, 2026",
    time: "9:00 AM",
    location: "Agape Medical Center, London",
    image: event2,
    description: "Join us for a comprehensive heart health screening day. Our cardiology team will be offering free blood pressure checks, cholesterol screenings, and heart health consultations.",
    highlights: "Learn about heart-healthy lifestyle choices, meet our cardiology specialists, and get personalized recommendations for maintaining optimal cardiovascular health.",
  },
  "temperature-logistics-in-europe": {
    title: "Temperature Logistics In Europe",
    date: "10 Mar, 2026",
    time: "10:00 AM",
    location: "Virtual Event",
    image: event3,
    description: "An insightful conference on the latest developments in temperature-controlled logistics for pharmaceuticals and healthcare products across Europe.",
    highlights: "Industry experts will discuss best practices, regulatory updates, and innovative solutions for maintaining product integrity throughout the cold chain.",
  },
};

const speakers = [
  { name: "Dr. Emily Carter", specialty: "AI and Healthcare Technology", image: speaker1 },
  { name: "Dr. Michael Chen", specialty: "AI and Healthcare Technology", image: speaker2 },
  { name: "Dr. Sarah Johnson", specialty: "AI and Healthcare Technology", image: speaker3 },
  { name: "Dr. James Wilson", specialty: "AI and Healthcare Technology", image: speaker4 },
  { name: "Dr. Lisa Brown", specialty: "AI and Healthcare Technology", image: speaker5 },
];

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventsData[slug] : null;

  if (!event) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
            <Button variant="hero" asChild>
              <a href="/events">View All Events</a>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-agape pt-8 pb-4"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            {event.title}
          </h1>
        </motion.div>

        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9]"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-8 items-end justify-between">
                <div className="flex flex-wrap gap-8 text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="font-bold">{event.date}</p>
                      <p className="text-sm opacity-80">Date of Reservation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="font-bold">{event.time}</p>
                      <p className="text-sm opacity-80">Start Time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="font-bold">{event.location}</p>
                      <p className="text-sm opacity-80">Event Location</p>
                    </div>
                  </div>
                </div>
                <Button variant="hero" size="lg" asChild>
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                    Secure a Spot
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Speakers</h2>
            <p className="section-subtitle mt-4">
              Explore diverse perspectives, groundbreaking ideas, and transformative stories that will shape the future of healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {speakers.map((speaker, idx) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">{speaker.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-secondary/30">
        <div className="container-agape max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Description
            </h3>
            <p className="text-lg text-foreground mb-8">{event.description}</p>

            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Event Highlights
            </h3>
            <p className="text-lg text-foreground">{event.highlights}</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;

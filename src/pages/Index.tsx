import { motion } from "framer-motion";
import { ArrowRight, Heart, Stethoscope, Dna, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import SectionBadge from "@/components/SectionBadge";
import StatCard from "@/components/StatCard";
import TeamCard from "@/components/TeamCard";
import EventCard from "@/components/EventCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import teamClaire from "@/assets/team-claire.jpg";
import teamWill from "@/assets/team-will.jpg";
import teamEileen from "@/assets/team-eileen.jpg";
import teamVivek from "@/assets/team-vivek.jpg";
import teamTanya from "@/assets/team-tanya.jpg";
import scientistRoger from "@/assets/scientist-roger.png";
import scientistAlex from "@/assets/scientist-alex.png";
import healthImage from "@/assets/health-image.jpg";
import careImage from "@/assets/care-image.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.png";
import servicePulmonology from "@/assets/service-pulmonology.png";
import serviceMuscle from "@/assets/service-muscle.png";
import serviceVascular from "@/assets/service-vascular.png";
import servicePulmonologyBg from "@/assets/service-pulmonology-bg.jpg";
import serviceMuscleBg from "@/assets/service-muscle-bg.jpg";
import serviceVascularBg from "@/assets/service-vascular-bg.jpg";

const teamMembers = [
  { name: "Claire Hughes Johnson", role: "Director of Geriatric Care", image: teamClaire },
  { name: "Will Gaybrick", role: "Director of Geriatric Care", image: teamWill },
  { name: "Eileen O'Mara", role: "Director of Geriatric Care", image: teamEileen },
  { name: "Vivek Sharma", role: "Director of Geriatric Care", image: teamVivek },
  { name: "Tanya Khakbaz", role: "Director of Geriatric Care", image: teamTanya },
];

const events = [
  { date: "24 Jan, 2026", title: '"Meet Your Care Team" Open House', image: event1, slug: "meet-your-care-team-open-house" },
  { date: "27 Feb, 2026", title: "Heart Health Check-Up Day", image: event2, slug: "heart-health-check-up-day" },
  { date: "10 Mar, 2026", title: "Temperature Logistics In Europe", image: event3, slug: "temperature-logistics-in-europe" },
];

const services = [
  {
    icon: servicePulmonology,
    title: "Pulmonology Care",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    image: servicePulmonologyBg,
  },
  {
    icon: serviceMuscle,
    title: "Muscle Recovery",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    image: serviceMuscleBg,
  },
  {
    icon: serviceVascular,
    title: "Vascular Health",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    image: serviceVascularBg,
  },
];

const featureItems = [
  { icon: Heart, title: "Vascular Heart", description: "Our visual emphasis on heart wellness extends beyond the surface." },
  { icon: Stethoscope, title: "Pulmonology Care", description: "We stabilize patients with pulmonary conditions impacting breathing." },
  { icon: Leaf, title: "Wellness support", description: "Experience care that goes beyond the superficial, with clear and concise text." },
  { icon: Dna, title: "DNA Testing", description: "We offer empowering guidance for the longevity of your DNA random." },
];

const ageGroups = ["Babies", "Children", "Teens", "Adults", "Retiree"];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <div className="container-agape py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <SectionBadge text="Healthcare Industry" />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fostering Health, Providing Attention to You
              </h1>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                    Set a Meeting
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="bg-card rounded-3xl p-6 shadow-card">
                  <p className="text-muted-foreground mb-6">
                    Explore our array of services designed to meet your unique health needs, and embark on a journey towards a healthier, happier life.
                  </p>
                  <div className="flex gap-4 mb-6">
                    <img src={doctor1} alt="Doctor" className="w-24 h-36 rounded-2xl object-cover" />
                    <img src={doctor2} alt="Doctor" className="w-24 h-36 rounded-2xl object-cover" />
                    <img src={doctor3} alt="Doctor" className="w-24 h-36 rounded-2xl object-cover" />
                  </div>
                  <StatCard 
                    value="65,248" 
                    label="Happy Customers" 
                    avatars={[doctor1, doctor2, doctor3]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container-agape">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">They Care About Your Health</h2>
            <p className="section-subtitle mt-4">
              Each team member contributes a unique set of skills and passion, united by a shared commitment to delivering exceptional healthcare experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Helping Humanity Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-agape">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Helping Humanity</h2>
              <div className="flex flex-wrap gap-3 mt-6">
                {ageGroups.map((group) => (
                  <span
                    key={group}
                    className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  >
                    {group}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                At Agape, we are architects of well-being, passionately dedicated to crafting an extraordinary healthcare experience.
              </p>
              <Button variant="hero" size="lg" className="mt-6" asChild>
                <a href="#services">
                  Explore More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-3xl p-6 shadow-card">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Key Scientists</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={scientistRoger} alt="Dr. Roger Lubin" className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <p className="font-semibold text-foreground">Dr. Roger Lubin</p>
                      <p className="text-sm text-muted-foreground">Neonatal Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={scientistAlex} alt="Dr. Alexander Rodriguez" className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <p className="font-semibold text-foreground">Dr. Alexander Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Pediatric Geneticist</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streamline Section */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={healthImage} alt="Healthcare" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Streamline, Prioritize, and Elevate Your Health
              </h2>
              <p className="mt-4 text-muted-foreground">
                Efficient solutions tailored for your well-being at Agape clinic, where the art of optimization meets your health.
              </p>
              <div className="mt-6 space-y-3">
                {["Virtual Health Hub", "Wellness Checkpoint Program", "Telehealth Concierge"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get More Care Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-agape">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get More Care, for More People
              </h2>
              <p className="mt-4 text-muted-foreground">
                We provide personalized healthcare solutions, ensuring a foundation of health and happiness for all.
              </p>
              <Button variant="hero" size="lg" className="mt-6" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={careImage} alt="Healthcare" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-primary">26%</p>
                <p className="text-sm text-muted-foreground">Growth Milestones Reached</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Upcoming Health & Wellness Events</h2>
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

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Your Partner in Health and Wellness</h2>
            <p className="section-subtitle mt-4">
              We believe in providing comprehensive healthcare for every stage of life. Our dedicated team of specialists offers a wide range of services designed to address your unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import aboutHero from "@/assets/about-hero.png";
import aboutVision from "@/assets/about-vision.png";
import aboutWellness from "@/assets/about-wellness.jpg";
import aboutBabies from "@/assets/about-babies.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import teamClaire from "@/assets/team-claire.jpg";
import teamWill from "@/assets/team-will.jpg";
import teamEileen from "@/assets/team-eileen.jpg";
import teamVivek from "@/assets/team-vivek.jpg";
import teamTanya from "@/assets/team-tanya.jpg";

const teamMembers = [
  { name: "Claire Hughes Johnson", role: "Director of Geriatric Care", image: teamClaire },
  { name: "Will Gaybrick", role: "Director of Geriatric Care", image: teamWill },
  { name: "Eileen O'Mara", role: "Director of Geriatric Care", image: teamEileen },
  { name: "Vivek Sharma", role: "Director of Geriatric Care", image: teamVivek },
  { name: "Tanya Khakbaz", role: "Director of Geriatric Care", image: teamTanya },
];

const faqs = [
  {
    question: "How can I schedule an appointment at Agape?",
    answer: "Booking an appointment is easy! You can schedule it online through our website, call our dedicated appointment line, or use our user-friendly mobile app.",
  },
  {
    question: "What services does Agape offer for families?",
    answer: "We offer comprehensive family healthcare including pediatric care, geriatric services, preventive health screenings, vaccination programs, and specialized care for all age groups.",
  },
  {
    question: "Is my health information secure?",
    answer: "Absolutely. We employ state-of-the-art security measures and comply with all healthcare privacy regulations to ensure your health information remains confidential and protected.",
  },
  {
    question: "How does Agape's Virtual Health Hub work?",
    answer: "Our Virtual Health Hub allows you to consult with healthcare professionals from the comfort of your home through secure video calls, chat support, and remote monitoring capabilities.",
  },
];

const supportTabs = ["Services", "Appointment", "Technology", "Virtual Health"];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-secondary/30 to-background overflow-hidden">
        <div className="container-agape py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                A New Generation in Health Innovation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Join us on this transforming journey as a new era of healthcare develops and your family's happiness becomes our top concern.
              </p>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  Set a Meeting
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={aboutHero}
                alt="Healthcare team"
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Guiding Principles at Agape</h2>
            <p className="section-subtitle mt-4">
              Nurturing health, upholding ethics, and shaping a future of holistic wellness.
            </p>
          </motion.div>

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vision for Healthier Futures
              </h3>
              <p className="text-muted-foreground mb-6">
                At Agape, we envision a future where health is synonymous with vitality, inspiring individuals and families to lead active, fulfilling lives. We strive to pioneer transformative healthcare practices, fostering a thriving community for all.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutVision}
                alt="Vision"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-sm text-muted-foreground mb-2">Heart Rate</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ethical Healthcare */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex gap-4">
                <img src={doctor1} alt="Doctor" className="w-28 h-40 rounded-2xl object-cover" />
                <img src={doctor2} alt="Doctor" className="w-28 h-40 rounded-2xl object-cover" />
                <img src={doctor3} alt="Doctor" className="w-28 h-40 rounded-2xl object-cover" />
              </div>
              <div className="mt-6">
                <StatCard
                  value="65,248"
                  label="Happy Customers"
                  avatars={[doctor1, doctor2, doctor3]}
                />
              </div>
              <Button variant="hero" size="lg" className="mt-6" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ethical Healthcare Excellence
              </h3>
              <p className="text-muted-foreground">
                We pledge to uphold the highest standards of professionalism, ensuring that every decision made, and every action taken, prioritizes the well-being and trust of our patients and their families.
              </p>
            </motion.div>
          </div>

          {/* Holistic Wellness */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Holistic Wellness Values
              </h3>
              <p className="text-muted-foreground mb-6">
                Rooted in compassion, Agape's moral compass guides us towards holistic wellness. We strive to create an environment where empathy and understanding flourish, nurturing not just physical health but also mental and emotional well-being.
              </p>
              <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Blood Pressure</p>
                    <p className="text-xl font-bold text-foreground">125/89 mm Hg</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pulse</p>
                    <p className="text-xl font-bold text-foreground">92 beats/min</p>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutWellness}
                alt="Wellness"
                className="w-full h-auto rounded-3xl object-cover aspect-[3/4]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/30">
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

      {/* Agape for Babies Section */}
      <section className="section-padding bg-background">
        <div className="container-agape">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-video"
            >
              <img src={aboutBabies} alt="Baby care" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Agape for Babies
              </h2>
              <p className="text-muted-foreground mb-6">
                Creating a foundation of wellness and joy for your loved ones.
              </p>
              <p className="text-muted-foreground mb-6">
                Expert-led monitoring of key milestones, ensuring a strong foundation for your baby's growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Customized immunization plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Supportive resources and guidance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need Support Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-agape">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="section-title">Need Support?</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {supportTabs.map((tab) => (
              <button
                key={tab}
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-background">
        <div className="container-agape max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-4">
              Got a question? We're ready to answer! If you don't see your question listed here, please book an appointment.
            </p>
            <Button variant="hero" size="lg" className="mt-6" asChild>
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                Set a Meeting
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default About;

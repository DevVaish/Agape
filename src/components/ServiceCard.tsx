import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-3xl overflow-hidden bg-card shadow-card card-hover"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover image-hover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>
      <div className="relative p-6">
        <div className="absolute -top-8 left-6 w-16 h-16 rounded-2xl bg-background shadow-lg flex items-center justify-center">
          <img src={icon} alt="" className="w-10 h-10 object-contain" />
        </div>
        <div className="pt-8">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          <Button variant="hero" size="sm" asChild>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EventCardProps {
  date: string;
  title: string;
  image: string;
  slug: string;
  delay?: number;
}

const EventCard = ({ date, title, image, slug, delay = 0 }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={`/event/${slug}`} className="group block">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-muted-foreground text-sm mb-2">{date}</p>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
};

export default EventCard;

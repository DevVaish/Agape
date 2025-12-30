import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamCard = ({ name, role, image, delay = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-1">
            {role}
          </p>
          <h3 className="text-primary-foreground text-xl font-bold">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;

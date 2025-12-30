import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  avatars?: string[];
}

const StatCard = ({ value, label, avatars }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      {avatars && avatars.length > 0 && (
        <div className="flex -space-x-3">
          {avatars.slice(0, 3).map((avatar, idx) => (
            <img
              key={idx}
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
          ))}
        </div>
      )}
      <div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;

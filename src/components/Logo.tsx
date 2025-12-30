import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <circle cx="20" cy="20" r="18" className="fill-primary/10" />
        <path
          d="M20 8C15 8 11 12 11 17C11 22 15 26 20 26C25 26 29 22 29 17"
          stroke="url(#gradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M29 17C29 12 25 8 20 8"
          stroke="url(#gradient2)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="17" r="3" className="fill-primary" />
        <defs>
          <linearGradient id="gradient1" x1="11" y1="8" x2="29" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(224, 76%, 48%)" />
            <stop offset="1" stopColor="hsl(4, 87%, 68%)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="29" y1="8" x2="20" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(4, 87%, 68%)" />
            <stop offset="1" stopColor="hsl(224, 76%, 48%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-tight">Agape</span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Medical</span>
      </div>
    </Link>
  );
};

export default Logo;

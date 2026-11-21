const items = [
  { label: "Ruby on Rails", color: "#d6b981" },
  { label: "PostgreSQL", color: "#8fb3d9" },
  { label: "Backend Development", color: "#6fd49a" },
  { label: "REST APIs", color: "#cbd5e1" },
  { label: "Redis", color: "#e0a98f" },
  { label: "AWS", color: "#d6b981" },
  { label: "Machine Learning", color: "#b9a6dd" },
  { label: "Python", color: "#8fb3d9" },
  { label: "React", color: "#6fd49a" },
  { label: "Docker", color: "#cbd5e1" },
];

const Track = () => (
  <ul className="flex shrink-0 items-center py-3.5">
    {items.map((item, index) => (
      <li
        key={index}
        className="label-tag flex items-center gap-3 px-6 sm:px-8"
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
        />
        {item.label}
      </li>
    ))}
  </ul>
);

const Marquee = () => {
  return (
    <div className="glass marquee-row border-x-0 rounded-none border-y border-dashed">
      <p className="sr-only">
        Specialties: {items.map((item) => item.label).join(", ")}
      </p>
      <div className="marquee-track" aria-hidden="true">
        <Track />
        <Track />
      </div>
    </div>
  );
};

export default Marquee;

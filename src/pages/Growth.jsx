import React from "react";
import logo from '../assets/asco.jpeg';
import {
  MapPin,
  Smile,
  ThumbsUp,
  Trophy,
  Clock,
  Building2,
} from "lucide-react";

const Growth = () => {
  const data = [
    { angle: -60, value: "200+", label: "Locations", icon: MapPin },
    { angle: 0, value: "87+", label: "Happy Customers", icon: Smile },
    { angle: 60, value: "90%", label: "Retention Rate", icon: ThumbsUp },
    { angle: 120, value: "56+", label: "Years of Service", icon: Clock },
    { angle: 180, value: "36 States", label: "47 Cities", icon: Building2 },
    { angle: 240, value: "30+", label: "Awards", icon: Trophy },
  ];

  const radius = 180;

  return (
    <section className="min-h-screen w-full bg-[#0281bc] py-16 flex flex-col items-center px-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
        Our Growth Story
      </h2>

      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* BACKGROUND CIRCLE */}
        <svg width="400" height="400" className="absolute">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#232627ff" />
              <stop offset="100%" stopColor="#0c2b63" />
            </linearGradient>
          </defs>

          {/* Arc segments */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <path
              key={index}
              d={describeArc(200, 200, 150, angle, angle + 50)}
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="40"
              strokeLinecap="round"
            />
          ))}

          {/* Center circle */}
          <circle cx="200" cy="200" r="80" fill="white" stroke="#003b95" strokeWidth="3" />
          <text
            x="200"
            y="195"
            textAnchor="middle"
            className="font-semibold text-xs"
            fill="#111213ff"
          >
              Ashaka Security Company
          </text>
          <text
            x="200"
            y="215"
            textAnchor="middle"
            className="text-xs"
            fill="#003b95"
          >
            (ASCO) Limited.
          </text>
        </svg>

        {/* DYNAMIC ICONS + LABELS (HTML mapped) */}
        {data.map((item, index) => {
          const angleRad = (item.angle * Math.PI) / 180;
          const x = 200 + Math.cos(angleRad) * radius;
          const y = 200 + Math.sin(angleRad) * radius;
          const IconTag = item.icon;

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center text-center"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <IconTag size={28} className="text-white" />
              <p className="font-bold text-white">{item.value}</p>
              <p className="text-xs w-20 text-white">{item.label}</p>
            </div>
          );
        })}
      </div>

      <h1 className="mt-6 italic text-white text-2xl">
        Consistent growth through the years!
      </h1>
    </section>
  );
};

// --- SVG ARC HELPERS ---
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export default Growth;

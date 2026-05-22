import React from "react";
import { Link } from "react-router-dom";

const ageGroups = [
  { id: "6-8", title: "Ages 6 - 8", subtitle: "Early Explorers" },
  { id: "9-12", title: "Ages 9 - 12", subtitle: "Budding Innovators" },
  { id: "13-15", title: "Ages 13 - 15", subtitle: "Teen Trailblazers" },
  { id: "16-18", title: "Ages 16 - 18", subtitle: "Visionary Achievers" },
];

const Quiz = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F9FB] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-nexa text-center mb-6">
          What's Your Age Range?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose your age group so we can create the perfect quiz adventure
          just for you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ageGroups.map((g, i) => {
            const colors = ["bg-gradient-to-br from-yellow-300 to-yellow-400", "bg-gradient-to-br from-sky-300 to-sky-500", "bg-gradient-to-br from-pink-300 to-pink-500", "bg-gradient-to-br from-emerald-300 to-emerald-500"];
            const icons = ["🌟", "🔬", "🚀", "🎓"];
            return (
              <Link
                key={g.id}
                to={`/quiz/${g.id}`}
                className={`block rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 ${colors[i % colors.length]}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold bg-white/10">
                    {icons[i % icons.length]}
                  </div>
                  <div>
                    <h3 className="text-xl font-nexa text-white">{g.title}</h3>
                    <p className="text-white/90 font-cocon">{g.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-white/90 text-sm">
                  Click to start the {g.subtitle} quiz adventure.
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

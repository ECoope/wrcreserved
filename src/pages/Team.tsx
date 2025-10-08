import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import TwoToneTitle from "@/components/TwoToneTitle";
import andrewMcleod from "@/assets/andrew-mcleod.jpg";
import vickyGalarce from "@/assets/vicky-gillars.jpg";
import leahRay from "@/assets/leah-ray.jpg";
import executiveTeamPhoto from "@/assets/executive-team-2025.png";

interface TeamMember {
  name: string;
  title: string;
  photoSrc: string;
  featured: boolean;
  order: number;
}

const Team = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const featuredTeam: TeamMember[] = [
    {
      name: "Andrew McLeod",
      title: "President",
      photoSrc: andrewMcleod,
      featured: true,
      order: 1
    },
    {
      name: "Vicky Galarce",
      title: "Co-Chair",
      photoSrc: vickyGalarce,
      featured: true,
      order: 2
    },
    {
      name: "Leah Ray",
      title: "Co-Chair",
      photoSrc: leahRay,
      featured: true,
      order: 3
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="TEAM" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Meet the leadership of The Reserve Circle.
          </p>
        </div>
      </section>

      {/* Featured Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">EXECUTIVE</span>
            <span className="font-normal"> TEAM</span>
          </h2>
          
          {/* Featured Team - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
            {featuredTeam.map((member, index) => (
              <div 
                key={member.name}
                className="flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-2 shadow-elegant" style={{ borderColor: 'hsl(var(--wrc-gold))' }}>
                  <img
                    src={member.photoSrc}
                    alt={`Portrait of ${member.name}, ${member.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1 relative">
                  {member.name}
                  <span className="block w-8 h-0.5 mx-auto mt-2" style={{ backgroundColor: 'hsl(var(--wrc-gold))' }} />
                </h3>
                <p className="text-lg opacity-90">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowFullTeam(!showFullTeam)}
              aria-expanded={showFullTeam}
              aria-controls="full-team-grid"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                borderColor: 'hsl(var(--wrc-gold))', 
                color: 'hsl(var(--wrc-gold))',
                outlineColor: 'hsl(var(--wrc-gold))'
              }}
            >
              {showFullTeam ? (
                <>
                  Hide Full Team
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show Full Team
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Full Team Photo */}
          {showFullTeam && (
            <div 
              id="full-team-grid"
              className="mt-16 max-w-5xl mx-auto animate-fade-in"
            >
              <div className="border-4 rounded-lg overflow-hidden shadow-bold" style={{ borderColor: 'hsl(var(--wrc-gold))' }}>
                <img
                  src={executiveTeamPhoto}
                  alt="Executive Team 2025-2026"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;

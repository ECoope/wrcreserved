import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import TwoToneTitle from "@/components/TwoToneTitle";
import andrewMcleod from "@/assets/andrew-mcleod.jpg";
import vickyGalarce from "@/assets/vicky-gillars.jpg";
import leahRay from "@/assets/leah-ray.jpg";
import charlieHortensio from "@/assets/charlie-hortensio.jpg";
import meganSpiller from "@/assets/megan-spiller.jpg";

interface TeamMember {
  name: string;
  title: string;
  photoSrc: string;
  featured: boolean;
  order: number;
}

const Team = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const team: TeamMember[] = [
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
    },
    {
      name: "Charlie Hortensio",
      title: "Treasurer",
      photoSrc: charlieHortensio,
      featured: false,
      order: 4
    },
    {
      name: "Megan Spiller",
      title: "Strategic Advisor",
      photoSrc: meganSpiller,
      featured: false,
      order: 5
    }
  ].sort((a, b) => a.order - b.order);

  const featuredTeam = team.filter(m => m.featured);
  const fullTeam = team.filter(m => !m.featured);

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

          {/* Full Team Grid */}
          {showFullTeam && (
            <div 
              id="full-team-grid"
              className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-fade-in"
            >
              {fullTeam.map((member, index) => (
                <div 
                  key={member.name}
                  className="flex flex-col items-center text-center animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 shadow-elegant" style={{ borderColor: 'hsl(var(--wrc-gold))' }}>
                    <img
                      src={member.photoSrc}
                      alt={`Portrait of ${member.name}, ${member.title}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 relative">
                    {member.name}
                    <span className="block w-6 h-0.5 mx-auto mt-1.5" style={{ backgroundColor: 'hsl(var(--wrc-gold))' }} />
                  </h3>
                  <p className="text-sm opacity-90">{member.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;

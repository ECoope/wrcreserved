import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Linkedin } from "lucide-react";
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
  linkedinUrl?: string;
}

const Team = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const featuredTeam: TeamMember[] = [
    {
      name: "Andrew McLeod",
      title: "President",
      photoSrc: andrewMcleod,
      featured: true,
      order: 1,
      linkedinUrl: "https://www.linkedin.com/in/andrewmcleod7/"
    },
    {
      name: "Vicky Galarce",
      title: "Co-Chair",
      photoSrc: vickyGalarce,
      featured: true,
      order: 2,
      linkedinUrl: "https://www.linkedin.com/in/victoria-galarce/"
    },
    {
      name: "Leah Ray",
      title: "Co-Chair",
      photoSrc: leahRay,
      featured: true,
      order: 3,
      linkedinUrl: "https://www.linkedin.com/in/leah-ray13/"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-primary via-primary/95 to-background text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="TEAM" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Meet the <span className="text-secondary font-semibold">leadership</span> of The Reserve Circle.
          </p>
        </div>
      </section>

      {/* Featured Leadership */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">EXECUTIVE</span>
            <span className="font-normal text-secondary"> TEAM</span>
          </h2>
          
          {/* Featured Team - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
            {featuredTeam.map((member, index) => (
              <div 
                key={member.name}
                className="flex flex-col items-center text-center animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-2 shadow-elegant hover-scale hover-glow transition-all" style={{ borderColor: 'hsl(var(--wrc-gold))' }}>
                  <img
                    src={member.photoSrc}
                    alt={`Portrait of ${member.name}, ${member.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-12 h-12 text-secondary hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-1 relative">
                  {member.name}
                  <span className="block w-8 h-0.5 mx-auto mt-2 transition-all group-hover:w-16" style={{ backgroundColor: 'hsl(var(--wrc-gold))' }} />
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover-scale hover-glow"
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

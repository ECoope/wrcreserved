import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Diamond, BookOpen, Shield, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TwoToneTitle from "@/components/TwoToneTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroVideo from "@/assets/hero-background.mov";
import charlesOrtencio from "@/assets/charles-ortencio.png";
import meganSpiller from "@/assets/megan-spiller-testimonial.png";
import mayaMehta from "@/assets/maya-mehta.jpg";
import jadaWaleski from "@/assets/jada-waleski.jpg";
import jonathanCorbett from "@/assets/jonathan-corbett.jpg";
import zacharyOrtencio from "@/assets/zachary-ortencio.jpg";
import andrewMcleod from "@/assets/andrew-mcleod.jpg";
import vickyGalarce from "@/assets/vicky-gillars.jpg";
import leahRay from "@/assets/leah-ray.jpg";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon: Icon, title, shortDescription, description, index }: ValueCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 100}ms`, perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 text-center border-primary/20 hover:border-secondary transition-all hover:shadow-bold group [backface-visibility:hidden]">
          <CardHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{shortDescription}</CardDescription>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 border-primary/20 hover:border-secondary transition-all hover:shadow-bold [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Home = () => {
  const heroSubtitleRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
          ref={(video) => {
            if (video) {
              video.muted = true;
              video.setAttribute('muted', '');
              video.setAttribute('playsinline', '');
              video.setAttribute('webkit-playsinline', '');
              
              const playVideo = () => {
                video.play().catch(() => {
                  // Fallback: try again on user interaction
                  document.addEventListener('touchstart', () => {
                    video.play().catch(() => {});
                  }, { once: true });
                });
              };
              
              if (video.readyState >= 2) {
                playVideo();
              } else {
                video.addEventListener('loadeddata', playVideo);
                video.addEventListener('canplay', playVideo);
              }
            }
          }}
        >
          <source src={heroVideo} type="video/quicktime" />
          <source src={heroVideo} type="video/mp4" />
        </video>
        <style>{`
          video::-webkit-media-controls {
            display: none !important;
            -webkit-appearance: none !important;
          }
          video::-webkit-media-controls-enclosure {
            display: none !important;
          }
          video::-webkit-media-controls-panel {
            display: none !important;
          }
          video::-webkit-media-controls-play-button {
            display: none !important;
          }
          video::-webkit-media-controls-start-playback-button {
            display: none !important;
          }
        `}</style>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
          <TwoToneTitle 
            first="The Reserve" 
            second="CIRCLE"
            className="text-5xl md:text-7xl text-secondary mb-6"
          />
          <div ref={heroSubtitleRef} className="reveal">
            <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto">
              The ultimate university experience.
            </p>
          </div>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold text-lg font-semibold">
              <Link to="/apply">
                Apply for Membership <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-gradient-to-b from-background via-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-primary">Values</span>
          </h2>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
            <ValueCard
              icon={Sparkles}
              title="Exclusivity"
              shortDescription="Limited membership, exceptional experiences"
              description="WRC is built around genuine connection. We keep things small so every event feels personal and every conversation has meaning."
              index={0}
            />
            <ValueCard
              icon={Diamond}
              title="Refinement"
              shortDescription="Cultivating sophistication and elegance"
              description="Refinement means care in everything we do. It's paying attention, showing respect, and finding beauty in the small details."
              index={1}
            />
            <ValueCard
              icon={BookOpen}
              title="Knowledge"
              shortDescription="Continuous learning and wine education"
              description="We see wine as a story worth learning. Every bottle teaches us something new about craft, culture, and connection."
              index={2}
            />
            <ValueCard
              icon={Shield}
              title="Integrity"
              shortDescription="Building trust through principled action"
              description="Integrity guides how we act and enjoy. We value honesty, respect, and doing things the right way, always."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Meet Our <span className="text-primary">Executive Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The Reserve Circle is led by three dedicated Co-Chairs committed to excellence in networking and wine education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Andrew McLeod", role: "Co-Chair", image: andrewMcleod, linkedinUrl: "https://www.linkedin.com/in/andrewmcleod7/" },
                { name: "Vicky Galarce", role: "Co-Chair", image: vickyGalarce, linkedinUrl: "https://www.linkedin.com/in/victoria-galarce/" },
                { name: "Leah Ray", role: "Co-Chair", image: leahRay, linkedinUrl: "https://www.linkedin.com/in/leah-ray13/" },
              ].map((member, index) => (
                <Card key={index} className="text-center border-primary/20 hover:border-secondary transition-all animate-fade-in-up hover-lift hover-glow group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-8 pb-8">
                    {member.image ? (
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center border-4 border-secondary rounded-full"
                        />
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            className="absolute inset-0 flex items-center justify-center bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                            aria-label={`Visit ${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="w-10 h-10 text-secondary hover:scale-110 transition-transform" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 border-4 border-secondary flex items-center justify-center">
                        <span className="text-3xl font-bold text-secondary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-secondary font-semibold">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold font-semibold">
                <Link to="/team">
                  View Full Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-background via-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="text-primary">Members</span> Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Charles Ortencio",
                role: "Treasurer",
                quote: "What sets WRC apart is the uniqueness of the experience. Every curated event is thoughtfully designed to blend refinement with genuine connection. It's more than wine, it's about being part of something truly special.",
                image: charlesOrtencio,
              },
              {
                name: "Megan Spiller",
                role: "Strategic Advisor",
                quote: "I love the sophisticated atmosphere WRC creates. It's a space where young professionals can come together, build meaningful relationships, and grow both personally and professionally in an environment that values elegance and intention.",
                image: meganSpiller,
              },
              {
                name: "Zachary Ortencio",
                role: "Coordinator, Logistics",
                quote: "Being part of WRC has opened doors I never expected. The blend of education and community makes every gathering feel special and worthwhile.",
                image: zacharyOrtencio,
              },
              {
                name: "Jada Waleski",
                role: "Director, Culture",
                quote: "The Circle blends tradition with a modern student voice. It feels refined without being distant and welcoming without losing its standards.",
                image: jadaWaleski,
              },
              {
                name: "Jonathan F. Corbett",
                role: "Director, Culture",
                quote: "I love exploring the historic curation of wine. Each tasting teaches me the specifics and technicals of exactly what I'm experiencing. One day, I hope to write poems about these wines and the stories they tell.",
                image: jonathanCorbett,
              },
              {
                name: "Maya Mehta",
                role: "Coordinator, Marketing",
                quote: "WRC gives me a place to learn and connect in a way that feels thoughtful and real. Every tasting is curated with care and every conversation opens a new door.",
                image: mayaMehta,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-primary/20 hover:border-secondary transition-all animate-fade-in-up hover-lift hover-glow" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to receive updates about exclusive events and opportunities.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary"
            />
            <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

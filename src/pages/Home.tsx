import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Diamond, BookOpen, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroVideo from "@/assets/hero-video.mov";
import members1 from "@/assets/members-1.jpg";
import members2 from "@/assets/members-2.jpg";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark/90" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            Reserve Circle
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground mb-3 max-w-3xl mx-auto">
            An exclusive community for networking, professional development,
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto">
            and celebrating wine—responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold text-lg font-semibold">
              <Link to="/events">
                View Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg backdrop-blur-sm font-semibold">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard
              icon={Sparkles}
              title="Exclusivity"
              shortDescription="Limited membership, exceptional experiences"
              description="WRC isn't about shutting people out. It's about bringing the right people in. We keep things small so that everyone actually knows one another and every gathering feels like a shared experience instead of a crowd. The goal is to create a space where genuine connections can happen over good wine and good conversation."
              index={0}
            />
            <ValueCard
              icon={Diamond}
              title="Refinement"
              shortDescription="Cultivating sophistication and elegance"
              description="Refinement isn't about being fancy. It's about care. It's in how we speak, how we listen, and how we approach the things we love. We pay attention to the small details because they're what make moments memorable. It's about having taste that comes from curiosity, not ego."
              index={1}
            />
            <ValueCard
              icon={BookOpen}
              title="Knowledge"
              shortDescription="Continuous learning and wine education"
              description="We like to think of wine as a story you can taste. Every bottle has history, craft, and people behind it. We don't pretend to know everything. We're here to learn together, ask questions, and appreciate the mix of culture and creativity that makes wine so fascinating."
              index={2}
            />
            <ValueCard
              icon={Shield}
              title="Integrity"
              shortDescription="Building trust through principled action"
              description="At the heart of WRC is respect for each other, for the experience, and for the values that keep our community strong. We do things the right way, not the easy way. It's about being honest, showing up, and remembering that the way we enjoy something says as much about us as what we enjoy."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Meet Our Executive Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reserve Circle is led by three dedicated Co-Chairs committed to excellence in networking and wine education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Andrew McLeod", role: "President" },
                { name: "Vicky Galarce", role: "Co-Chair" },
                { name: "Leah Ray", role: "Co-Chair" },
              ].map((member, index) => (
                <Card key={index} className="text-center border-primary/20 hover:border-secondary hover:shadow-bold transition-all animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-8 pb-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 border-4 border-secondary flex items-center justify-center">
                      <span className="text-3xl font-bold text-secondary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Charlie O.",
                quote: "Reserve Circle has been transformative for my professional network. The connections I've made here have opened doors I never expected.",
                image: members1,
              },
              {
                name: "Megan Spiller",
                quote: "The exclusive events and sophisticated atmosphere of WRC set it apart. It's not just about wine—it's about building a community of ambitious professionals.",
                image: members2,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-primary/20 hover:border-secondary hover:shadow-bold transition-all animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                    />
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-secondary">WRC Member</p>
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Wine, BookOpen, Users, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import drinks from "@/assets/drinks.jpg";

const Membership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    message: "",
  });

  const benefits = [
    {
      icon: Wine,
      title: "Curated Tastings",
      description: "Monthly guided tastings featuring premium wines from around the world",
    },
    {
      icon: BookOpen,
      title: "Educational Workshops",
      description: "Expert-led sessions on viticulture, regions, styles, and tasting techniques",
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with industry professionals, alumni, and fellow enthusiasts",
    },
    {
      icon: Gift,
      title: "Exclusive Resources",
      description: "Access to our wine library, study materials, and certification prep guides",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We will respond within 2 business days.",
    });
    setFormData({ name: "", email: "", graduationYear: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Become part of Western University's premier wine education and appreciation society.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in-up">
              <Shield className="h-4 w-4" />
              <span>Must be 19+ to attend events serving alcohol • Non-alcoholic options always available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Members Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-all hover:shadow-elegant group animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Apply to Join</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 business days.
              </p>
            </div>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Western Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jdoe@uwo.ca"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Expected Graduation Year *</Label>
                    <Input
                      id="graduationYear"
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      placeholder="2026"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your interest in wine (optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what excites you about joining the Wine Club..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary shadow-glow" size="lg">
                    Submit Application
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    We will respond within 2 business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image + CTA Section */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <img
                src={drinks}
                alt="Premium beverages at wine club event"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">A Welcoming Community</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join a community of over 200 students who are expanding their palates, building professional networks, and creating unforgettable memories. No experience necessary—just curiosity and a love of learning.
              </p>
              <div className="space-y-4">
                {[
                  "Must be 19+ (legal drinking age in Ontario)",
                  "Open to Western students and alumni",
                  "Non-alcoholic alternatives at every event",
                  "Inclusive and welcoming environment for all",
                ].map((note, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Enjoyment Notice */}
      <section className="py-12 bg-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm max-w-3xl mx-auto leading-relaxed opacity-90">
            <strong>Responsible Enjoyment:</strong> The Western University Wine Club promotes responsible consumption and education. We provide non-alcoholic beverages at all events and encourage mindful appreciation of wine culture. Members must adhere to university policies and Ontario's legal drinking age (19+).
          </p>
        </div>
      </section>
    </div>
  );
};

const Shield = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

export default Membership;

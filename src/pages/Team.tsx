import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.graduationYear) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We will respond within 2 business days.",
    });

    setFormData({ name: "", email: "", graduationYear: "", message: "" });
  };

  const coChairs = [
    {
      name: "Andrew McLeod",
      role: "President",
      email: "AndrewMcLeod127@gmail.com",
      phone: "705-427-7891",
    },
    {
      name: "Vicky Galarce",
      role: "Co-Chair",
    },
    {
      name: "Leah Ray",
      role: "Co-Chair",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Meet the exclusive leadership of Reserve Circle.
          </p>
        </div>
      </section>

      {/* Co-Chairs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coChairs.map((chair, index) => (
              <Card 
                key={index} 
                className="text-center border-primary/20 hover:border-secondary hover:shadow-bold transition-all group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 border-4 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-secondary">
                      {chair.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{chair.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{chair.role}</p>
                  {chair.email && (
                    <a 
                      href={`mailto:${chair.email}`} 
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors block mb-1"
                    >
                      {chair.email}
                    </a>
                  )}
                  {chair.phone && (
                    <a 
                      href={`tel:${chair.phone.replace(/\D/g, '')}`} 
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors block"
                    >
                      {chair.phone}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply to Join</h2>
              <p className="text-lg text-muted-foreground">
                Reserve Circle is exclusive to executive members. Applications are reviewed once per year.
              </p>
            </div>

            <Card className="border-primary/20 shadow-bold">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Western Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="your.email@uwo.ca"
                    />
                  </div>

                  <div>
                    <Label htmlFor="graduationYear">Expected Graduation Year *</Label>
                    <Input
                      id="graduationYear"
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="2026"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Why do you want to join Reserve Circle?</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your interest in wine, networking, and professional development..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold font-semibold text-lg h-12"
                  >
                    Submit Application
                  </Button>

                  <p className="text-sm text-center text-muted-foreground mt-4">
                    We will respond within 2 business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

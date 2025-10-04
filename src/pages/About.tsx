import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Lightbulb, Shield, Users, Target, HandHeart } from "lucide-react";
import aboutVideo from "@/assets/about-video.mov";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Learning",
      description: "We believe wine education should be accessible, engaging, and hands-on. Every event is an opportunity to expand your palate and knowledge.",
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Our community welcomes all experience levels—from curious beginners to aspiring sommeliers. No pretension, just passion.",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "We celebrate wine culture while prioritizing safe, mindful consumption. Non-alcoholic options are always available.",
    },
    {
      icon: Target,
      title: "Curiosity",
      description: "We encourage exploration beyond the familiar—new regions, unexpected pairings, and innovative winemaking techniques.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "More than tastings, we build lasting friendships and professional connections that extend beyond graduation.",
    },
    {
      icon: HandHeart,
      title: "Service",
      description: "We give back through fundraising events, charity auctions, and partnerships with local organizations.",
    },
  ];

  const faqs = [
    {
      question: "Do I need to be 19+ to join?",
      answer: "Yes, you must be of legal drinking age in Ontario (19+) to attend events where alcohol is served. However, we always provide non-alcoholic alternatives at every event.",
    },
    {
      question: "What if I don't drink alcohol?",
      answer: "Absolutely no problem! We always offer sophisticated non-alcoholic beverages at tastings, and many of our educational workshops focus on appreciation, terroir, and culture—not just consumption.",
    },
    {
      question: "Do I need wine knowledge to join?",
      answer: "Not at all! We welcome complete beginners. Our events are designed to educate and inspire, regardless of your current knowledge level.",
    },
    {
      question: "Are events wheelchair accessible?",
      answer: "Yes, we prioritize accessibility. All our on-campus events are held in accessible venues. For off-campus trips, we coordinate with partners to ensure accommodations.",
    },
    {
      question: "Can I attend events without a membership?",
      answer: "Most events are member-only, but we host select open events throughout the year. Follow us on social media for announcements!",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Why We Swirl
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Founded in 2018, the Western University Wine Club has grown from a small group of enthusiasts to a vibrant community of over 200 members exploring the art and science of wine.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary transition-all hover:shadow-elegant group animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Leadership Team</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Meet the passionate students leading our community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jordan Chen",
                role: "President",
                bio: "WSET Level 2 certified, leading the club's strategic vision and partner relations.",
              },
              {
                name: "Emma Rodriguez",
                role: "VP Events",
                bio: "Curating unforgettable tasting experiences and educational workshops for our members.",
              },
              {
                name: "Marcus Thompson",
                role: "VP Education",
                bio: "Developing our curriculum and certification pathways in partnership with industry experts.",
              },
            ].map((leader, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-all hover:shadow-elegant animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary mb-4" />
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Partners</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Proud to collaborate with leading wineries, educators, and hospitality partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["WSET", "ISG", "VQA Ontario", "Niagara College", "Hospitality Ontario", "Local Wineries", "Western Alumni", "Student Council"].map((partner, index) => (
              <Card key={index} className="aspect-square flex items-center justify-center border-primary/20 hover:border-primary transition-all hover:shadow-elegant animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-4">
                  <p className="text-center font-semibold text-muted-foreground">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default About;

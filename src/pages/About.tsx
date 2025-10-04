import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Network, TrendingUp, Shield, Users, Sparkles, Heart } from "lucide-react";
import aboutVideo from "@/assets/about-video.mov";

const About = () => {
  const values = [
    {
      icon: Network,
      title: "Strong Networking",
      description: "Build meaningful connections with industry professionals, executives, and ambitious peers who share your passion for excellence.",
    },
    {
      icon: Sparkles,
      title: "Exclusivity",
      description: "Limited membership ensures intimate events and exceptional experiences. We hire executive members once per year.",
    },
    {
      icon: Users,
      title: "Community",
      description: "More than an organization—we're a family of driven individuals supporting each other's personal and professional growth.",
    },
    {
      icon: Shield,
      title: "Responsible Enjoyment",
      description: "We celebrate wine culture while prioritizing safe, mindful consumption. Non-alcoholic options are always available.",
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Gain skills, insights, and opportunities that will serve you throughout your career and beyond.",
    },
    {
      icon: Heart,
      title: "Curiosity",
      description: "We encourage exploration of wine regions, varietals, and the rich culture surrounding the world of wine.",
    },
  ];

  const faqs = [
    {
      question: "Is Reserve Circle affiliated with Western University?",
      answer: "No, Reserve Circle (WRC) is an independent organization. While many of our members are connected to the university community, we are not officially ratified with Western University.",
    },
    {
      question: "How do I become a member?",
      answer: "WRC is exclusive to executive members with hirings conducted once per year. Submit your application through our Team page, and we will respond within 2 business days.",
    },
    {
      question: "Do I need to be 19+ to join?",
      answer: "Yes, you must be of legal drinking age in Ontario (19+) to attend events where alcohol is served. However, we always provide non-alcoholic alternatives at every event.",
    },
    {
      question: "What if I don't drink alcohol?",
      answer: "Absolutely no problem! We always offer sophisticated non-alcoholic beverages at tastings, and many of our events focus on networking, professional development, and wine appreciation culture.",
    },
    {
      question: "When was Reserve Circle founded?",
      answer: "Reserve Circle was founded in 2025 with a vision to create an exclusive community focused on networking, professional development, and responsible wine appreciation.",
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
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            An exclusive community founded in 2025, dedicated to networking, professional development, and responsible wine appreciation.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reserve Circle is built on principles of excellence, exclusivity, and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-secondary hover:shadow-bold transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-primary/20 rounded-lg px-6 hover:border-secondary transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Responsible Enjoyment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-12 w-12 mx-auto mb-4 text-secondary" />
          <h3 className="text-3xl font-bold mb-4">Responsible Enjoyment</h3>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Reserve Circle is committed to promoting responsible wine appreciation. All events comply with Ontario regulations. Must be 19+ to attend events serving alcohol. Non-alcoholic options are always available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

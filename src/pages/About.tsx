import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Diamond, BookOpen, Shield } from "lucide-react";
import TwoToneTitle from "@/components/TwoToneTitle";
import aboutVideo from "@/assets/about-video.mov";
import qrcLogo from "@/assets/qrc-logo.jpg";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Exclusivity",
      description: "Limited membership, exceptional experiences. WRC is built around genuine connection. We keep things small so every event feels personal and every conversation has meaning.",
    },
    {
      icon: Diamond,
      title: "Refinement",
      description: "Cultivating sophistication and elegance. Refinement means care in everything we do. It's paying attention, showing respect, and finding beauty in the small details.",
    },
    {
      icon: BookOpen,
      title: "Knowledge",
      description: "Continuous learning and wine education. We see wine as a story worth learning. Every bottle teaches us something new about craft, culture, and connection.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through principled action. Integrity guides how we act and enjoy. We value honesty, respect, and doing things the right way, always.",
    },
  ];

  const faqs = [
    {
      question: "How do I become a member?",
      answer: "WRC is exclusive to executive members with hirings conducted once per year. Our next round of interviews are in the spring, March. Submit your application through our application page and we will be in touch.",
    },
    {
      question: "Do I need to be 19+ to join?",
      answer: "Yes, you must be of legal drinking age in Ontario (19+) to attend events where alcohol is served. However, we always provide non-alcoholic alternatives at every event.",
    },
    {
      question: "Can I attend if I choose not to drink?",
      answer: "Yes. You are welcome to join tastings for the education and the community. We provide thoughtful alternatives and the experience remains inclusive and enjoyable.",
    },
    {
      question: "How is the executive team selected?",
      answer: "Our selection process focuses on a balance of personality, extracurriculars, experience, and excellence. We choose a team of 35-40 members each year who embody our values and contribute to our community.",
    },
    {
      question: "Is The Reserve Circle affiliated with Western University?",
      answer: "No, The Reserve Circle (WRC) is an independent organization. While many of our members are connected to the university community, we are not officially affiliated with Western University.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/90 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="STORY" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in-up leading-relaxed">
            The <span className="text-secondary font-semibold">Western Reserve Circle</span> is a student-run club dedicated to cultivating sophistication through private wine and beverage tastings. We create settings where members connect naturally, learn with intention, and enjoy craft with care. Every gathering is planned with <span className="text-primary font-semibold">purpose</span> so that what our members take with them is as meaningful as what is poured.
          </p>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
              <span className="font-bold">OUR</span>
              <span className="font-normal"> PARTNERSHIP</span>
            </h2>
            
            <div className="flex flex-col items-center gap-12">
              {/* Logo */}
              <a 
                href="https://thereservecircle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative hover-scale"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-elegant hover-glow transition-all">
                  <img 
                    src={qrcLogo} 
                    alt="Queen's Reserve Circle Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Visit QRC
                </p>
              </a>
              
              <div className="space-y-6 max-w-3xl text-center">
                <p className="text-lg text-muted-foreground">
                  The Queen's Reserve Circle (QRC) was founded in 2023, establishing the foundation for refined wine appreciation and sophisticated networking among students. Building on this success, the Western Reserve Circle (WRC) was formed in 2025 in partnership with QRC.
                </p>
                <p className="text-lg text-muted-foreground">
                  Together, we share a unified vision: creating exclusive communities where young professionals develop their palates, expand their networks, and grow both personally and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
              <span className="font-bold">FREQUENTLY</span>
              <span className="font-normal"> ASKED QUESTIONS</span>
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
          <h3 className="text-3xl font-bold mb-4 font-serif">
            <span className="font-bold">RESPONSIBLE</span>
            <span className="font-normal"> ENJOYMENT</span>
          </h3>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            The Reserve Circle is committed to promoting responsible wine appreciation. All events comply with Ontario regulations. Must be 19+ to attend events serving alcohol. Non-alcoholic options are always available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Check, ArrowRight, Wine, BookOpen, Users, Gift } from "lucide-react";
import drinks from "@/assets/drinks.jpg";

const Membership = () => {
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

  const tiers = [
    {
      name: "Basic",
      price: "$25",
      period: "per term",
      description: "Perfect for curious beginners",
      features: [
        "Access to all monthly tastings",
        "Monthly newsletter with wine tips",
        "10% discount on special events",
        "Community Discord access",
        "Wine education library",
      ],
      cta: "Start Basic",
      popular: false,
    },
    {
      name: "Enthusiast",
      price: "$60",
      period: "per term",
      description: "For the committed wine lover",
      features: [
        "Everything in Basic",
        "4 exclusive workshops per term",
        "Priority event registration",
        "Advanced tasting notes guide",
        "15% partner winery discounts",
        "WSET/ISG study group access",
        "Member-only vineyard tour",
      ],
      cta: "Choose Enthusiast",
      popular: true,
    },
    {
      name: "Executive",
      price: "$120",
      period: "per term",
      description: "The ultimate wine education experience",
      features: [
        "Everything in Enthusiast",
        "VIP vineyard trips (Niagara, Okanagan)",
        "One-on-one sommelier consultations",
        "Advanced certification exam prep",
        "Industry networking dinners",
        "Complimentary guest pass (+1)",
        "Leadership committee eligibility",
        "Premium partner perks",
      ],
      cta: "Go Executive",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Membership That Ages Well
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Choose the tier that matches your passion for wine. All memberships include our core benefits—plus tier-specific perks that elevate your experience.
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Every Member Gets</h2>
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

      {/* Membership Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Tier</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            All memberships are valid for one academic term (Fall or Winter). Switch tiers anytime.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular
                    ? "border-primary shadow-elegant lg:scale-105"
                    : "border-primary/20"
                } transition-all hover:shadow-elegant animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-1.5 rounded-full text-sm font-semibold shadow-glow">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground ml-2 text-lg">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={tier.popular ? "gradient-primary shadow-glow w-full" : "w-full"}
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <Link to="/contact">
                      {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Raise a Glass?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join a community of over 200 students who are expanding their palates, building professional networks, and creating unforgettable memories. No experience necessary—just curiosity and a love of learning.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Must be 19+ (legal drinking age in Ontario)",
                  "Open to Western students and alumni",
                  "Non-alcoholic alternatives at every event",
                  "Cancel or change tiers anytime",
                ].map((note, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{note}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="gradient-primary shadow-glow">
                <Link to="/contact">
                  Join Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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

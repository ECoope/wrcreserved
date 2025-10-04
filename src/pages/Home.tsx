import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Sparkles, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroVideo from "@/assets/hero-video.mov";
import members1 from "@/assets/members-1.jpg";
import members2 from "@/assets/members-2.jpg";
import tastingEvent from "@/assets/tasting-event.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/90" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Savor knowledge.<br />Share the glass.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Western University's community for learning, tasting, and celebrating wine—responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary shadow-glow text-lg">
              <Link to="/membership">
                Join the Club <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary-dark text-lg backdrop-blur-sm">
              <Link to="/events">See Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: "Education", description: "Expert-led tastings and workshops" },
              { icon: Users, title: "Community", description: "Connect with fellow wine enthusiasts" },
              { icon: Sparkles, title: "Access", description: "Exclusive events and partnerships" },
              { icon: Briefcase, title: "Career", description: "Industry networking opportunities" },
            ].map((pillar, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-all hover:shadow-elegant group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Upcoming Featured Event
          </h2>
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-elegant animate-fade-in-up">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={tastingEvent}
                  alt="Wine tasting event with participants"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">March 15, 2025</span>
                </div>
                <CardTitle className="text-3xl mb-4">Niagara Valley Exploration</CardTitle>
                <CardDescription className="text-lg mb-6">
                  Join us for an exclusive guided tasting featuring premium wines from Ontario's renowned Niagara region. Learn about terroir, viticulture, and tasting techniques from certified sommeliers.
                </CardDescription>
                <Button asChild className="gradient-primary shadow-glow w-fit">
                  <Link to="/events">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Membership That Ages Well
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Choose the tier that fits your passion for wine
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$25",
                period: "per term",
                features: ["Access to all tastings", "Monthly newsletters", "Event discounts", "Community access"],
                popular: false,
              },
              {
                name: "Enthusiast",
                price: "$60",
                period: "per term",
                features: ["Everything in Basic", "Exclusive workshops", "Priority event registration", "Wine education resources", "Partner discounts"],
                popular: true,
              },
              {
                name: "Executive",
                price: "$120",
                period: "per term",
                features: ["Everything in Enthusiast", "VIP vineyard trips", "Sommelier consultations", "Advanced certification prep", "Networking events", "Complimentary plus-one"],
                popular: false,
              },
            ].map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-elegant scale-105' : 'border-primary/20'} transition-all hover:shadow-elegant animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={tier.popular ? "gradient-primary shadow-glow w-full" : "w-full"} variant={tier.popular ? "default" : "outline"}>
                    <Link to="/membership">Select {tier.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant animate-fade-in-up">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={members1}
                    alt="Club members at formal event"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">Alex M.</p>
                    <p className="text-sm text-muted-foreground">Enthusiast Member</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The Wine Club has been incredible for both my personal interest in wine and professional networking. The sommelier workshops are world-class!"
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={members2}
                    alt="Members enjoying a tasting session"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Executive Member</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "From beginner to pursuing my WSET certification—this club made it all possible. The community is welcoming and the events are always memorable."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get exclusive event invitations, wine education tips, and member perks delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="your.email@uwo.ca"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
              required
            />
            <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 opacity-75">Western University students and alumni only</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

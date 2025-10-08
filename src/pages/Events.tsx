import { Wine, BookOpen, Users, Mail, Instagram } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TwoToneTitle from "@/components/TwoToneTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import tastingEvent from "@/assets/tasting-event.jpg";
import silentDinner from "@/assets/silent-dinner.jpg";
import rooftopSocial from "@/assets/rooftop-social.jpg";

const Events = () => {
  const eventIntroRef = useScrollReveal();
  const event1Ref = useScrollReveal();
  const event2Ref = useScrollReveal();
  const event3Ref = useScrollReveal();
  const eventSeriesRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-primary via-primary/95 to-background text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="EVENTS" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in text-secondary"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Exclusive, <span className="text-secondary font-semibold">invite-only</span> experiences for our members.
          </p>
        </div>
      </section>

      {/* Private Events Notice */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={eventIntroRef} className="max-w-3xl mx-auto reveal">
            <Alert className="border-primary/20 bg-card">
              <Wine className="h-5 w-5 text-primary" />
              <AlertDescription className="text-base mt-2">
                <p className="font-semibold mb-3 text-foreground">Our events are private and invite-only.</p>
                <p className="mb-4">To request an invite or learn more about upcoming experiences, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:wreservecircle@outlook.com" className="text-primary hover:underline">
                      wreservecircle@outlook.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-primary" />
                    <a 
                      href="https://www.instagram.com/official.wrc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Message us on Instagram
                    </a>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-muted via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">PAST</span>
            <span className="font-normal text-primary"> EVENTS</span>
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Featured Event - Don Adriano */}
            <div ref={event1Ref} className="reveal">
              <Card className="border-primary/20 hover:border-secondary transition-all overflow-hidden hover-lift hover-glow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto image-zoom-container">
                  <img
                    src={tastingEvent}
                    alt="Wine Tasting Event"
                    className="absolute inset-0 w-full h-full object-cover image-zoom"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-3">Wine Tasting with Don Adriano Tequila</h3>
                  <p className="text-secondary font-semibold mb-2">September 25, 2025</p>
                  <p className="text-muted-foreground font-medium mb-4">The London Club, London, Ontario</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    An evening of refined taste and conversation at the historic London Club. Members enjoyed a guided tasting of Don Adriano Tequila alongside curated hors d'oeuvres. The night reflected the essence of WRC through elegant ambience, meaningful connection, and shared appreciation for craft.
                  </p>
                  <p className="text-sm text-secondary italic">Supported by Raymond James Financial Services</p>
                </CardContent>
              </div>
              </Card>
            </div>
            
            <div ref={event2Ref} className="reveal">
              <Card className="border-primary/20 hover:border-secondary transition-all overflow-hidden hover-lift hover-glow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto image-zoom-container">
                  <img
                    src={silentDinner}
                    alt="Silent Dinner Event"
                    className="absolute inset-0 w-full h-full object-cover image-zoom"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-3">Silent Dinner</h3>
                  <p className="text-secondary font-semibold mb-2">September 17, 2025</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A social dining experience featuring live music, meaningful conversations, and a strong bonding experience that brought our members together in an intimate setting.
                  </p>
                </CardContent>
              </div>
              </Card>
            </div>

            <div ref={event3Ref} className="reveal">
              <Card className="border-primary/20 hover:border-secondary transition-all overflow-hidden hover-lift hover-glow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto image-zoom-container">
                  <img
                    src={rooftopSocial}
                    alt="Rooftop Social Event"
                    className="absolute inset-0 w-full h-full object-cover image-zoom"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-3">Rooftop Social</h3>
                  <p className="text-secondary font-semibold mb-2">June 13, 2025</p>
                  <p className="text-muted-foreground font-medium mb-4">Yorkville, Toronto, Ontario</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A joint social with QRC held at 55C Condos in the heart of Yorkville. This privately held event for Reserve Circle members marked a strong first crossover, bringing together members in an exclusive rooftop setting.
                  </p>
                  <p className="text-sm text-secondary italic">Supported by Majestic Wines</p>
                </CardContent>
              </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Series */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">EVENT</span>
            <span className="font-normal text-primary"> SERIES</span>
          </h2>
          <div ref={eventSeriesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal">
            {[
              {
                title: "Events",
                description: "Sponsored curated events hosted professionally, featuring refined experiences and exclusive partnerships.",
                icon: Wine,
              },
              {
                title: "Socials",
                description: "Experience team bonding through casual gatherings and member connections.",
                icon: Users,
              },
              {
                title: "Monthly Meetings",
                description: "Sub groups that plan and forecast for the future of the club, shaping our vision and direction.",
                icon: BookOpen,
              },
            ].map((series, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-secondary transition-all group animate-scale-in hover-lift hover-glow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <series.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{series.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{series.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div ref={ctaRef} className="container mx-auto px-4 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="font-bold">INTERESTED IN</span>
            <span className="font-normal"> JOINING?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Apply to become a member and gain access to our exclusive events.
          </p>
          <a href="/apply" className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-lg transition-smooth shadow-bold">
            Apply for Membership
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;

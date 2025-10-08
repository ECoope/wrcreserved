import { Wine, BookOpen, Users, Mail, Instagram } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TwoToneTitle from "@/components/TwoToneTitle";
import tastingEvent from "@/assets/tasting-event.jpg";
import silentDinner from "@/assets/silent-dinner.jpg";
import rooftopSocial from "@/assets/rooftop-social.jpg";

const Events = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="EVENTS" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in text-secondary"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Exclusive, invite-only experiences for our members.
          </p>
        </div>
      </section>

      {/* Private Events Notice */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Alert className="border-primary/20 bg-card animate-fade-in">
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
                    <span>Message us on Instagram</span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">PAST</span>
            <span className="font-normal"> EVENTS</span>
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Featured Event - Don Adriano */}
            <Card className="border-primary/20 hover:border-secondary hover:shadow-bold transition-all overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={tastingEvent}
                    alt="Wine Tasting Event"
                    className="absolute inset-0 w-full h-full object-cover"
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
            
            <Card className="border-primary/20 hover:border-secondary hover:shadow-bold transition-all overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={silentDinner}
                    alt="Silent Dinner Event"
                    className="absolute inset-0 w-full h-full object-cover"
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

            <Card className="border-primary/20 hover:border-secondary hover:shadow-bold transition-all overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={rooftopSocial}
                    alt="Rooftop Social Event"
                    className="absolute inset-0 w-full h-full object-cover"
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
      </section>

      {/* Event Series */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
            <span className="font-bold">EVENT</span>
            <span className="font-normal"> SERIES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Regions 101",
                description: "Monthly deep dives into the world's most iconic wine regions—from Bordeaux to Barossa.",
                icon: Wine,
              },
              {
                title: "Styles Lab",
                description: "Hands-on workshops exploring varietals, blending, and blind tasting techniques.",
                icon: BookOpen,
              },
              {
                title: "Career Nights",
                description: "Network with sommeliers, winemakers, and hospitality professionals over curated tastings.",
                icon: Users,
              },
            ].map((series, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-secondary transition-all hover:shadow-bold group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="font-bold">INTERESTED IN</span>
            <span className="font-normal"> JOINING?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Apply to become a member and gain access to our exclusive events.
          </p>
          <a href="/team" className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 rounded-lg transition-smooth shadow-bold">
            Apply to Join
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;

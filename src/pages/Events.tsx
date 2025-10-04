import { Wine, BookOpen, Users, Mail, Instagram } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Events = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Events
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
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

      {/* Highlighted Series */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Event Series</h2>
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
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-all hover:shadow-elegant group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <series.icon className="h-7 w-7 text-primary-foreground" />
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
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Joining?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Apply to become a member and gain access to our exclusive events.
          </p>
          <a href="/membership" className="inline-block bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 rounded-lg transition-smooth">
            Apply to Join
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;

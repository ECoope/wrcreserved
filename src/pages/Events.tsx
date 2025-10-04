import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Wine, BookOpen, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tastingEvent from "@/assets/tasting-event.jpg";
import members2 from "@/assets/members-2.jpg";

type EventType = "all" | "tasting" | "workshop" | "social" | "trip";

const Events = () => {
  const [filter, setFilter] = useState<EventType>("all");

  const events = [
    {
      type: "tasting" as const,
      title: "Niagara Valley Exploration",
      date: "March 15, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "University Community Centre",
      capacity: "40 spots",
      description: "Guided tasting of premium wines from Ontario's Niagara region with certified sommelier.",
      image: tastingEvent,
      series: "Regions 101",
    },
    {
      type: "workshop" as const,
      title: "Blind Tasting Fundamentals",
      date: "March 22, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Ivey Building, Room 210",
      capacity: "25 spots",
      description: "Learn systematic tasting methodology and improve your palate recognition skills.",
      image: members2,
      series: "Styles Lab",
    },
    {
      type: "social" as const,
      title: "Spring Member Mixer",
      date: "March 29, 2025",
      time: "5:30 PM - 8:00 PM",
      location: "The Wave",
      capacity: "60 spots",
      description: "Casual networking event with light bites, wine, and non-alcoholic cocktails.",
      image: tastingEvent,
      series: null,
    },
    {
      type: "tasting" as const,
      title: "Spanish Rioja Deep Dive",
      date: "April 5, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Alumni Hall",
      capacity: "35 spots",
      description: "Explore the terroir and tradition of Spain's most celebrated wine region.",
      image: members2,
      series: "Regions 101",
    },
    {
      type: "workshop" as const,
      title: "WSET Certification Prep",
      date: "April 12, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Business Building",
      capacity: "20 spots",
      description: "Intensive study session for members pursuing WSET Level 2 certification.",
      image: tastingEvent,
      series: "Career Nights",
    },
    {
      type: "trip" as const,
      title: "Okanagan Valley Weekend",
      date: "April 26-28, 2025",
      time: "All Weekend",
      location: "Kelowna, BC",
      capacity: "15 spots",
      description: "Executive members: Three-day curated vineyard tour in British Columbia's wine country.",
      image: members2,
      series: null,
    },
  ];

  const filteredEvents = filter === "all" ? events : events.filter((e) => e.type === filter);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "tasting":
        return "bg-primary text-primary-foreground";
      case "workshop":
        return "bg-secondary text-secondary-foreground";
      case "social":
        return "bg-amber text-foreground";
      case "trip":
        return "bg-wine text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "tasting":
        return Wine;
      case "workshop":
        return BookOpen;
      case "social":
        return Users;
      case "trip":
        return Plane;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Upcoming Events
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            From intimate tastings to vineyard expeditions, discover experiences that will expand your palate and network.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-background sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { value: "all", label: "All Events" },
              { value: "tasting", label: "Tastings" },
              { value: "workshop", label: "Workshops" },
              { value: "social", label: "Socials" },
              { value: "trip", label: "Trips" },
            ].map((option) => (
              <Button
                key={option.value}
                variant={filter === option.value ? "default" : "outline"}
                className={filter === option.value ? "gradient-primary shadow-glow" : ""}
                onClick={() => setFilter(option.value as EventType)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredEvents.map((event, index) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <Card
                  key={index}
                  className="overflow-hidden border-primary/20 hover:border-primary transition-all hover:shadow-elegant group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getEventTypeColor(event.type)}>
                        <EventIcon className="h-3 w-3 mr-1" />
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    {event.series && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {event.series}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    <Button className="w-full gradient-primary shadow-glow">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No events found in this category.</p>
            </div>
          )}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Event</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Members get priority registration and exclusive invitations to special tastings.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            <a href="/membership">Become a Member</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;

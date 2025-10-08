import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TwoToneTitle from "@/components/TwoToneTitle";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Partner Name",
      logoSrc: "/assets/sponsors/placeholder.svg",
      blurb: "Crafting excellence since 1890.",
      href: "https://example.com"
    },
    // Add more sponsors as they become available
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="OUR" 
            second="SPONSORS" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            The Western Reserve Circle collaborates with brands that embody sophistication, heritage, and craftsmanship. Each partnership elevates our members' experiences and helps us curate refined, memorable gatherings.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card 
                key={index}
                className="text-center border-primary/20 hover:border-secondary hover:shadow-bold transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                  {sponsor.href ? (
                    <a 
                      href={sponsor.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="h-24 flex items-center justify-center mb-4">
                        <div className="text-4xl font-serif font-bold text-secondary">
                          {sponsor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      {sponsor.blurb && (
                        <p className="text-sm text-muted-foreground">{sponsor.blurb}</p>
                      )}
                    </a>
                  ) : (
                    <>
                      <div className="h-24 flex items-center justify-center mb-4">
                        <div className="text-4xl font-serif font-bold text-secondary">
                          {sponsor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      {sponsor.blurb && (
                        <p className="text-sm text-muted-foreground">{sponsor.blurb}</p>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="font-bold">PARTNER</span>
            <span className="font-normal"> WITH WRC</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            If you would like to collaborate with the Western Reserve Circle, reach out and we will connect.
          </p>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold font-semibold text-lg h-12 px-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;

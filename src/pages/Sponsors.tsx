import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TwoToneTitle from "@/components/TwoToneTitle";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ExternalLink } from "lucide-react";
import grapeGrowersLogo from "@/assets/sponsors/grape-growers.png";
import donAdrianoLogo from "@/assets/sponsors/don-adriano.png";
import majesticLogo from "@/assets/sponsors/majestic.png";
import chateauLogo from "@/assets/sponsors/chateau-des-charmes.png";
import raymondJamesLogo from "@/assets/sponsors/raymond-james.png";
import bollingerLogo from "@/assets/sponsors/bollinger.png";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Ortencio & Associates Wealth Management Group",
      logoSrc: raymondJamesLogo,
      description: "A Raymond James wealth management group providing sophisticated advice and tailored strategies for individuals and institutions, helping clients achieve their financial goals through comprehensive planning.",
      href: "https://www.raymondjames.ca/ortencioandassociates"
    },
    {
      name: "Château des Charmes",
      logoSrc: chateauLogo,
      description: "Founded in 1978 by fifth-generation French winegrower Paul Bosc, Château des Charmes is a distinguished estate winery in Niagara, committed to making fine wine exclusively from estate-grown grapes.",
      href: "https://www.chateaudescharmes.com/"
    },
    {
      name: "Don Adriano 1950",
      logoSrc: donAdrianoLogo,
      description: "A premier collection of tequilas crafted in Jalisco, Mexico. Don Adriano 1950 offers rich, meticulously aged tequilas with captivating blends of sweet agave, oak, and vanilla.",
      href: "https://www.donadriano1950.com/"
    },
    {
      name: "Grape Growers of Ontario",
      logoSrc: grapeGrowersLogo,
      description: "The official organization representing over 500 grape growers cultivating 18,000 acres of vineyards in Ontario, producing quality grapes that make Ontario wines exceptional.",
      href: "https://grapegrowersofontario.com/"
    },
    {
      name: "Majestic Wine Cellars Inc.",
      logoSrc: majesticLogo,
      description: "With over 32 years of experience, Majestic Wine Cellars has established a profound reputation importing the finest wines and spirits from around the globe, fostering outstanding supplier relationships.",
      href: "https://majesticwine.ca/"
    },
    {
      name: "Champagne Bollinger",
      logoSrc: bollingerLogo,
      description: "One of the last great Champagne families, Bollinger has been crafting exceptional champagne since 1829. A house built on quality, tradition, and a singular taste shared among great wine connoisseurs.",
      href: "https://www.champagne-bollinger.com/"
    },
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

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
            The Reserve Circle collaborates with brands that embody sophistication, heritage, and craftsmanship. Each partnership elevates our members' experiences and helps us curate refined, memorable gatherings.
          </p>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <section className="py-32 pb-64 bg-background">
        <div className="container mx-auto px-4">
          <div className="sponsor-carousel-wrapper">
            <div className="sponsor-carousel overflow-x-auto md:overflow-x-visible scroll-smooth snap-x snap-mandatory hide-scrollbar">
              <div className="sponsor-track">
                {duplicatedSponsors.map((sponsor, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button className="sponsor-item snap-center bg-transparent border-0 p-0">
                        <img
                          src={sponsor.logoSrc}
                          alt={`${sponsor.name} logo`}
                          className="h-32 w-auto object-contain transition-all duration-300 active:scale-110"
                        />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-[90vw] md:w-96 border-2 bg-background shadow-xl max-h-[400px] overflow-y-auto" 
                      style={{ borderColor: 'hsl(var(--wrc-gold))' }}
                      sideOffset={15}
                      align="center"
                    >
                      <div className="space-y-3 p-2">
                        <h4 className="font-bold text-lg" style={{ color: 'hsl(var(--wrc-purple))' }}>
                          {sponsor.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {sponsor.description}
                        </p>
                        <a
                          href={sponsor.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                          style={{ color: 'hsl(var(--wrc-gold))' }}
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sponsor-carousel-wrapper {
          position: relative;
        }
        
        .sponsor-carousel {
          width: 100%;
          position: relative;
        }
        
        .sponsor-track {
          display: flex;
          gap: 4rem;
          width: fit-content;
        }
        
        .sponsor-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 250px;
          padding: 1.5rem 2rem;
          cursor: pointer;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Animation on all devices */
        .sponsor-track {
          animation: scroll 20s linear infinite;
        }
        
        .sponsor-carousel:hover .sponsor-track,
        .sponsor-carousel:active .sponsor-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-track {
            animation: none;
          }
        }
      `}</style>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="font-bold">PARTNER</span>
            <span className="font-normal"> WITH WRC</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            If you would like to collaborate with The Reserve Circle, reach out and we will connect.
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

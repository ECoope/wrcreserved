import { Mail, Phone, Handshake, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TwoToneTitle from "@/components/TwoToneTitle";

const Partnerships = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="PARTNERSHIP" 
            second="OPPORTUNITIES" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Join us in creating exceptional experiences for the next generation of professionals and wine enthusiasts.
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="font-bold">WHY PARTNER</span>
            <span className="font-normal"> WITH WRC</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Targeted Audience",
                description: "Connect with driven, ambitious university students and young professionals who value quality, sophistication, and meaningful experiences.",
              },
              {
                icon: Users,
                title: "Engaged Community",
                description: "Our members are actively engaged, attending exclusive events and building lasting connections within our refined network.",
              },
              {
                icon: TrendingUp,
                title: "Brand Alignment",
                description: "Align your brand with values of excellence, refinement, and professional development in an intimate, high-touch environment.",
              },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center border-primary/20 hover:border-secondary transition-all hover:shadow-bold animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="font-bold">PARTNERSHIP</span>
            <span className="font-normal"> OPTIONS</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-primary/20 hover:shadow-bold transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Event Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sponsor exclusive wine tastings, educational workshops, and networking events. Your brand will be prominently featured at our curated gatherings, connecting directly with engaged attendees in sophisticated settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-bold transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Product Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Showcase your wines, spirits, or related products to our discerning members. We feature partner products at events and provide opportunities for tastings, education, and direct member engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-bold transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Alliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop a long-term partnership with WRC. Strategic partners gain ongoing visibility, collaborative event planning, and sustained engagement with our growing community of young professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-bold transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Custom Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Have a unique idea? We're open to creative partnership proposals that align with our mission and values. Let's discuss how we can collaborate in meaningful ways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="font-bold">LET'S</span>
              <span className="font-normal"> COLLABORATE</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              For partnership and sponsorship inquiries, contact your personal inquiry below.
            </p>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a 
                    href="mailto:andrewmcleod127@gmail.com" 
                    className="text-lg hover:text-secondary transition-colors"
                  >
                    andrewmcleod127@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a 
                    href="tel:+17054277891" 
                    className="text-lg hover:text-secondary transition-colors"
                  >
                    (705) 427-7891
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;

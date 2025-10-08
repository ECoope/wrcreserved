import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import TwoToneTitle from "@/components/TwoToneTitle";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.topic || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 business days.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      topic: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="GET IN" 
            second="TOUCH" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Questions, partnerships, or press inquiries? Drop us a line. We'll get back within 2 business days.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 border-primary/20 shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@uwo.ca"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Select
                      value={formData.topic}
                      onValueChange={(value) => setFormData({ ...formData, topic: value })}
                      required
                    >
                      <SelectTrigger id="topic">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Membership Question</SelectItem>
                        <SelectItem value="events">Event Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="gradient-primary shadow-glow w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">General Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:wreservecircle@outlook.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        wreservecircle@outlook.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Personal & Immediate Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:andrewmcleod127@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        andrewmcleod127@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+17054277891"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (705) 427-7891
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        Western University<br />
                        University Community Centre<br />
                        London, ON N6A 3K7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Monday - Friday:</strong> 10am - 4pm</p>
                    <p><strong>Events:</strong> Evenings & Weekends</p>
                    <p className="text-sm pt-2 border-t border-primary/20">
                      * Response time: Within 2 business days
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-wine/10 to-amber/10">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Partnership Inquiries</strong> Interested in collaborating with the Western Reserve Circle? We would love to hear from you. Select Partnership Opportunity above.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
            <span className="font-bold">FIND US ON</span>
            <span className="font-normal"> CAMPUS</span>
          </h2>
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-elegant">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-xl font-semibold mb-2">University Community Centre</p>
                <p>Western University, London, Ontario</p>
                <p className="text-sm mt-4">Map integration coming soon</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

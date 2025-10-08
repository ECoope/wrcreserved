import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import TwoToneTitle from "@/components/TwoToneTitle";
import { Send } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    westernEmail: "",
    program: "",
    year: "",
    whyJoin: "",
    linkedinUrl: "",
    tastingExperience: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.westernEmail || !formData.program || !formData.year || !formData.whyJoin || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and accept the consent statement.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Configure submission handler (Lovable form action or POST endpoint)
    console.log("Application submitted:", formData);

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will review your application and be in touch soon.",
    });

    setFormData({
      fullName: "",
      westernEmail: "",
      program: "",
      year: "",
      whyJoin: "",
      linkedinUrl: "",
      tastingExperience: "",
      consent: false,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TwoToneTitle 
            first="APPLY FOR" 
            second="MEMBERSHIP" 
            className="text-5xl md:text-7xl mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Join an exclusive community dedicated to cultivating sophistication through wine and beverage education.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-primary/20 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl">Membership Application</CardTitle>
              <CardDescription className="text-base">
                Tell us about yourself and why you want to join The Reserve Circle.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="westernEmail">Western Email *</Label>
                  <Input
                    id="westernEmail"
                    type="email"
                    placeholder="yourname@uwo.ca"
                    value={formData.westernEmail}
                    onChange={(e) => setFormData({ ...formData, westernEmail: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="program">Program *</Label>
                    <Input
                      id="program"
                      placeholder="e.g., Business, Engineering"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Select
                      value={formData.year}
                      onValueChange={(value) => setFormData({ ...formData, year: value })}
                      required
                    >
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">First Year</SelectItem>
                        <SelectItem value="2">Second Year</SelectItem>
                        <SelectItem value="3">Third Year</SelectItem>
                        <SelectItem value="4">Fourth Year</SelectItem>
                        <SelectItem value="5+">Fifth Year+</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whyJoin">Why do you want to join The Reserve Circle? *</Label>
                  <Textarea
                    id="whyJoin"
                    placeholder="Tell us what draws you to WRC and what you hope to gain from membership..."
                    rows={5}
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn URL (Optional)</Label>
                  <Input
                    id="linkedinUrl"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tastingExperience">Past Tasting Experience (Optional)</Label>
                  <Textarea
                    id="tastingExperience"
                    placeholder="Share any prior experience with wine or beverage tastings, formal education, or relevant interests..."
                    rows={4}
                    value={formData.tastingExperience}
                    onChange={(e) => setFormData({ ...formData, tastingExperience: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to The Reserve Circle storing and using my information for membership consideration and communication purposes. I understand that I must be 19+ to attend events serving alcohol.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-bold w-full md:w-auto font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  Apply
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Apply;

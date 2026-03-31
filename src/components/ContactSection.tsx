import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  { icon: Phone, label: "8825950414", href: "tel:8825950414" },
  { icon: Mail, label: "sandhiyar172006@gmail.com", href: "mailto:sandhiyar172006@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sandhiya" },
  { icon: Github, label: "GitHub", href: "https://github.com/sandhiya" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <ScrollReveal>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              Cont<span className="text-primary">act</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm">
                Feel free to reach out for collaborations, opportunities, or a friendly chat!
              </p>
              <div className="space-y-3">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <Card className="bg-card border border-primary/10 glow-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-muted border-primary/10 focus:border-primary/40" />
                  <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-muted border-primary/10 focus:border-primary/40" />
                  <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required className="bg-muted border-primary/10 focus:border-primary/40" />
                  <Button type="submit" className="w-full gap-2 glow-box">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Shield, Cpu, Network, Lock, CheckCircle, Clock, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const startAssessment = () => {
    navigate("/assessment");
  };

  const features = [
    {
      icon: Shield,
      title: "Psychometric Analysis",
      description: "Evaluate your psychological fit for IoT security roles"
    },
    {
      icon: Cpu,
      title: "Technical Assessment", 
      description: "Test your knowledge of IoT protocols and security fundamentals"
    },
    {
      icon: Network,
      title: "WISCAR Framework",
      description: "Comprehensive readiness analysis across 6 key dimensions"
    },
    {
      icon: Lock,
      title: "Personalized Results",
      description: "Get tailored career guidance and learning recommendations"
    }
  ];

  const roles = [
    "IoT Security Analyst",
    "Embedded Security Engineer", 
    "Penetration Tester (IoT)",
    "Cybersecurity Architect",
    "Compliance Analyst"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              FutureFit Readiness Assessment™
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Should I Learn to Become an
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              IoT Security Engineer?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover your potential in the rapidly growing field of IoT security through our comprehensive AI-powered assessment
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-6 text-lg font-semibold"
                onClick={startAssessment}
              >
                Start Assessment
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>20-30 minutes</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {roles.map((role, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our assessment evaluates multiple dimensions to provide you with comprehensive career guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">What You'll Discover</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">About IoT Security</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Securing billions of interconnected devices and networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Preventing data breaches and physical security risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Risk analysis, encryption, and vulnerability assessment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Your Fit Assessment</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Psychological alignment with security roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Technical readiness and skill gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Personalized learning pathway recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Discover Your Future?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in IoT security. Our assessment will provide you with clear guidance on your potential and next steps.
          </p>
          
          <Button 
            size="lg" 
            className="btn-hero px-12 py-6 text-xl font-semibold"
            onClick={startAssessment}
          >
            Begin Your Assessment
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>10,000+ assessed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
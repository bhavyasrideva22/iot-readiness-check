import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  Shield, 
  Network, 
  Users, 
  Clock,
  CheckCircle,
  Play,
  Star
} from "lucide-react";

const LearningPath = () => {
  const navigate = useNavigate();

  const learningStages = [
    {
      id: "beginner",
      title: "Foundation Stage",
      description: "Build your core knowledge in networking, programming, and cybersecurity basics",
      duration: "8-12 weeks",
      difficulty: "Beginner",
      modules: [
        { name: "Networking Fundamentals", duration: "2 weeks", icon: Network },
        { name: "Python Programming for Security", duration: "3 weeks", icon: Code },
        { name: "Cybersecurity Principles", duration: "2 weeks", icon: Shield },
        { name: "IoT Architecture Overview", duration: "1 week", icon: BookOpen }
      ],
      color: "border-secondary"
    },
    {
      id: "intermediate", 
      title: "Specialization Stage",
      description: "Dive deep into IoT-specific security protocols, cryptography, and embedded systems",
      duration: "10-14 weeks",
      difficulty: "Intermediate",
      modules: [
        { name: "IoT Communication Protocols (MQTT, CoAP)", duration: "3 weeks", icon: Network },
        { name: "Cryptography & Encryption Methods", duration: "3 weeks", icon: Shield },
        { name: "Embedded System Security", duration: "4 weeks", icon: Code },
        { name: "Wireless Security (WiFi, Bluetooth, Zigbee)", duration: "2 weeks", icon: Network }
      ],
      color: "border-primary"
    },
    {
      id: "advanced",
      title: "Practical Application Stage", 
      description: "Hands-on penetration testing, incident response, and real-world IoT security projects",
      duration: "12-16 weeks",
      difficulty: "Advanced",
      modules: [
        { name: "IoT Penetration Testing", duration: "4 weeks", icon: Shield },
        { name: "Vulnerability Assessment Tools", duration: "3 weeks", icon: Code },
        { name: "Incident Response for IoT", duration: "3 weeks", icon: Network },
        { name: "Capstone Security Project", duration: "4 weeks", icon: BookOpen }
      ],
      color: "border-accent"
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      level: "Entry",
      duration: "3-6 months prep",
      rating: 4.5
    },
    {
      name: "GIAC IoT Security Professional",
      provider: "SANS/GIAC", 
      level: "Professional",
      duration: "6-9 months prep",
      rating: 4.8
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      provider: "EC-Council",
      level: "Intermediate",
      duration: "4-6 months prep", 
      rating: 4.3
    }
  ];

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/results")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Results
            </Button>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Personalized Learning Path
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Your IoT Security Engineering Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive, step-by-step curriculum designed specifically for your learning needs and career goals
            </p>
          </div>
        </div>

        {/* Learning Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">3-Stage Learning Timeline</h2>
          
          <div className="space-y-8">
            {learningStages.map((stage, stageIndex) => (
              <Card key={stage.id} className={`glass-card border-2 ${stage.color}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{stageIndex + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{stage.title}</CardTitle>
                        <p className="text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {stage.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {stage.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stage.modules.map((module, moduleIndex) => {
                      const Icon = module.icon;
                      return (
                        <div key={moduleIndex} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm mb-1">{module.name}</h4>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {module.duration}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Progress value={stageIndex === 0 ? 25 : 0} className="h-1 flex-1 mr-3" />
                            <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                              <Play className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Recommended Certifications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                    <Badge variant="outline">{cert.level}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(cert.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">{cert.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    {cert.duration}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community & Resources */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Community & Additional Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Learning Communities</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    IoT Security Community Forums
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Cybersecurity Discord Servers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    LinkedIn Security Groups
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Hands-on Labs</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Raspberry Pi Security Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Virtual IoT Environments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Capture The Flag (CTF) Events
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Essential Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Wireshark for Network Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Metasploit for Penetration Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Kali Linux Security Distribution
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin with the Foundation Stage and build your expertise step by step. Each module includes hands-on exercises and real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Foundation Stage
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
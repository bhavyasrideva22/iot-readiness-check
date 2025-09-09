import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, 
  Target, 
  Brain, 
  Code, 
  BookOpen, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Download,
  Share2,
  Home
} from "lucide-react";

interface AssessmentResults {
  overallScore: number;
  recommendation: "Yes" | "Maybe" | "No";
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
  topRoles: string[];
  alternativeRoles: string[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  // Mock calculation - in real app this would be processed by AI
  const calculateResults = (): AssessmentResults => {
    const answerCount = Object.keys(answers).length;
    const psychometricScore = Math.min(75 + (answerCount * 2), 95);
    const technicalScore = Math.min(65 + (answerCount * 3), 90);
    const overallScore = Math.round((psychometricScore + technicalScore) / 2);
    
    let recommendation: "Yes" | "Maybe" | "No" = "Maybe";
    if (overallScore >= 75) recommendation = "Yes";
    else if (overallScore < 50) recommendation = "No";

    return {
      overallScore,
      recommendation,
      psychometricScore,
      technicalScore,
      wiscarScores: {
        will: 80,
        interest: 85,
        skill: 60,
        cognitive: 70,
        ability: 78,
        realWorld: 65
      },
      strengths: [
        "Strong analytical thinking and problem-solving skills",
        "High curiosity and motivation for cybersecurity",
        "Good stress tolerance under pressure situations",
        "Systematic approach to complex technical challenges"
      ],
      improvements: [
        "Strengthen networking fundamentals and IoT protocols",
        "Gain hands-on experience with security testing tools",
        "Develop deeper understanding of encryption methods",
        "Practice with real IoT devices and environments"
      ],
      nextSteps: [
        "Enroll in 'IoT Security Fundamentals' course",
        "Set up a home lab with Raspberry Pi for hands-on practice",
        "Learn tools like Wireshark, Metasploit, and Kali Linux",
        "Join IoT security communities and forums",
        "Consider CompTIA Security+ certification"
      ],
      topRoles: [
        "IoT Security Analyst",
        "Embedded Security Engineer",
        "Penetration Tester (IoT)",
        "Cybersecurity Architect"
      ],
      alternativeRoles: [
        "Network Security Engineer",
        "Cloud Security Analyst",
        "Software Security Developer"
      ]
    };
  };

  const results = calculateResults();

  const getRecommendationColor = (rec: string) => {
    switch(rec) {
      case "Yes": return "text-secondary";
      case "Maybe": return "text-accent";
      case "No": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getRecommendationMessage = (rec: string) => {
    switch(rec) {
      case "Yes": return "You show strong potential for a successful career in IoT Security Engineering!";
      case "Maybe": return "You have good foundational qualities but may need additional preparation.";
      case "No": return "Consider exploring alternative cybersecurity roles that better match your profile.";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Assessment Complete
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Your FutureFit Results</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's your comprehensive career readiness analysis
          </p>
        </div>

        {/* Overall Recommendation */}
        <Card className="glass-card mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur flex items-center justify-center">
                <Trophy className={`w-10 h-10 ${getRecommendationColor(results.recommendation)}`} />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">
                <span className={getRecommendationColor(results.recommendation)}>
                  {results.recommendation}
                </span>
                , You Should Pursue IoT Security Engineering
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {getRecommendationMessage(results.recommendation)}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold">{results.overallScore}%</span>
                <span className="text-muted-foreground">Overall Confidence Score</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Score Breakdown */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Score Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Psychometric Fit
                  </span>
                  <span className="font-semibold">{results.psychometricScore}%</span>
                </div>
                <Progress value={results.psychometricScore} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-secondary" />
                    Technical Readiness
                  </span>
                  <span className="font-semibold">{results.technicalScore}%</span>
                </div>
                <Progress value={results.technicalScore} className="h-2" />
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">WISCAR Framework Analysis</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(results.wiscarScores).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium">{value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Roles */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                Recommended Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Top Matching Roles</h4>
                  <div className="space-y-2">
                    {results.topRoles.map((role, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-muted-foreground mb-2">Alternative Options</h4>
                  <div className="space-y-2">
                    {results.alternativeRoles.map((role, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {results.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Improvement Areas */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {results.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Your Personalized Learning Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.nextSteps.map((step, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-hero px-8 py-6"
            onClick={() => navigate("/learning-path")}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Start Learning Path
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Brain, Code, Target, Lightbulb } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Question {
  id: string;
  category: string;
  type: string;
  question: string;
  options: { value: string; label: string }[];
  section: "introduction" | "psychometric" | "technical" | "wiscar";
}

interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, string>;
  sectionProgress: Record<string, number>;
}

const Assessment = () => {
  const navigate = useNavigate();
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    sectionProgress: {}
  });

  const sections = [
    { name: "Introduction", icon: Lightbulb, color: "text-accent" },
    { name: "Psychometric", icon: Brain, color: "text-primary" },
    { name: "Technical", icon: Code, color: "text-secondary" }, 
    { name: "WISCAR", icon: Target, color: "text-primary-glow" }
  ];

  const questions: Question[] = [
    // Introduction Section
    {
      id: "intro_1",
      category: "career_interest",
      type: "understanding",
      question: "How familiar are you with IoT (Internet of Things) devices and systems?",
      options: [
        { value: "expert", label: "Very familiar - I work with IoT systems regularly" },
        { value: "intermediate", label: "Moderately familiar - I understand the basics" },
        { value: "beginner", label: "Somewhat familiar - I've heard about it" },
        { value: "novice", label: "Not familiar - This is new to me" }
      ],
      section: "introduction"
    },
    {
      id: "intro_2", 
      category: "motivation",
      type: "interest",
      question: "What interests you most about cybersecurity?",
      options: [
        { value: "problem_solving", label: "Solving complex technical puzzles" },
        { value: "protection", label: "Protecting people and organizations from threats" },
        { value: "continuous_learning", label: "Staying ahead of evolving threats" },
        { value: "ethical_hacking", label: "Ethical hacking and penetration testing" }
      ],
      section: "introduction"
    },

    // Psychometric Section
    {
      id: "psych_1",
      category: "personality", 
      type: "conscientiousness",
      question: "When working on a complex project, I prefer to:",
      options: [
        { value: "detailed_plan", label: "Create a detailed plan and follow it systematically" },
        { value: "flexible_approach", label: "Start with a rough plan and adapt as I go" },
        { value: "dive_in", label: "Dive in immediately and figure it out along the way" },
        { value: "research_first", label: "Research extensively before starting any work" }
      ],
      section: "psychometric"
    },
    {
      id: "psych_2",
      category: "stress_tolerance",
      type: "resilience", 
      question: "When facing a security incident under pressure, I typically:",
      options: [
        { value: "stay_calm", label: "Remain calm and work through the problem methodically" },
        { value: "get_energized", label: "Feel energized and motivated by the challenge" },
        { value: "seek_help", label: "Quickly involve team members and delegate tasks" },
        { value: "prioritize", label: "Focus on the most critical issues first" }
      ],
      section: "psychometric"
    },
    {
      id: "psych_3",
      category: "curiosity",
      type: "learning_drive",
      question: "How do you typically respond to new technologies or security threats?",
      options: [
        { value: "eager_explore", label: "I'm eager to explore and understand them immediately" },
        { value: "cautious_research", label: "I research carefully before engaging with them" },
        { value: "wait_proven", label: "I wait until they're proven and well-documented" },
        { value: "learn_needed", label: "I learn about them only when necessary for my work" }
      ],
      section: "psychometric"
    },

    // Technical Section
    {
      id: "tech_1",
      category: "networking",
      type: "knowledge",
      question: "Which protocol is commonly used for lightweight communication in IoT devices?",
      options: [
        { value: "mqtt", label: "MQTT (Message Queuing Telemetry Transport)" },
        { value: "http", label: "HTTP (Hypertext Transfer Protocol)" },
        { value: "ftp", label: "FTP (File Transfer Protocol)" },
        { value: "smtp", label: "SMTP (Simple Mail Transfer Protocol)" }
      ],
      section: "technical"
    },
    {
      id: "tech_2",
      category: "security",
      type: "concepts",
      question: "What is the primary security concern with default passwords on IoT devices?",
      options: [
        { value: "easy_access", label: "They provide easy unauthorized access to attackers" },
        { value: "performance", label: "They slow down device performance" },
        { value: "battery_life", label: "They drain battery life faster" },
        { value: "compatibility", label: "They cause compatibility issues with networks" }
      ],
      section: "technical"
    },
    {
      id: "tech_3",
      category: "encryption",
      type: "application",
      question: "In IoT security, what is the purpose of implementing AES encryption?",
      options: [
        { value: "data_protection", label: "To protect data confidentiality during transmission and storage" },
        { value: "device_authentication", label: "To authenticate devices on the network" },
        { value: "network_routing", label: "To improve network routing efficiency" },
        { value: "power_management", label: "To optimize power consumption" }
      ],
      section: "technical"
    },

    // WISCAR Section  
    {
      id: "wiscar_will",
      category: "will",
      type: "persistence",
      question: "When debugging a complex IoT security vulnerability that takes weeks to resolve, I:",
      options: [
        { value: "persist_enjoy", label: "Persist with determination and actually enjoy the challenge" },
        { value: "persist_duty", label: "Continue working on it because it's my responsibility" },
        { value: "seek_help_continue", label: "Seek help from others but continue my efforts" },
        { value: "prefer_switch", label: "Prefer to switch to other tasks when possible" }
      ],
      section: "wiscar"
    },
    {
      id: "wiscar_interest",
      category: "interest", 
      type: "engagement",
      question: "Which IoT security activity would you find most engaging?",
      options: [
        { value: "penetration_testing", label: "Conducting penetration tests on IoT networks" },
        { value: "firmware_analysis", label: "Analyzing firmware for security vulnerabilities" },
        { value: "incident_response", label: "Responding to IoT security incidents" },
        { value: "policy_development", label: "Developing security policies and procedures" }
      ],
      section: "wiscar"
    },
    {
      id: "wiscar_skill",
      category: "skill",
      type: "current_ability",
      question: "How would you rate your current programming skills?",
      options: [
        { value: "advanced", label: "Advanced - I can code complex applications in multiple languages" },
        { value: "intermediate", label: "Intermediate - I'm comfortable with basic programming tasks" },
        { value: "beginner", label: "Beginner - I understand basics but need more practice" },
        { value: "none", label: "No programming experience" }
      ],
      section: "wiscar"
    }
  ];

  const sectionQuestions = questions.filter(q => q.section === sections[assessmentState.currentSection]?.name.toLowerCase());
  const currentQuestion = sectionQuestions[assessmentState.currentQuestion];
  const totalProgress = ((assessmentState.currentSection * 25) + (assessmentState.currentQuestion / sectionQuestions.length * 25));

  const handleAnswer = (value: string) => {
    setAssessmentState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: value
      }
    }));
  };

  const nextQuestion = () => {
    if (assessmentState.currentQuestion < sectionQuestions.length - 1) {
      setAssessmentState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else if (assessmentState.currentSection < sections.length - 1) {
      setAssessmentState(prev => ({
        ...prev,
        currentSection: prev.currentSection + 1,
        currentQuestion: 0
      }));
    } else {
      // Assessment complete - navigate to results
      navigate("/results", { state: { answers: assessmentState.answers } });
    }
  };

  const previousQuestion = () => {
    if (assessmentState.currentQuestion > 0) {
      setAssessmentState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    } else if (assessmentState.currentSection > 0) {
      const prevSectionQuestions = questions.filter(q => 
        q.section === sections[assessmentState.currentSection - 1]?.name.toLowerCase()
      );
      setAssessmentState(prev => ({
        ...prev,
        currentSection: prev.currentSection - 1,
        currentQuestion: prevSectionQuestions.length - 1
      }));
    }
  };

  const canProceed = currentQuestion && assessmentState.answers[currentQuestion.id];
  const isFirstQuestion = assessmentState.currentSection === 0 && assessmentState.currentQuestion === 0;

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Badge variant="outline">
              Question {assessmentState.currentQuestion + 1} of {sectionQuestions.length}
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Assessment Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(totalProgress)}%</span>
            </div>
            <Progress value={totalProgress} className="h-2" />
          </div>

          {/* Section Indicators */}
          <div className="flex justify-center gap-4 mb-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = index === assessmentState.currentSection;
              const isCompleted = index < assessmentState.currentSection;
              
              return (
                <div key={section.name} className="flex items-center gap-2">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                    ${isCompleted ? 'bg-secondary border-secondary text-secondary-foreground' : 
                      isActive ? 'border-primary bg-primary/10 text-primary' : 
                      'border-muted-foreground/30 text-muted-foreground'}
                  `}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {section.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <Card className="glass-card mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="px-3 py-1">
                  {sections[assessmentState.currentSection].name}
                </Badge>
                <Badge variant="outline" className="px-3 py-1 capitalize">
                  {currentQuestion.type.replace('_', ' ')}
                </Badge>
              </div>
              <CardTitle className="text-2xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={assessmentState.answers[currentQuestion.id] || ""} 
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={option.value} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 text-base leading-relaxed cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={previousQuestion}
            disabled={isFirstQuestion}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button 
            onClick={nextQuestion}
            disabled={!canProceed}
            className="flex items-center gap-2 btn-hero"
          >
            {assessmentState.currentSection === sections.length - 1 && 
             assessmentState.currentQuestion === sectionQuestions.length - 1 ? 
             "Complete Assessment" : "Next"
            }
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
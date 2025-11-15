import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Users, Zap, Globe, Target, Award } from "lucide-react";
import { Link } from "wouter";

const strengths = [
  {
    icon: Zap,
    title: "Aligns with Core Vision",
    description: "Directly supports the vision of creating the world's first fully autonomous, agentic insurance agency by positioning as a pioneer and innovator.",
  },
  {
    icon: TrendingUp,
    title: "Market Differentiation",
    description: "Unique and memorable without being gimmicky. Stands out in crowded insurtech landscape while remaining professional.",
  },
  {
    icon: Globe,
    title: "Scalability & Growth",
    description: "Works equally well in California, other U.S. states, and international markets. Critical for VC appeal and expansion.",
  },
  {
    icon: Target,
    title: "Multi-Line Flexibility",
    description: "Seamlessly works across Property & Casualty, Life, and Health insurance without feeling too casual or specialized.",
  },
  {
    icon: Users,
    title: "Technology Leadership",
    description: "Communicates innovation and forward-thinking, essential for attracting tech-savvy customers and top AI talent.",
  },
  {
    icon: Award,
    title: "Competitive Positioning",
    description: "Positions alongside successful modern insurtech brands like Lemonade, Root, and Hippo rather than traditional carriers.",
  },
];

const alternatives = [
  {
    name: "SoCal Cover",
    domain: "socalcover.com",
    available: true,
    whenToChoose: "If strategy prioritizes rapid regional market penetration in Southern California over national expansion",
    strengths: ["Immediate local recognition", "Capitalizes on CA market instability", "Approachable brand personality"],
    limitations: ["Geographic constraint limits VC appeal", "Casual tone may not suit all insurance lines", "Requires rebranding for expansion"],
  },
  {
    name: "Axiom Assurance",
    domain: "axiomassurance.com",
    available: true,
    whenToChoose: "If strategy prioritizes traditional insurance buyers with AI backend operating behind the scenes",
    strengths: ["Strong B2B appeal", "Traditional credibility", "Appeals to risk-averse customers"],
    limitations: ["Lacks differentiation in crowded market", "Doesn't emphasize technological innovation", "May not resonate with younger demographics"],
  },
];

export default function Recommendation() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <Badge variant="default" className="mb-4">
            <CheckCircle2 size={16} className="mr-1" />
            Primary Recommendation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nexura Insurance
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            nexurainsurance.com • Available ✅
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The optimal brand choice based on comprehensive market analysis, strategic alignment, and growth potential for an autonomous, AI-driven insurance agency.
          </p>
        </div>

        {/* Logo Showcase */}
        <Card className="mb-16 border-2 border-primary">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <img
                src="/logos/nexura_logo_modern.png"
                alt="Nexura Insurance Logo"
                className="w-80 h-80 object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Shield + Forward Arrow Design</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This logo most effectively communicates the dual promise of protection and progress. The gradient from deep blue to cyan creates visual dynamism that differentiates from traditional insurance logos.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Strengths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Nexura Insurance?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{strength.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Strategic Rationale */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Strategic Rationale</CardTitle>
            <CardDescription>
              Why Nexura Insurance represents the optimal balance for long-term success
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Brand-Vision Alignment</h4>
              <p className="text-muted-foreground">
                Nexura Insurance directly supports the vision of creating "the world's first fully autonomous, agentic insurance agency." The brand promises something new and better, aligning with the revolutionary nature of the multi-agent architecture. This ensures brand identity and operational reality reinforce each other.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Venture Capital Appeal</h4>
              <p className="text-muted-foreground">
                The geographic flexibility and technology-forward positioning make Nexura Insurance highly attractive to venture capital investors who prioritize companies with clear paths to national and global scale. The brand supports aggressive expansion and positions the company as a category leader in autonomous insurance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Talent Acquisition</h4>
              <p className="text-muted-foreground">
                Top AI and engineering talent wants to work for companies clearly positioned as technology leaders. Nexura Insurance's innovation-focused brand identity helps attract the specialized expertise needed to build and maintain sophisticated autonomous agent systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">California Market Opportunity</h4>
              <p className="text-muted-foreground">
                While not geographically specific, Nexura Insurance can effectively capitalize on California's market opportunity through targeted messaging. Marketing campaigns can emphasize California headquarters and local expertise while maintaining flexibility for future expansion.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Alternative Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {alternatives.map((alt, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{alt.name}</CardTitle>
                  <CardDescription>
                    {alt.domain} • {alt.available ? "Available ✅" : "Not Available ❌"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-2">When to Choose:</h5>
                    <p className="text-sm text-muted-foreground">{alt.whenToChoose}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Strengths:</h5>
                    <ul className="space-y-1">
                      {alt.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle2 size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {alt.limitations.map((limitation, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Implementation Roadmap</CardTitle>
            <CardDescription>
              Next steps to bring the Nexura Insurance brand to life
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Immediate Next Steps (Week 1-2)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Conduct comprehensive trademark search</li>
                    <li>• Register domain and secure related domains (.com, .io, .ai)</li>
                    <li>• Secure social media handles across all platforms</li>
                    <li>• File trademark applications with USPTO</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Brand Development (Week 3-6)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Finalize visual identity system (logo variations, colors, typography)</li>
                    <li>• Develop brand voice and messaging framework</li>
                    <li>• Create comprehensive brand style guide</li>
                    <li>• Design initial brand applications (business cards, templates)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Integration (Week 7-10)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Update technical architecture with brand name</li>
                    <li>• Configure domain and email infrastructure</li>
                    <li>• Create agent personality guidelines aligned with brand voice</li>
                    <li>• Design user interface elements reflecting brand identity</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Market Launch (Week 11-16)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Develop go-to-market messaging for target segments</li>
                    <li>• Create marketing collateral and website</li>
                    <li>• Establish brand presence through social media</li>
                    <li>• Develop PR strategy and investor pitch materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore More?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Review all logo concepts, dive into the market research data, or explore the complete brand analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/logos">
                  <Button size="lg">View All Logos</Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline">Market Research</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

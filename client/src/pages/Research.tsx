import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const brandComparisonData = [
  { criteria: "Innovation Signal", nexura: 5, socalcover: 3, axiom: 3 },
  { criteria: "Trust/Credibility", nexura: 4, socalcover: 3, axiom: 5 },
  { criteria: "Memorability", nexura: 4, socalcover: 5, axiom: 3 },
  { criteria: "Scalability", nexura: 5, socalcover: 2, axiom: 5 },
  { criteria: "Regional Fit (CA)", nexura: 3, socalcover: 5, axiom: 3 },
  { criteria: "AI/Tech Alignment", nexura: 5, socalcover: 2, axiom: 3 },
  { criteria: "Differentiation", nexura: 4, socalcover: 4, axiom: 2 },
  { criteria: "Multi-Line Flexibility", nexura: 5, socalcover: 3, axiom: 5 },
  { criteria: "Talent Attraction", nexura: 5, socalcover: 3, axiom: 3 },
  { criteria: "VC Appeal", nexura: 5, socalcover: 2, axiom: 4 },
];

const radarData = [
  { subject: "Innovation", nexura: 5, socalcover: 3, axiom: 3, fullMark: 5 },
  { subject: "Trust", nexura: 4, socalcover: 3, axiom: 5, fullMark: 5 },
  { subject: "Scalability", nexura: 5, socalcover: 2, axiom: 5, fullMark: 5 },
  { subject: "Market Fit", nexura: 3, socalcover: 5, axiom: 3, fullMark: 5 },
  { subject: "Tech Alignment", nexura: 5, socalcover: 2, axiom: 3, fullMark: 5 },
  { subject: "VC Appeal", nexura: 5, socalcover: 2, axiom: 4, fullMark: 5 },
];

const marketInsights = [
  {
    title: "California Insurance Market",
    value: "$1.35-2.00T",
    description: "Coverage gap in California's private homeowners insurance market",
    trend: "opportunity",
  },
  {
    title: "Insurtech Startups",
    value: "68+",
    description: "Active insurtech companies in California creating innovation-friendly environment",
    trend: "competitive",
  },
  {
    title: "Major Carriers Limiting Policies",
    value: "7 of 12",
    description: "Largest insurance companies have limited new policies since 2022",
    trend: "opportunity",
  },
];

export default function Research() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Market Research & Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights from comprehensive analysis of the insurance industry, insurtech landscape, and California market dynamics.
          </p>
        </div>

        {/* Market Insights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketInsights.map((insight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">
                  {insight.value}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {insight.description}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  insight.trend === "opportunity" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}>
                  {insight.trend === "opportunity" ? "Market Opportunity" : "Competitive Landscape"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Positioning Matrix */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Brand Positioning Matrix</CardTitle>
            <CardDescription>
              Comparative analysis across 10 key criteria (1-5 scale, 5 being highest)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <ResponsiveContainer width="100%" height={500}>
                <BarChart
                  data={brandComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="criteria" 
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    interval={0}
                  />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="nexura" fill="#1E3A8A" name="Nexura Insurance" />
                  <Bar dataKey="socalcover" fill="#06B6D4" name="SoCal Cover" />
                  <Bar dataKey="axiom" fill="#64748B" name="Axiom Assurance" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Radar Chart */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Strategic Positioning Radar</CardTitle>
            <CardDescription>
              Visual comparison of key strategic dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 5]} />
                <Radar name="Nexura Insurance" dataKey="nexura" stroke="#1E3A8A" fill="#1E3A8A" fillOpacity={0.6} />
                <Radar name="SoCal Cover" dataKey="socalcover" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.6} />
                <Radar name="Axiom Assurance" dataKey="axiom" stroke="#64748B" fill="#64748B" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Insurtech Competitive Landscape</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Successful Insurtech Patterns</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Modern, tech-forward names (Lemonade, Root, Hippo)</li>
                  <li>• Clear value propositions (speed, transparency, customization)</li>
                  <li>• Digital-first experiences with clean visual identities</li>
                  <li>• Clearly defined target markets and positioning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Market Positioning</h4>
                <p className="text-sm text-muted-foreground">
                  Nexura Insurance positions alongside modern insurtech brands rather than traditional carriers, appropriate for an AI-first company building the future of autonomous insurance.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>California Market Dynamics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Market Opportunity</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Significant instability in homeowners insurance market</li>
                  <li>• Major carriers limiting new policies creates opportunity</li>
                  <li>• Tech-savvy consumer base comfortable with digital-first services</li>
                  <li>• 68+ insurtech startups create innovation-friendly environment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regulatory Context</h4>
                <p className="text-sm text-muted-foreground">
                  California has stringent requirements including CCPA privacy protections. Multi-agent architecture with dedicated compliance agents aligns well with regulatory needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

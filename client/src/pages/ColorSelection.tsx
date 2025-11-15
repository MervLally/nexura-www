import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Users, Zap, Globe } from "lucide-react";

const colorOptions = [
  {
    name: "Classic Blue",
    image: "/color-options/nexura_classic_blue.png",
    primary: "#1E3A8A",
    secondary: "#3B82F6",
    score: 8.0,
    selected: false,
    strengths: ["Maximum B2B credibility", "Excellent versatility", "Traditional trust"],
    weaknesses: ["Less differentiation", "Crowded blue market"],
    b2b: 9,
    b2c: 7,
    differentiation: 6,
    versatility: 10,
  },
  {
    name: "Tech Gradient",
    image: "/color-options/nexura_tech_gradient.png",
    primary: "#2563EB",
    secondary: "#06B6D4",
    score: 8.3,
    selected: true,
    strengths: ["Exceptional B2C appeal", "Strong differentiation", "Digital-first excellence"],
    weaknesses: ["Gradient complexity in print"],
    b2b: 8,
    b2c: 9,
    differentiation: 9,
    versatility: 7,
  },
  {
    name: "Purple Innovation",
    image: "/color-options/nexura_purple_innovation.png",
    primary: "#7C3AED",
    secondary: "#2563EB",
    score: 8.5,
    selected: false,
    strengths: ["Maximum differentiation", "AI/tech signaling", "Premium positioning"],
    weaknesses: ["Requires consumer education"],
    b2b: 9,
    b2c: 7,
    differentiation: 10,
    versatility: 8,
  },
  {
    name: "Teal Balance",
    image: "/color-options/nexura_teal_balance.png",
    primary: "#14B8A6",
    secondary: "#1E40AF",
    score: 8.3,
    selected: false,
    strengths: ["Balanced B2B/B2C appeal", "Fresh and professional", "Highly versatile"],
    weaknesses: ["Moderate differentiation"],
    b2b: 8,
    b2c: 8,
    differentiation: 8,
    versatility: 9,
  },
  {
    name: "Emerald Growth",
    image: "/color-options/nexura_emerald_growth.png",
    primary: "#059669",
    secondary: "#1E3A8A",
    score: 8.3,
    selected: false,
    strengths: ["Exceptional B2C appeal", "Health/growth associations", "Strong differentiation"],
    weaknesses: ["Lower B2B tech credibility"],
    b2b: 7,
    b2c: 9,
    differentiation: 9,
    versatility: 8,
  },
];

export default function ColorSelection() {
  const selectedOption = colorOptions.find(opt => opt.selected)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="container max-w-6xl">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Color Strategy</Badge>
          <h1 className="text-5xl font-bold mb-6">Nexura Color Selection</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            A comprehensive analysis of five strategic color palettes designed to balance B2B credibility with B2C appeal for the world's first autonomous insurance agency.
          </p>
        </div>
      </div>

      {/* Selected Option Highlight */}
      <div className="container max-w-6xl py-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border-2 border-blue-200 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white text-lg px-4 py-2">
              <CheckCircle2 className="w-5 h-5 mr-2 inline" />
              Selected
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {selectedOption.name}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                The optimal balance of innovation and trust, providing strong differentiation while maintaining insurance credibility.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg" style={{ background: `linear-gradient(135deg, ${selectedOption.primary}, ${selectedOption.secondary})` }}></div>
                  <div>
                    <div className="font-semibold">Primary Gradient</div>
                    <div className="text-sm text-gray-600">{selectedOption.primary} → {selectedOption.secondary}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">{selectedOption.score}</div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-cyan-500">#1</div>
                  <div className="text-sm text-gray-600">For B2C Appeal</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-900 mb-3">Key Strengths:</div>
                {selectedOption.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <img 
                src={selectedOption.image} 
                alt={selectedOption.name}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Selection Criteria */}
      <div className="bg-white py-16">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Tech Gradient?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our selection was based on comprehensive analysis across four key dimensions
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{selectedOption.b2b}/10</div>
              <div className="font-semibold mb-2">B2B Appeal</div>
              <p className="text-sm text-gray-600">Credibility with investors and enterprise partners</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-2">{selectedOption.b2c}/10</div>
              <div className="font-semibold mb-2">B2C Appeal</div>
              <p className="text-sm text-gray-600">Attraction to future insurance customers</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">{selectedOption.differentiation}/10</div>
              <div className="font-semibold mb-2">Differentiation</div>
              <p className="text-sm text-gray-600">Uniqueness in the insurance market</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">{selectedOption.versatility}/10</div>
              <div className="font-semibold mb-2">Versatility</div>
              <p className="text-sm text-gray-600">Performance across all media and contexts</p>
            </Card>
          </div>
        </div>
      </div>

      {/* All Options Comparison */}
      <div className="container max-w-6xl py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">All Color Options Evaluated</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We analyzed five strategic color palettes, each with unique strengths and positioning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colorOptions.map((option) => (
            <Card 
              key={option.name} 
              className={`p-6 hover:shadow-xl transition-all ${option.selected ? 'ring-2 ring-blue-500' : ''}`}
            >
              {option.selected && (
                <Badge className="mb-4 bg-green-500">Selected</Badge>
              )}
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <img 
                  src={option.image} 
                  alt={option.name}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{option.name}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: option.primary }}></div>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: option.secondary }}></div>
                <div className="ml-auto">
                  <div className="text-2xl font-bold text-blue-600">{option.score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <div className="text-gray-600">B2B</div>
                  <div className="font-semibold">{option.b2b}/10</div>
                </div>
                <div>
                  <div className="text-gray-600">B2C</div>
                  <div className="font-semibold">{option.b2c}/10</div>
                </div>
                <div>
                  <div className="text-gray-600">Diff.</div>
                  <div className="font-semibold">{option.differentiation}/10</div>
                </div>
                <div>
                  <div className="text-gray-600">Versatile</div>
                  <div className="font-semibold">{option.versatility}/10</div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-xs font-semibold text-gray-700">Strengths:</div>
                {option.strengths.slice(0, 2).map((strength, idx) => (
                  <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>

              {option.selected && (
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500">
                  View Brand Guidelines
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Decision Rationale */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Decision Rationale</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Balanced Dual-Audience Appeal</h3>
              <p className="text-gray-700">
                The Tech Gradient uniquely balances B2B credibility (8/10) with exceptional B2C appeal (9/10). The deep blue foundation maintains investor and enterprise trust, while the bright cyan creates energy and approachability for future consumers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-cyan-600">Digital-First Excellence</h3>
              <p className="text-gray-700">
                As a technology-first company operating primarily in digital channels, the Tech Gradient performs exceptionally well in web applications, mobile interfaces, and digital marketing—the primary touchpoints for both audiences.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Modern Insurtech Positioning</h3>
              <p className="text-gray-700">
                The gradient treatment clearly positions Nexura within the modern insurtech category rather than traditional insurance, essential for attracting VC investment and top AI talent while differentiating from established carriers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Strong but Accessible Differentiation</h3>
              <p className="text-gray-700">
                Unlike more radical options, Tech Gradient provides strong differentiation (9/10) without requiring extensive consumer education. The blue foundation maintains insurance category connection while cyan adds distinctive personality.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="container max-w-6xl py-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move Forward</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            The Tech Gradient color palette is now implemented across all brand touchpoints and ready for deployment
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View Brand Guidelines
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Download Assets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

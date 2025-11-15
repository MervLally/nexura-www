import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const logoData = {
  nexura: {
    name: "Nexura Insurance",
    tagline: "Next-generation insurance through AI innovation",
    logos: [
      {
        name: "Shield + Forward Arrow",
        path: "/logos/nexura_logo_modern.png",
        description: "Modern design combining protection (shield) with progress (forward arrow). Dynamic blue-to-cyan gradient signals technological sophistication.",
      },
      {
        name: "Geometric Crystalline",
        path: "/logos/nexura_logo_geometric.png",
        description: "Hexagonal structure suggesting technological precision and multi-faceted protection. References the multi-agent architecture.",
      },
      {
        name: "Minimalist 'N' Lettermark",
        path: "/logos/nexura_logo_minimal.png",
        description: "Refined lettermark with subtle protective arch elements. Timeless, scalable design for all applications.",
      },
    ],
  },
  socalcover: {
    name: "SoCal Cover",
    tagline: "Southern California's local insurance expert",
    logos: [
      {
        name: "Sun, Wave & Umbrella",
        path: "/logos/socalcover_logo_coastal.png",
        description: "Combines California sunshine, coastal waves, and protective umbrella. Friendly and approachable design.",
      },
      {
        name: "Palm Tree Shield",
        path: "/logos/socalcover_logo_palm.png",
        description: "Perfect synthesis of California identity (palm tree) and insurance protection (shield). Balanced professionalism.",
      },
      {
        name: "California Coastline",
        path: "/logos/socalcover_logo_modern.png",
        description: "Abstract interpretation of California's coastline with protective arch. Modern and versatile.",
      },
    ],
  },
  axiom: {
    name: "Axiom Assurance",
    tagline: "Fundamental principles, reliable protection",
    logos: [
      {
        name: "Classic Shield with Gold",
        path: "/logos/axiom_logo_classic.png",
        description: "Traditional shield emblem with geometric elements. Navy and gold color scheme conveys prestige and credibility.",
      },
      {
        name: "Architectural Pillars",
        path: "/logos/axiom_logo_modern.png",
        description: "Classical columns representing foundational strength. Communicates institutional stability and trust.",
      },
      {
        name: "Minimalist 'A' Lettermark",
        path: "/logos/axiom_logo_minimal.png",
        description: "Refined lettermark with subtle protective elements. Balance between classic insurance branding and modern design.",
      },
    ],
  },
};

export default function Logos() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Logo Concepts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nine professional logo designs across three brand options, each exploring different visual styles and strategic positioning.
          </p>
        </div>

        {/* Tabs for Brand Selection */}
        <Tabs defaultValue="nexura" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="nexura">Nexura Insurance</TabsTrigger>
            <TabsTrigger value="socalcover">SoCal Cover</TabsTrigger>
            <TabsTrigger value="axiom">Axiom Assurance</TabsTrigger>
          </TabsList>

          {Object.entries(logoData).map(([key, brand]) => (
            <TabsContent key={key} value={key} className="animate-fadeIn">
              {/* Brand Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">{brand.name}</h2>
                <p className="text-lg text-muted-foreground">{brand.tagline}</p>
                {key === "nexura" && (
                  <Badge variant="default" className="mt-4">
                    <CheckCircle2 size={16} className="mr-1" />
                    Recommended
                  </Badge>
                )}
              </div>

              {/* Logo Grid */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {brand.logos.map((logo, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{logo.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-blue-subtle rounded-lg p-8 mb-4 flex items-center justify-center min-h-[300px]">
                        <img
                          src={logo.path}
                          alt={`${brand.name} - ${logo.name}`}
                          className="w-full h-auto max-w-[250px] object-contain"
                        />
                      </div>
                      <CardDescription className="text-sm">
                        {logo.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Side-by-Side Comparison */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Side-by-Side Comparison
                </h3>
                <Card className="max-w-6xl mx-auto">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-3 gap-4">
                      {brand.logos.map((logo, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-gradient-blue-subtle rounded-lg p-4 mb-3 flex items-center justify-center min-h-[200px]">
                            <img
                              src={logo.path}
                              alt={`${brand.name} - ${logo.name}`}
                              className="w-full h-auto max-w-[150px] object-contain"
                            />
                          </div>
                          <p className="text-sm font-medium">{logo.name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* All Brands Comparison */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Compare All Brands
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(logoData).map(([key, brand]) => (
              <Card key={key} className={key === "nexura" ? "border-2 border-primary" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {brand.name}
                    {key === "nexura" && (
                      <Badge variant="default" className="ml-2">
                        <CheckCircle2 size={14} className="mr-1" />
                        Recommended
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>{brand.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-blue-subtle rounded-lg p-6 flex items-center justify-center min-h-[250px]">
                    <img
                      src={brand.logos[0].path}
                      alt={`${brand.name} primary logo`}
                      className="w-full h-auto max-w-[200px] object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

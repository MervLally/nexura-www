import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 md:py-32">
        <div className="container animate-fadeIn">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nexura Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Brand Research & Identity Showcase
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Comprehensive market analysis, logo concepts, and strategic recommendations for the world's first fully autonomous, agentic insurance agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recommendation">
                <Button size="lg" variant="secondary" className="text-lg">
                  View Recommendation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/logos">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Explore Logo Concepts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-gradient-blue-subtle">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Project Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <CardTitle>3 Brand Options</CardTitle>
                <CardDescription>
                  Nexura Insurance, SoCal Cover, and Axiom Assurance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each with unique positioning, target audiences, and visual identities designed for different strategic approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <CardTitle>9 Logo Concepts</CardTitle>
                <CardDescription>
                  Professional designs across all brand options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Three unique logo variations for each brand, exploring different visual styles from modern to traditional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle>Market Research</CardTitle>
                <CardDescription>
                  Data-driven insights and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive competitive analysis, California market dynamics, and insurtech landscape evaluation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendation Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Primary Recommendation
              </h2>
              <p className="text-xl text-muted-foreground">
                Based on comprehensive market analysis and strategic alignment
              </p>
            </div>

            <Card className="border-2 border-primary">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Nexura Insurance
                </CardTitle>
                <CardDescription className="text-lg">
                  nexurainsurance.com • Available ✅
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img
                    src="/logos/nexura_logo_modern.png"
                    alt="Nexura Insurance Logo"
                    className="w-64 h-64 object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm">
                      <strong>Aligns with vision</strong> of creating the world's first fully autonomous, agentic insurance agency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm">
                      <strong>Signals innovation</strong> while maintaining insurance industry credibility
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm">
                      <strong>Scales nationally and internationally</strong> - critical for VC funding and expansion
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm">
                      <strong>Works across all insurance lines</strong> (P&C, Life, Health) without feeling too casual
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/recommendation">
                    <Button className="w-full" size="lg">
                      Read Full Recommendation
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-blue-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore the Complete Analysis
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dive deep into market research, compare all logo options side-by-side, and review the comprehensive brand strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/logos">
                <Button size="lg" variant="default">
                  View All Logos
                </Button>
              </Link>
              <Link href="/research">
                <Button size="lg" variant="outline">
                  Market Research
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

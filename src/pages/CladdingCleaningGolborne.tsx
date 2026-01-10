import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  Layers, Home, Leaf, BadgeCheck, Users, Sparkles
} from "lucide-react";

export default function CladdingCleaningGolborne() {
  const claddingTypes = [
    "Timber Cladding",
    "Vinyl / uPVC Cladding",
    "Composite Panels",
    "Metal Cladding (Aluminium & Steel)",
    "Fibre Cement / Hardie Panels",
    "Textured or Coloured Cladding"
  ];

  const benefits = [
    "Restores original colour and appearance",
    "Removes algae, moss, mould, and grime",
    "Prevents long-term surface deterioration",
    "Increases kerb appeal and property value",
    "Extends lifespan of cladding",
    "Reduces future maintenance costs"
  ];

  const whyChooseUs = [
    "Local cladding cleaning experts in Golborne",
    "Fully insured and experienced technicians",
    "Soft washing systems safe for all cladding types",
    "Eco-friendly, COSHH-compliant cleaning solutions",
    "Transparent pricing and clear communication",
    "Trusted local reputation with verified customer reviews"
  ];

  const areas = [
    "Golborne",
    "Lowton",
    "Leigh",
    "Ashton-in-Makerfield",
    "Newton-le-Willows",
    "Warrington",
    "Greater Manchester & Merseyside suburbs"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Cladding Cleaning Golborne | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Expert cladding cleaning in Golborne. Remove dirt, algae, mould & stains safely with R.R.M External Cleaning Specialist. Call +44 7845 463877 today." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/cladding-cleaning-golborne" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Golborne & Surrounding Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-shadow">
              Cladding Cleaning Golborne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Professional Cladding Cleaning by R.R.M External Cleaning Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="tel:+447845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +44 7845 463877
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a 
                  href="https://share.google/I03RMBtBN0VKLbt3c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Google Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              If your property's cladding is showing dirt, algae, mould, or staining, professional cladding cleaning 
              in Golborne can restore its appearance, protect the surface, and extend its lifespan.
            </p>
            <p className="text-lg text-muted-foreground">
              R.R.M External Cleaning Specialist provides expert cladding cleaning services in Golborne and surrounding 
              areas, using soft washing and specialist techniques that are safe for all types of cladding.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Cladding Cleaning Services in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              Cladding is an increasingly popular exterior solution for both residential and commercial properties in 
              Golborne. Over time, it can accumulate dirt, algae, moss, lichen, and pollution stains, which affect 
              aesthetics and may lead to long-term damage if left untreated.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Our cladding cleaning services are designed to safely remove contaminants, restore the original look of 
              the cladding, and protect your investment.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Cladding Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is Cladding Cleaning & Why It's Needed in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cladding cleaning is the professional process of removing surface dirt, organic growth, and environmental 
              staining from exterior wall cladding.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              In Golborne, cleaning is essential because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Damp, shaded areas promote algae and moss growth</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Pollutants from traffic and industry cause staining</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Regular cleaning prevents costly repairs and keeps your property looking its best</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cladding */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Types of Cladding We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We work with a wide range of cladding types, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {claddingTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <Layers className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              Each cladding type is assessed individually to apply the correct cleaning method without causing damage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Our Cladding Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Initial Assessment</h3>
                <p className="text-muted-foreground">
                  We inspect the cladding type, contamination level, height, and access requirements to determine the safest cleaning approach.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Surface Preparation</h3>
                <p className="text-muted-foreground">
                  Surrounding plants, patios, and surfaces are protected before cleaning.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Soft Washing Application</h3>
                <p className="text-muted-foreground">
                  A low-pressure system applies specialist biocidal solutions to remove algae, mould, and dirt safely and effectively.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Rinse</h3>
                <p className="text-muted-foreground">
                  The cladding is gently rinsed to remove debris and contaminants, leaving the surface clean without erosion or discolouration.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Protective Treatment</h3>
                <p className="text-muted-foreground">
                  We can apply a protective biocide to delay regrowth and maintain cleanliness for longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Methods & Safety */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Cleaning Methods & Safety
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-green-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Soft Washing</h3>
                </div>
                <ul className="space-y-3">
                  {["Safe for all cladding types", "Low-pressure application", "Long-lasting results", "Prevents surface damage and fading"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-red-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-foreground">Why Pressure Washing Is Avoided</h3>
                </div>
                <p className="text-muted-foreground mb-4">High-pressure washing can cause:</p>
                <ul className="space-y-3">
                  {["Surface damage or denting", "Paint or finish erosion", "Water ingress and long-term structural issues"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Benefits of Professional Cladding Cleaning
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Home className="h-7 w-7 text-primary" />
                  Residential Cladding Cleaning in Golborne
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide cladding cleaning for a variety of residential properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detached and semi-detached houses",
                    "Terraced homes",
                    "New-build properties",
                    "Renovated or extended properties"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Whether a one-off clean or an ongoing maintenance plan, we tailor our service to your home.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Cladding Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  We also clean cladding for commercial properties in Golborne, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Office buildings",
                    "Retail premises",
                    "Industrial units",
                    "Schools and community buildings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All work is carried out in line with UK health & safety regulations and industry best practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Cladding Cleaning Prices in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">Pricing depends on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {["Cladding type and material", "Property size (m²)", "Level of staining and contamination", "Access and height"].map((factor, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{factor}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Typical UK Guide Prices</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Small residential cladding clean</p>
                  <p className="text-2xl font-bold text-foreground">£150 – £300</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Full house or commercial property</p>
                  <p className="text-2xl font-bold text-foreground">£300 – £800</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call +44 7845 463877 for a free quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Why Choose R.R.M External Cleaning Specialist?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border card-shadow">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environmental */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Environmental & Safety Practices
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Protecting plants, patios, and surroundings",
                "Safe water runoff management",
                "Using non-abrasive cleaning methods",
                "Eco-friendly and safe cleaning chemicals"
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              We ensure your property is treated with the utmost care from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often should cladding be cleaned?",
                  a: "Every 2–3 years, depending on exposure and type of cladding."
                },
                {
                  q: "Can you remove algae and mould?",
                  a: "Yes, our soft washing treatments effectively remove algae, moss, and mould."
                },
                {
                  q: "Is cladding cleaning safe for painted or coloured panels?",
                  a: "Yes, we use low-pressure methods to protect finishes."
                },
                {
                  q: "Do you offer commercial cladding cleaning?",
                  a: "Yes, we clean both residential and commercial cladding."
                },
                {
                  q: "How long do results last?",
                  a: "With biocide protection, results can last several years."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border card-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Areas We Cover
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              In addition to Golborne, we serve surrounding areas including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Book Cladding Cleaning in Golborne
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For safe, professional cladding cleaning in Golborne, contact R.R.M External Cleaning Specialist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <a href="tel:+447845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call +44 7845 463877
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <a 
                href="https://share.google/I03RMBtBN0VKLbt3c" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Google Business Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  Home, Leaf, BadgeCheck, Users, Sparkles, Sun
} from "lucide-react";

export default function ConservatoryCleaningGolborne() {
  const conservatoryTypes = [
    "Victorian Conservatories",
    "Edwardian Conservatories",
    "Lean-to Conservatories",
    "Gable-end Conservatories",
    "Orangeries",
    "UPVC, aluminium, and timber-framed conservatories"
  ];

  const cleaningAreas = [
    "Glass panels",
    "UPVC or aluminium frames",
    "Roofs and gutters",
    "Window sills and ledges"
  ];

  const benefits = [
    "Restores maximum light and clarity",
    "Removes moss, algae, lichen, and dirt",
    "Reduces slip hazards on floors and patios",
    "Prolongs the life of frames, glass, and seals",
    "Enhances kerb appeal and property value",
    "Creates a clean, hygienic living space"
  ];

  const whyChooseUs = [
    "Local conservatory cleaning experts in Golborne",
    "Fully insured and experienced technicians",
    "Safe soft wash methods suitable for all conservatory types",
    "Eco-friendly, COSHH-compliant cleaning solutions",
    "Transparent pricing and clear communication",
    "Trusted reputation with verified local reviews"
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
        <title>Conservatory Cleaning Golborne | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Expert conservatory cleaning in Golborne. Remove algae, moss, dirt & stains safely with R.R.M External Cleaning Specialist. Call +44 7845 463877 today." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/conservatory-cleaning-golborne" />
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
              Conservatory Cleaning Golborne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Professional Conservatory Cleaning by R.R.M External Cleaning Specialist
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
              A sparkling clean conservatory can transform your home, letting in more light and improving your living space. 
              If your conservatory is showing dirt, algae, moss, water stains, or streaking, professional conservatory 
              cleaning in Golborne is the safest and most effective way to restore its appearance.
            </p>
            <p className="text-lg text-muted-foreground">
              R.R.M External Cleaning Specialist provides expert conservatory cleaning services in Golborne and surrounding 
              areas, using soft washing, specialist cleaning solutions, and safe techniques tailored to all types of conservatories.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Conservatory Cleaning Services in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              Conservatories are exposed to the elements year-round, which can result in dirt, algae, moss, lichen, and 
              water stains building up on glass, frames, and roof panels. Left untreated, these contaminants can reduce 
              sunlight, affect the structure, and diminish the overall look of your property.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Our conservatory cleaning service safely removes all contaminants, leaving your conservatory clear, bright, and hygienic.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Conservatory Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is Conservatory Cleaning & Why It's Needed in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Conservatory cleaning is the professional removal of dirt, algae, moss, and water stains from all parts of 
              your conservatory, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cleaningAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              In Golborne, cleaning is especially important because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Moist, shaded areas encourage algae and moss growth</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Rainwater and UK weather leave water stains and grime</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Regular cleaning prolongs the life of frames, seals, and glass</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Conservatories */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Types of Conservatories We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We clean all common conservatory types, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {conservatoryTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <Sun className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              Each conservatory is assessed to ensure the correct cleaning method is applied without damage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Our Conservatory Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Inspection & Assessment</h3>
                <p className="text-muted-foreground">
                  We examine your conservatory to determine material type, contamination level, and access requirements.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Surface Preparation</h3>
                <p className="text-muted-foreground">
                  Plants, furniture, and surrounding areas are protected before cleaning begins.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Soft Wash Application</h3>
                <p className="text-muted-foreground">
                  Specialist low-pressure cleaning solutions are applied to remove moss, algae, lichen, and surface dirt 
                  safely from glass and frames.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Rinse</h3>
                <p className="text-muted-foreground">
                  Once the treatment has worked, surfaces are rinsed and any stubborn spots or streaks are removed to restore clarity.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Protective Treatment</h3>
                <p className="text-muted-foreground">
                  A protective coating or biocide can be applied to prevent regrowth and maintain cleanliness for longer.
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
                  {[
                    "Safe for glass, UPVC, timber, and aluminium frames",
                    "Low-pressure system prevents damage",
                    "Long-lasting results by killing growth at the root"
                  ].map((item, index) => (
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
                <p className="text-muted-foreground mb-4">High-pressure washing can:</p>
                <ul className="space-y-3">
                  {["Crack or shatter glass", "Damage seals and frames", "Strip paint or coatings"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 font-medium">
                  We prioritise safety, surface protection, and long-lasting results.
                </p>
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
              Benefits of Professional Conservatory Cleaning
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
                  Residential Conservatory Cleaning in Golborne
                </h3>
                <p className="text-muted-foreground mb-4">
                  We clean conservatories for all residential properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detached and semi-detached homes",
                    "Terraced houses",
                    "New-build conservatories",
                    "Older or heritage-style conservatories"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Whether you need a one-off clean or a maintenance plan, we tailor our service to your property.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Conservatory Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  We also clean commercial and public conservatories, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Hotels and hospitality spaces",
                    "Restaurants with glass roofs or orangeries",
                    "Community centres and public buildings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All commercial cleaning is carried out in accordance with UK health & safety standards.
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
              Conservatory Cleaning Prices in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">Pricing depends on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Size of the conservatory",
                "Material type (glass, UPVC, aluminium, timber)",
                "Level of dirt, algae, or staining",
                "Access and surrounding area"
              ].map((factor, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{factor}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Typical UK Guide Prices</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Small conservatory</p>
                  <p className="text-2xl font-bold text-foreground">£120 – £250</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Medium conservatory</p>
                  <p className="text-2xl font-bold text-foreground">£250 – £400</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Large conservatory or commercial</p>
                  <p className="text-2xl font-bold text-foreground">£400 – £700</p>
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
                "Plants, furniture, and surroundings are carefully protected",
                "Safe water runoff management",
                "Non-abrasive, eco-friendly cleaning chemicals",
                "Compliance with UK health & safety standards"
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
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
                  q: "How often should a conservatory be cleaned?",
                  a: "Every 1–2 years depending on exposure and growth of algae or moss."
                },
                {
                  q: "Can you remove algae and moss from roof panels?",
                  a: "Yes, using specialist soft washing techniques that are safe for glass and frames."
                },
                {
                  q: "Is conservatory cleaning safe for UPVC or timber frames?",
                  a: "Yes, our low-pressure methods prevent damage to all frame types."
                },
                {
                  q: "Do you offer commercial conservatory cleaning?",
                  a: "Yes, we provide cleaning for residential and commercial conservatories."
                },
                {
                  q: "How long do results last?",
                  a: "With biocide or protective treatment, results can last several years."
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
            Book Conservatory Cleaning in Golborne
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For professional, safe, and effective conservatory cleaning in Golborne, contact R.R.M External Cleaning Specialist today.
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

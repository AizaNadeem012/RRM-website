import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  Square, Home, Leaf, BadgeCheck, Users, Droplets
} from "lucide-react";

export default function DrivewayCleaningGolborne() {
  const drivewayTypes = [
    "Block Paving",
    "Concrete Driveways",
    "Tarmac / Asphalt Driveways",
    "Gravel & Resin Bound Driveways",
    "Natural Stone Driveways",
    "Slate & Flagstone"
  ];

  const benefits = [
    "Restores original colour and appearance",
    "Removes moss, algae, weeds, oil stains, and dirt",
    "Reduces slip hazards",
    "Improves kerb appeal and property value",
    "Extends driveway lifespan",
    "Minimises future maintenance"
  ];

  const whyChooseUs = [
    "Local driveway cleaning experts in Golborne",
    "Fully insured and experienced technicians",
    "Safe soft wash and pressure cleaning systems",
    "Eco-friendly, COSHH-compliant cleaning solutions",
    "Transparent pricing with no hidden costs",
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
        <title>Driveway Cleaning Golborne | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Expert driveway cleaning in Golborne. Remove moss, algae, weeds, oil stains & dirt safely with R.R.M External Cleaning Specialist. Call +44 7845 463877 today." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/driveway-cleaning-golborne" />
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
              Driveway Cleaning Golborne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Professional Driveway Cleaning by R.R.M External Cleaning Specialist
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
              A clean, well-maintained driveway not only boosts your property's kerb appeal but also extends its lifespan. 
              If your driveway is affected by moss, algae, weeds, oil stains, or general grime, professional driveway 
              cleaning in Golborne is the safest and most effective solution.
            </p>
            <p className="text-lg text-muted-foreground">
              R.R.M External Cleaning Specialist provides expert driveway cleaning services in Golborne and surrounding 
              areas, using soft washing and pressure cleaning techniques tailored to each surface type.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Driveway Cleaning Services in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              Driveways are exposed to the elements year-round and are prone to staining, moss growth, algae, lichen, 
              and debris accumulation. Over time, this can make surfaces slippery, unsightly, and more susceptible to damage.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Our driveway cleaning service removes dirt, organic growth, and surface contaminants, leaving your driveway 
              clean, safe, and visually appealing.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Driveway Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is Driveway Cleaning & Why It's Needed in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Driveway cleaning is the professional removal of dirt, moss, algae, oil stains, and grime from driveway surfaces.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              In Golborne, driveway cleaning is particularly important because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Damp and shaded conditions encourage moss and algae growth</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Oil and tyre marks accumulate from heavy vehicle use</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Regular cleaning protects driveways from deterioration and costly repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Driveways */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Types of Driveways We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We clean a variety of driveway surfaces, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {drivewayTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <Square className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              Each surface is carefully assessed to ensure the correct cleaning method is used, preventing damage and 
              preserving its appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Our Driveway Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Surface Inspection</h3>
                <p className="text-muted-foreground">
                  We inspect your driveway to determine surface type, contamination level, and any delicate areas.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Pre-Treatment</h3>
                <p className="text-muted-foreground">
                  Protective coverings are applied to plants, borders, and surrounding surfaces. Any stubborn stains may 
                  receive a pre-treatment solution.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Soft Wash or Pressure Cleaning</h3>
                <p className="text-muted-foreground">
                  Depending on the surface, we use a soft wash system for delicate driveways or low-pressure cleaning for 
                  more robust surfaces.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Rinse</h3>
                <p className="text-muted-foreground">
                  After cleaning, the surface is rinsed to remove debris and cleaning residues, leaving the driveway spotless.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Protective Treatment</h3>
                <p className="text-muted-foreground">
                  We can apply a sealant or biocide to reduce future moss or algae growth and prolong the cleanliness of 
                  your driveway.
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
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border border-green-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold text-foreground">Soft Washing</h3>
                </div>
                <ul className="space-y-2">
                  {["Low-pressure cleaning", "Safe for delicate surfaces", "Kills moss, algae, and weeds at the root"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-blue-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-foreground">Low-Pressure Washing</h3>
                </div>
                <ul className="space-y-2">
                  {["Used for robust surfaces", "Removes deep-set stains", "Prevents surface damage"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-red-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-foreground">High Pressure Avoided</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Excessive pressure can:</p>
                <ul className="space-y-2">
                  {["Damage softer driveways", "Strip protective coatings", "Cause erosion and cracking"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
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
              Benefits of Professional Driveway Cleaning
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
                  Residential Driveway Cleaning in Golborne
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide driveway cleaning for all residential properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detached & semi-detached homes",
                    "Terraced houses",
                    "New-build driveways",
                    "Renovated or extended properties"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our services are flexible, ranging from one-off cleans to regular maintenance schedules.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Driveway Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  We also clean commercial driveways and parking areas, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Office blocks & retail car parks",
                    "Industrial premises",
                    "Schools & community centres"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All commercial cleaning is carried out in compliance with UK health & safety regulations.
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
              Driveway Cleaning Prices in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">Pricing depends on several factors:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {["Surface type & material", "Size of driveway (m²)", "Level of dirt, moss, or oil staining", "Access and location"].map((factor, index) => (
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
                  <p className="text-sm text-muted-foreground mb-2">Small residential driveway</p>
                  <p className="text-2xl font-bold text-foreground">£100 – £250</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Full house driveway</p>
                  <p className="text-2xl font-bold text-foreground">£250 – £600</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Commercial driveways</p>
                  <p className="text-2xl font-bold text-foreground">from £400</p>
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
                "Protecting plants, borders, and surrounding areas",
                "Safe water runoff management",
                "Non-abrasive, eco-friendly cleaning chemicals",
                "Compliance with UK safety standards"
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
                  q: "How often should a driveway be cleaned?",
                  a: "Every 1–3 years depending on exposure and surface type."
                },
                {
                  q: "Can you remove oil and tyre stains?",
                  a: "Yes, using specialist eco-friendly cleaning solutions."
                },
                {
                  q: "Is driveway cleaning safe for block paving?",
                  a: "Yes, we use low-pressure soft washing or controlled pressure cleaning."
                },
                {
                  q: "Do you offer commercial driveway cleaning?",
                  a: "Yes, we clean residential and commercial driveways across Golborne."
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
            Book Driveway Cleaning in Golborne
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For professional, safe, and effective driveway cleaning in Golborne, contact R.R.M External Cleaning Specialist today.
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

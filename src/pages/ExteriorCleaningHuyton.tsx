import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, Droplets,
  Home, Sparkles, Wrench, Building2, PaintBucket, Users, Leaf,
  Clock, BadgeCheck, DollarSign
} from "lucide-react";

export default function ExteriorCleaningHuyton() {
  const services = [
    "Driveway Cleaning (Block Paving, Tarmac, Resin Bound, Concrete)",
    "Patio & Paving Cleaning",
    "Roof Cleaning (Soft Washing, Moss Removal, Biocide Treatments)",
    "Gutter Cleaning (Vacuum Systems & Downpipe Clearing)",
    "Fascia, Soffit & UPVC Cleaning",
    "Render Cleaning (K-Render, Silicone Render, Pebbledash)",
    "Brickwork & Stone Cleaning",
    "Commercial Exterior Cleaning",
    "Algae, Lichen & Black Spot Removal"
  ];

  const whyChooseUs = [
    "Fully insured exterior cleaning company",
    "Trained and experienced cleaning technicians",
    "Professional pressure washing & soft washing systems",
    "Eco-conscious, COSHH-compliant cleaning products",
    "Honest advice and transparent pricing",
    "Strong local reputation with verified reviews"
  ];

  const commercialServices = [
    "Shopfront and signage cleaning",
    "Car park and forecourt cleaning",
    "Office and industrial building exteriors",
    "Schools, warehouses, and public buildings"
  ];

  const areas = [
    "Huyton",
    "Prescot",
    "Roby",
    "Whiston",
    "Knotty Ash",
    "Knowsley",
    "Liverpool suburbs"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Exterior Cleaning Huyton – Driveway, Roof & Patio Cleaning | R.R.M</title>
        <meta 
          name="description" 
          content="Professional exterior cleaning in Huyton. Driveway, roof, patio, gutter & render cleaning by R.R.M External Cleaning Specialist. Call +44 7845 463877." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/exterior-cleaning-companies-huyton" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Huyton & Merseyside
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-shadow">
              Exterior Cleaning Companies in Huyton
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              R.R.M External Cleaning Specialist – Trusted Local Exterior Cleaners
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
              R.R.M External Cleaning Specialist is a professional exterior cleaning company in Huyton, delivering 
              specialist cleaning services for residential and commercial properties. We focus on safe cleaning methods, 
              surface-specific treatments, and long-lasting results, helping property owners protect, restore, and enhance 
              exterior surfaces across Merseyside.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Exterior Cleaning Services in Huyton
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Exterior cleaning is a critical part of property maintenance, especially in areas like Huyton where damp 
              conditions encourage moss, algae, lichen, and black spot growth. At R.R.M External Cleaning Specialist, 
              we provide tailored exterior cleaning solutions based on surface material, contamination type, and structural condition.
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Exterior Cleaning Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              Each service is carried out using professional-grade equipment and approved cleaning solutions to avoid surface damage.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose R.R.M External Cleaning Specialist in Huyton?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a local exterior cleaning specialist, we understand the specific environmental challenges affecting 
              properties in Huyton and surrounding areas.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-6">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <a href="tel:+447845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Speak directly with a local specialist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Methods */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Exterior Cleaning Methods We Use
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Pressure Washing</h3>
                </div>
                <p className="text-muted-foreground">
                  Used on durable surfaces such as concrete driveways, patios, and paving slabs to remove ingrained 
                  dirt, oil stains, and surface grime.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Soft Washing</h3>
                </div>
                <p className="text-muted-foreground">
                  A low-pressure system using specialist solutions for roofs, render, and delicate materials, 
                  eliminating organic growth safely at the root.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Roof Moss Removal & Biocide Treatment</h3>
                </div>
                <p className="text-muted-foreground">
                  Manual moss removal followed by a biocidal wash to prevent regrowth and protect roof tiles long-term.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Chemical & Steam Cleaning</h3>
                </div>
                <p className="text-muted-foreground">
                  Applied where appropriate for sensitive stonework and heavy contamination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Residential Exterior Cleaning in Huyton
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Homeowners across Huyton choose R.R.M External Cleaning Specialist to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Improve kerb appeal",
                "Prevent long-term surface damage",
                "Protect roofs, driveways, and render",
                "Increase property value",
                "Maintain a clean, safe environment"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              We regularly clean terraced, semi-detached, and detached homes, offering both one-off cleans and maintenance plans.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Commercial Exterior Cleaning Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              We provide reliable exterior cleaning for businesses, landlords, and organisations throughout Huyton and Merseyside.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Commercial Cleaning Services Include:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {commercialServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              All work is completed in line with UK health & safety regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Exterior Cleaning Prices in Huyton
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">Pricing is based on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Surface size (square metres)",
                "Level of contamination",
                "Cleaning method required",
                "Access and safety requirements"
              ].map((factor, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{factor}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Typical Guide Prices</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Driveway cleaning</p>
                  <p className="text-2xl font-bold text-foreground">£80 – £200</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Roof cleaning</p>
                  <p className="text-2xl font-bold text-foreground">£300 – £800</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Gutter cleaning</p>
                  <p className="text-2xl font-bold text-foreground">£60 – £150</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Full exterior house clean</p>
                  <p className="text-2xl font-bold text-foreground">£250 – £600</p>
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

      {/* Safety & Environmental */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Safety & Environmental Responsibility
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              We follow industry best practices including:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "COSHH-compliant detergents",
                "Safe water runoff management",
                "Protection of plants and drainage systems",
                "Non-damaging, surface-appropriate cleaning techniques"
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              Your property is cleaned safely and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often should exterior cleaning be carried out?",
                  a: "Most properties benefit from cleaning every 12–24 months, depending on exposure and organic growth levels."
                },
                {
                  q: "Is roof cleaning safe for tiles?",
                  a: "Yes. We use soft washing, not high pressure, to protect roof integrity."
                },
                {
                  q: "Will pressure washing damage my driveway?",
                  a: "No, when correct pressure levels and professional techniques are used."
                },
                {
                  q: "Do you cover areas outside Huyton?",
                  a: "Yes, we serve surrounding areas across Merseyside and Knowsley."
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
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Areas We Serve
            </h2>
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
            Contact R.R.M External Cleaning Specialist
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For reliable, professional exterior cleaning services in Huyton, contact R.R.M External Cleaning Specialist today.
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

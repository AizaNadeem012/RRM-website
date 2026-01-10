import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  Home, Leaf, BadgeCheck, Users, Droplets, Sparkles
} from "lucide-react";

export default function RenderCleaningLiverpool() {
  const renderTypes = [
    "Smooth or painted render",
    "Pebbledash / roughcast render",
    "Monocouche render",
    "Stucco or decorative render"
  ];

  const cleaningAreas = [
    "Smooth and textured render",
    "Pebbledash or roughcast surfaces",
    "Painted or unpainted render"
  ];

  const benefits = [
    "Restores wall appearance and colour",
    "Removes algae, moss, mould, and dirt",
    "Protects render from long-term damage",
    "Enhances kerb appeal and property value",
    "Reduces long-term maintenance costs",
    "Creates a cleaner, healthier environment"
  ];

  const whyChooseUs = [
    "Local render cleaning experts in Liverpool",
    "Fully insured and experienced technicians",
    "Safe soft wash methods for all render types",
    "Eco-friendly, COSHH-compliant cleaning solutions",
    "Transparent pricing and reliable service",
    "Trusted local reputation with verified reviews"
  ];

  const areas = [
    "Liverpool",
    "Bootle",
    "Crosby",
    "Wirral",
    "Walton",
    "West Derby",
    "Merseyside suburbs"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Render Cleaning Liverpool | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Expert render cleaning in Liverpool. Remove moss, algae, mould & dirt safely with R.R.M External Cleaning Specialist. Call +44 7845 463877 for a free quote today." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/render-cleaning-liverpool" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <Sparkles className="absolute top-1/4 left-1/4 w-12 h-12 text-white/5 animate-float" style={{animationDelay: '0.5s'}} />
          <Sparkles className="absolute bottom-1/3 right-1/3 w-16 h-16 text-white/5 animate-float" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
              <MapPin className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Liverpool & Surrounding Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 text-shadow animate-fade-up">
              Render Cleaning Liverpool
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up stagger-1 leading-relaxed">
              Expert Render Cleaning Services by R.R.M External Cleaning Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2">
              <Button size="xl" className="hover-lift group" asChild>
                <a href="tel:+447845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call +44 7845 463877
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="hover-lift" asChild>
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
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in leading-relaxed">
              A clean, well-maintained exterior not only enhances the appearance of your property but also protects it 
              from mould, algae, dirt, and environmental damage. For homeowners and businesses in Liverpool, professional 
              render cleaning is the most effective way to restore the look and integrity of your walls.
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in stagger-1 leading-relaxed">
              R.R.M External Cleaning Specialist provides safe, efficient, and environmentally friendly render cleaning 
              services across Liverpool, using soft washing, specialist cleaning solutions, and expert techniques for all render types.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Render Cleaning Services in Liverpool
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto animate-fade-up stagger-1">
              Render surfaces are constantly exposed to the UK's changing weather conditions, which can lead to mould, 
              algae, moss, dirt, and staining. These issues not only look unsightly but can also compromise the structural 
              integrity of the render over time.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up stagger-2">
              Our professional render cleaning service safely removes these contaminants, leaving walls clean, protected, 
              and visually appealing.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Render Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up">
              What Is Render Cleaning & Why It's Needed in Liverpool
            </h2>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-up stagger-1">
              Render cleaning involves the removal of dirt, algae, moss, lichen, and pollution stains from exterior walls, including:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {cleaningAreas.map((area, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg glass-effect border border-border/50 hover-lift animate-fade-up stagger-${index + 2}`}>
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 animate-fade-up">
              In Liverpool, cleaning is essential because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Droplets, text: "Damp and shaded areas encourage algae and mould growth" },
                { icon: AlertTriangle, text: "Urban pollution can leave black streaks and staining" },
                { icon: Shield, text: "Regular cleaning preserves render longevity and prevents costly repairs" }
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-3 p-5 rounded-lg bg-card border-2 border-primary/10 hover-lift feature-card animate-slide-${index % 2 === 0 ? 'left' : 'right'} stagger-${index + 1}`}>
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Render */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Types of Render We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center animate-fade-up stagger-1">
              We clean all common render types, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {renderTypes.map((type, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg border-gradient hover-lift feature-card animate-scale-in stagger-${index + 1}`}>
                  <Home className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center animate-fade-up">
              Each property is assessed to determine the safest and most effective cleaning method.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Our Render Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: 1,
                  title: "Initial Inspection",
                  desc: "We examine the property's render type, level of staining, and access requirements."
                },
                {
                  step: 2,
                  title: "Surface Preparation",
                  desc: "Surrounding areas such as plants, windows, and patios are protected before cleaning begins."
                },
                {
                  step: 3,
                  title: "Soft Wash Application",
                  desc: "A low-pressure cleaning solution is applied to remove algae, moss, dirt, and stains while preserving the render."
                },
                {
                  step: 4,
                  title: "Controlled Rinse",
                  desc: "Once the solution has worked, surfaces are rinsed to remove residues and ensure an even, clean finish."
                },
                {
                  step: 5,
                  title: "Protective Coating",
                  desc: "A protective treatment can be applied to prevent regrowth and maintain cleanliness for longer."
                }
              ].map((item, index) => (
                <div key={item.step} className={`bg-card rounded-xl p-6 border border-border card-shadow hover-lift feature-card group animate-scale-in stagger-${index + 1}`}>
                  <div className="bg-gradient-to-br from-primary to-accent rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Methods & Safety */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Cleaning Methods & Safety
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              <div className="bg-card rounded-xl p-8 border-2 border-green-200 card-shadow hover-lift feature-card animate-slide-left">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Soft Washing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Low-pressure system safe for all render types",
                    "Kills algae, moss, and mould at the root",
                    "Long-lasting results without damaging surfaces"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-8 border-2 border-red-200 card-shadow hover-lift feature-card animate-slide-right">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-foreground">Why Pressure Washing Is Avoided</h3>
                </div>
                <p className="text-muted-foreground mb-4">High-pressure washing can:</p>
                <ul className="space-y-3">
                  {["Can erode render and loosen paint", "May damage textured surfaces", "Can lead to water ingress"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-lg text-foreground font-medium animate-fade-up">
              We prioritise safety, surface protection, and long-term results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Benefits of Professional Render Cleaning
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-start gap-3 p-5 rounded-lg bg-card border border-border hover-lift feature-card animate-fade-up stagger-${(index % 3) + 1}`}>
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
              <div className="bg-card rounded-xl p-8 border-2 border-primary/20 card-shadow hover-lift feature-card animate-slide-left">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Home className="h-7 w-7 text-primary" />
                  Residential Render Cleaning in Liverpool
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide render cleaning for all residential properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detached and semi-detached homes",
                    "Terraced houses",
                    "Flats and townhouses",
                    "New-build or heritage properties"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Services can be one-off or scheduled for regular maintenance.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border-2 border-accent/20 card-shadow hover-lift feature-card animate-slide-right">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Render Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  We also clean commercial properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Offices and business premises",
                    "Shops and retail outlets",
                    "Community buildings and schools",
                    "Industrial units with rendered walls"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All commercial work is fully insured and follows UK health & safety standards.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Render Cleaning Prices in Liverpool
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center animate-fade-up stagger-1">Pricing is based on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Render type and wall area",
                "Level of dirt, algae, or staining",
                "Property accessibility",
                "Additional protective treatment"
              ].map((factor, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover-scale animate-fade-up stagger-${index + 2}`}>
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{factor}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 border-2 border-primary/10 card-shadow animate-scale-in">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Typical UK Guide Prices</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Small property", price: "£150 – £300" },
                  { label: "Medium property", price: "£300 – £500" },
                  { label: "Large or commercial property", price: "£500 – £800" }
                ].map((item, index) => (
                  <div key={index} className={`text-center p-5 rounded-lg bg-white hover-lift animate-fade-up stagger-${index + 1}`}>
                    <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-2xl font-bold gradient-text">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button size="lg" className="hover-lift group" asChild>
                  <a href="tel:+447845463877" className="flex items-center gap-2">
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Why Choose R.R.M External Cleaning Specialist?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className={`flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover-lift feature-card animate-fade-up stagger-${(index % 3) + 1}`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Environmental & Safety Practices
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Full protection for plants, patios, and windows",
                "Safe water runoff management",
                "Biodegradable, eco-friendly cleaning chemicals",
                "Compliance with UK health & safety standards"
              ].map((practice, index) => (
                <div key={index} className={`flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover-lift animate-slide-${index % 2 === 0 ? 'left' : 'right'}`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often should render be cleaned?",
                  a: "Every 2–3 years depending on exposure and local conditions."
                },
                {
                  q: "Is render cleaning safe for all types?",
                  a: "Yes, soft wash methods are safe for smooth, textured, painted, and pebbledash render."
                },
                {
                  q: "Can algae and moss be removed from painted surfaces?",
                  a: "Yes, using low-pressure specialist cleaning solutions."
                },
                {
                  q: "Do you offer commercial render cleaning?",
                  a: "Yes, for residential and commercial properties across Liverpool."
                },
                {
                  q: "How long do results last?",
                  a: "With optional protective treatment, results can last several years."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-card rounded-xl p-6 border border-border hover-lift feature-card animate-fade-up stagger-${(index % 3) + 1}`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Areas We Cover
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center animate-fade-up stagger-1">
              In addition to Liverpool, we serve surrounding areas including:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {areas.map((area, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover-scale animate-fade-up stagger-${(index % 4) + 1}`}>
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 animate-fade-up">
            Book Render Cleaning in Liverpool
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up stagger-1">
            For professional, safe, and effective render cleaning in Liverpool, contact R.R.M External Cleaning Specialist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2">
            <Button size="xl" className="hover-lift group" asChild>
              <a href="tel:+447845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call +44 7845 463877
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover-lift" asChild>
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

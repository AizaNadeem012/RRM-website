import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  Home, Leaf, BadgeCheck, Users, Droplets, CloudRain
} from "lucide-react";

export default function RoofCleaningGolborne() {
  const roofTypes = [
    "Slate Roofs",
    "Tile Roofs (Concrete & Clay)",
    "Shingle Roofs",
    "Flat Roofs (EPDM, Felt, Membrane)",
    "Metal Roofs (Aluminium, Steel, Zinc)"
  ];

  const cleaningAreas = [
    "Tiles (concrete, clay, slate)",
    "Roof shingles",
    "Flat roof membranes",
    "Gutters and fascias"
  ];

  const benefits = [
    "Restores roof appearance and colour",
    "Removes moss, algae, lichen, and black streaks",
    "Prevents slips, leaks, and structural damage",
    "Extends the lifespan of roofing materials",
    "Enhances kerb appeal and property value",
    "Reduces long-term maintenance costs"
  ];

  const whyChooseUs = [
    "Local roof cleaning experts in Golborne",
    "Fully insured and experienced technicians",
    "Safe soft wash methods for all roof types",
    "Eco-friendly, COSHH-compliant cleaning solutions",
    "Transparent pricing and reliable service",
    "Trusted local reputation with verified reviews"
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
        <title>Roof Cleaning Golborne | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Expert roof cleaning in Golborne. Remove moss, algae, lichen & dirt safely with R.R.M External Cleaning Specialist. Call +44 7845 463877 today for a free quote." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/roof-cleaning-golborne" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <CloudRain className="absolute top-1/4 left-1/4 w-16 h-16 text-white/5 animate-float" style={{animationDelay: '0.5s'}} />
          <CloudRain className="absolute bottom-1/3 right-1/3 w-20 h-20 text-white/5 animate-float" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
              <MapPin className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Golborne & Surrounding Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 text-shadow animate-fade-up">
              Roof Cleaning Golborne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up stagger-1 leading-relaxed">
              Professional Roof Cleaning by R.R.M External Cleaning Specialist
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
              A clean roof not only enhances your property's appearance but also protects it from moss, algae, lichen, 
              and dirt build-up, which can cause long-term damage. For homeowners and businesses in Golborne, professional 
              roof cleaning is essential to maintain safety, structural integrity, and curb appeal.
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in stagger-1 leading-relaxed">
              R.R.M External Cleaning Specialist provides expert roof cleaning services in Golborne and surrounding 
              areas, using safe soft washing, eco-friendly chemicals, and low-pressure techniques suitable for all roof types.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Roof Cleaning Services in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto animate-fade-up stagger-1">
              Roofs are constantly exposed to the UK's weather conditions, leading to moss, algae, lichen, black streaks, 
              and debris accumulation. Left untreated, this can result in leaks, blocked gutters, and premature roof degradation.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up stagger-2">
              Our roof cleaning service safely removes these contaminants, prolonging your roof's lifespan and improving 
              the overall appearance of your property.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Roof Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up">
              What Is Roof Cleaning & Why It's Needed in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-up stagger-1">
              Roof cleaning involves the removal of moss, algae, lichen, dirt, and pollutants from roof surfaces, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cleaningAreas.map((area, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover-lift animate-fade-up stagger-${index + 2}`}>
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 animate-fade-up">
              In Golborne, cleaning is particularly important because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Droplets, text: "Damp conditions encourage moss and algae growth" },
                { icon: Leaf, text: "Falling leaves and debris block gutters" },
                { icon: Shield, text: "Regular cleaning prevents structural damage and costly repairs" }
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover-lift feature-card animate-fade-up stagger-${index + 1}`}>
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Roofs */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-fade-up">
              Types of Roofs We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center animate-fade-up stagger-1">
              We clean a wide variety of roof types, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {roofTypes.map((type, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg glass-effect border border-border/50 hover-lift feature-card animate-slide-right stagger-${index + 1}`}>
                  <Home className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center animate-fade-up">
              Each roof is carefully assessed to ensure safe and effective cleaning without damage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Our Roof Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: 1,
                  title: "Roof Inspection",
                  desc: "We inspect your roof for material type, contamination, and any vulnerable areas."
                },
                {
                  step: 2,
                  title: "Safety Setup",
                  desc: "We implement full safety measures including scaffolding, harnesses, and protective coverings for surrounding areas."
                },
                {
                  step: 3,
                  title: "Soft Wash Application",
                  desc: "We apply a low-pressure soft wash solution that removes moss, algae, lichen, and black streaks while protecting the roof surface."
                },
                {
                  step: 4,
                  title: "Low-Pressure Rinse",
                  desc: "After treatment, the roof is rinsed carefully to remove residues, debris, and cleaning solution."
                },
                {
                  step: 5,
                  title: "Protective Treatment",
                  desc: "We can apply a biocide or protective coating to prevent regrowth and extend cleanliness."
                }
              ].map((item, index) => (
                <div key={item.step} className={`bg-card rounded-xl p-6 border border-border hover-lift feature-card group animate-scale-in stagger-${index + 1}`}>
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
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border-2 border-green-200 hover-lift feature-card animate-slide-left">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold text-foreground">Soft Washing</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Low-pressure system safe for all roof types",
                    "Kills moss, algae, and lichen at the root",
                    "Long-lasting results without damaging tiles or shingles"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border-2 border-red-200 hover-lift feature-card animate-scale-in">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-foreground">High Pressure Avoided</h3>
                </div>
                <ul className="space-y-2">
                  {["Can dislodge tiles or shingles", "Strips protective coatings", "May cause leaks or water ingress"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 border-2 border-blue-200 hover-lift feature-card animate-slide-right">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-foreground">Eco-Friendly</h3>
                </div>
                <ul className="space-y-2">
                  {["COSHH-compliant", "Safe for plants and surrounding areas", "Biodegradable solutions"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center animate-fade-up">
              Benefits of Professional Roof Cleaning
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover-lift feature-card animate-fade-up stagger-${(index % 3) + 1}`}>
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
              <div className="bg-card rounded-xl p-8 border-2 border-primary/20 hover-lift feature-card animate-slide-left">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Home className="h-7 w-7 text-primary" />
                  Residential Roof Cleaning in Golborne
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide roof cleaning for all residential properties, including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detached and semi-detached homes",
                    "Terraced houses",
                    "Bungalows and cottages",
                    "New-build and older properties"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  We offer one-off cleans or regular maintenance plans to suit your property.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border-2 border-accent/20 hover-lift feature-card animate-slide-right">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Roof Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our commercial roof cleaning services cater to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Offices and business premises",
                    "Warehouses and industrial units",
                    "Shops and retail outlets",
                    "Community centres and schools"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All commercial work is fully insured and compliant with UK health & safety regulations.
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
              Roof Cleaning Prices in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center animate-fade-up stagger-1">Pricing depends on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Roof type and material",
                "Size of the roof (m²)",
                "Level of moss, algae, or staining",
                "Accessibility and safety requirements"
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
                  { label: "Small residential roof", price: "£150 – £300" },
                  { label: "Medium roof", price: "£300 – £500" },
                  { label: "Large or commercial roofs", price: "£500 – £900" }
                ].map((item, index) => (
                  <div key={index} className={`text-center p-4 rounded-lg bg-white hover-lift animate-fade-up stagger-${index + 1}`}>
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
                "Full protection for plants, gutters, and surrounding areas",
                "Safe management of water runoff",
                "Biodegradable cleaning chemicals",
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
                  q: "How often should a roof be cleaned?",
                  a: "Every 2–3 years depending on exposure and growth of moss or algae."
                },
                {
                  q: "Can moss and algae be removed safely from slate roofs?",
                  a: "Yes, using low-pressure soft wash techniques."
                },
                {
                  q: "Is roof cleaning safe for all roof types?",
                  a: "Yes, methods are tailored to tiles, shingles, slate, and metal roofs."
                },
                {
                  q: "Do you offer commercial roof cleaning?",
                  a: "Yes, for residential and commercial properties throughout Golborne."
                },
                {
                  q: "How long do results last?",
                  a: "With biocide or protective treatment, results can last several years."
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
              In addition to Golborne, we serve surrounding areas including:
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
            Book Roof Cleaning in Golborne
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up stagger-1">
            For professional, safe, and effective roof cleaning in Golborne, contact R.R.M External Cleaning Specialist today.
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

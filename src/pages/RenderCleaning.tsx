import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Clock, Award,
  Droplets, Home, Leaf, BadgeCheck, AlertTriangle, Users
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RenderCleaning() {
  return (
    <Layout>
      <Helmet>
        <title>Render Cleaning Golborne | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Safe and professional render cleaning in Golborne. Remove algae, red staining & dirt with R.R.M External Cleaning Specialist. Call +44 7845 463877 today." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/render-cleaning-golborne" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
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
              Render Cleaning Golborne
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up stagger-1 leading-relaxed">
              Professional Soft Wash Render Cleaning by R.R.M External Cleaning Specialist
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
            <p className="text-lg text-muted-foreground mb-6">
              If your property's exterior is affected by green algae, red staining, black marks, or general discolouration, 
              professional render cleaning in Golborne is essential to restore its appearance and protect the surface long term.
            </p>
            <p className="text-lg text-muted-foreground">
              R.R.M External Cleaning Specialist provides safe, effective, and specialist render cleaning services in Golborne 
              and surrounding areas. We use soft washing techniques specifically designed for rendered surfaces, ensuring a deep 
              clean without causing damage.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Render Cleaning Services in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Rendered properties are common throughout Golborne and are particularly vulnerable to organic growth due to 
              moisture retention, shaded elevations, and the UK climate. Over time, algae, lichen, and atmospheric pollution 
              become embedded in the render, leading to staining and deterioration if left untreated.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Our render cleaning service removes these contaminants safely, restoring the original colour and finish while 
              protecting the structural integrity of the render.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Render Cleaning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is Render Cleaning & Why It's Important in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Render cleaning is the specialist process of removing organic growth, environmental staining, and surface 
              contamination from rendered walls using low-pressure methods and approved cleaning solutions.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              In Golborne, render cleaning is especially important because:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Damp conditions accelerate algae and red staining growth</p>
              </div>
              <div className="flex items-start gap-3">
                <Home className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">North-facing walls receive limited sunlight</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">New-build render discolours quickly without maintenance</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              Regular professional cleaning helps prevent long-term damage and costly repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Render */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Types of Render We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We are experienced in cleaning all major render systems, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["K-Render", "Silicone Render", "Monocouche Render", "Acrylic Render", "Pebbledash", "Coloured & Textured Render"].map((type) => (
                <div key={type} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              Each render type is assessed individually to ensure the correct treatment is applied.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Our Render Cleaning Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Render Inspection</h3>
                <p className="text-muted-foreground">
                  We identify the render type, contamination level, access requirements, and exposure to determine 
                  the safest and most effective cleaning method.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Soft Washing Application</h3>
                <p className="text-muted-foreground">
                  A specialist biocidal solution is applied using low pressure. This kills algae, mould, lichen, 
                  and spores at their root rather than just removing surface staining.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Rinse</h3>
                <p className="text-muted-foreground">
                  Once the treatment has worked, the render is gently rinsed to remove dead growth without 
                  erosion or colour loss.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Biocide After-Treatment</h3>
                <p className="text-muted-foreground">
                  Where required, an additional treatment is applied to slow regrowth and keep the render 
                  cleaner for longer.
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
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Soft Washing (Primary Method)</h3>
                </div>
                <ul className="space-y-3">
                  {["Low pressure", "Render-safe", "Long-lasting results", "Prevents damage and fading"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-foreground">Why Pressure Washing Is Avoided</h3>
                </div>
                <p className="text-muted-foreground mb-4">High-pressure washing can:</p>
                <ul className="space-y-3">
                  {["Etch the render surface", "Cause cracking and water ingress", "Strip colour and protective coatings"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 font-medium">
                  For this reason, pressure washing is not used on render.
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
              Benefits of Professional Render Cleaning
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Restores original render colour",
                "Removes algae, red staining, and black marks",
                "Prevents surface deterioration",
                "Improves kerb appeal",
                "Increases property value",
                "Extends render lifespan",
                "Reduces future maintenance costs"
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
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
                  Residential Render Cleaning in Golborne
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide render cleaning for all types of residential properties, including:
                </p>
                <ul className="space-y-2">
                  {["Detached and semi-detached houses", "Terraced homes", "New-build properties", "Renovated and extended homes"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Whether you need a one-off render clean or a maintenance plan, we tailor our service to your property.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Render Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  We also offer render cleaning for commercial and public buildings in and around Golborne, including:
                </p>
                <ul className="space-y-2">
                  {["Apartment blocks", "Office buildings", "Retail units", "Schools and community buildings"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All commercial work is carried out in line with UK health & safety regulations.
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
              Render Cleaning Prices in Golborne
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Render cleaning costs depend on several factors:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {["Render type", "Property size (m²)", "Level of staining", "Access and height"].map((factor) => (
                <div key={factor} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{factor}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Typical UK Guide Prices</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Small render clean</p>
                  <p className="text-2xl font-bold text-foreground">£150 – £300</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Full house render cleaning</p>
                  <p className="text-2xl font-bold text-foreground">£300 – £700</p>
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
              {[
                { icon: Award, text: "Local render cleaning specialists" },
                { icon: Shield, text: "Fully insured for peace of mind" },
                { icon: BadgeCheck, text: "Experienced with all render types" },
                { icon: Droplets, text: "Render-safe soft washing systems" },
                { icon: Leaf, text: "COSHH-compliant, eco-conscious products" },
                { icon: Star, text: "Strong local reputation with verified reviews" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border card-shadow">
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Practices */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Environmental & Safety Practices
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              We take environmental responsibility seriously by:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Using eco-friendly cleaning solutions",
                "Protecting plants and surrounding areas",
                "Managing water runoff safely",
                "Avoiding abrasive or damaging methods"
              ].map((practice) => (
                <div key={practice} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              Your property is treated with care from start to finish.
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
                  q: "How often should render be cleaned?",
                  a: "Typically every 2–4 years, depending on exposure and growth levels."
                },
                {
                  q: "Can you remove red algae stains?",
                  a: "Yes. Our treatments are designed to eliminate red staining at the root."
                },
                {
                  q: "Is render cleaning safe for coloured render?",
                  a: "Yes, when soft washing methods are used."
                },
                {
                  q: "How long do results last?",
                  a: "With biocide treatment, results often last several years."
                },
                {
                  q: "Do you work all year round?",
                  a: "Yes, weather permitting."
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
              In addition to Golborne, we also serve:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {["Lowton", "Ashton-in-Makerfield", "Newton-le-Willows", "Warrington", "Leigh", "Surrounding Greater Manchester & Merseyside areas"].map((area) => (
                <div key={area} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
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
            Book Render Cleaning in Golborne
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For safe, reliable, and professional render cleaning in Golborne, contact R.R.M External Cleaning Specialist today.
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

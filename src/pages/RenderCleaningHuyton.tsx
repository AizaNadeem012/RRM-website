import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Shield, Star, Award, AlertTriangle,
  PaintBucket, Home, Leaf, BadgeCheck, Clock, Users
} from "lucide-react";

export default function RenderCleaningHuyton() {
  const renderTypes = [
    "K-Render",
    "Silicone Render",
    "Monocouche Render",
    "Acrylic Render",
    "Pebbledash",
    "Textured & Coloured Render"
  ];

  const benefits = [
    "Restores original render colour",
    "Removes algae and red staining",
    "Prevents long-term damage",
    "Improves kerb appeal",
    "Increases property value",
    "Extends render lifespan"
  ];

  const whyChooseUs = [
    "Local render cleaning experts in Huyton",
    "Fully insured for peace of mind",
    "Render-safe soft washing systems",
    "Eco-friendly, COSHH-compliant products",
    "Honest pricing and clear communication",
    "Strong local reputation and reviews"
  ];

  const areas = [
    "Huyton",
    "Prescot",
    "Roby",
    "Whiston",
    "Knotty Ash",
    "Knowsley",
    "Liverpool & surrounding areas"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Render Cleaning Huyton | R.R.M External Cleaning Specialist</title>
        <meta 
          name="description" 
          content="Professional render cleaning in Huyton. Safe soft washing for K-Render & coloured render. Fully insured. Call R.R.M on +44 7845 463877." 
        />
        <link rel="canonical" href="https://rrmcleaning.co.uk/render-cleaning-huyton" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Huyton & Surrounding Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-shadow">
              Render Cleaning in Huyton
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Safe & Professional Render Cleaning by R.R.M External Cleaning Specialist
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
              If your rendered walls are covered in green algae, red staining, or black marks, professional render 
              cleaning in Huyton can restore your property's appearance without causing damage.
            </p>
            <p className="text-lg text-muted-foreground">
              R.R.M External Cleaning Specialist provides specialist render cleaning services using soft washing 
              methods designed specifically for modern and traditional render systems.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Professional Render Cleaning Services in Huyton
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              Rendered surfaces attract dirt and organic growth more than brick or stone, especially in Huyton's 
              damp climate. Without proper treatment, algae and staining can become deeply embedded and difficult to remove.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              We clean render safely and effectively using low-pressure soft washing and render-approved cleaning 
              solutions, restoring colour while protecting the surface.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Render */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Types of Render We Clean
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We clean all common render finishes, including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {renderTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border card-shadow">
                  <PaintBucket className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              Each render type is assessed before cleaning to ensure the correct method is used.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 section-gradient">
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
                  We assess the render type, level of staining, access, and exposure to determine the safest approach.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Soft Washing Treatment</h3>
                <p className="text-muted-foreground">
                  A specialist biocidal solution is applied at low pressure to kill algae, mould, lichen, and spores at the root.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Rinse</h3>
                <p className="text-muted-foreground">
                  The surface is gently rinsed to remove contamination without erosion or colour loss.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Biocide Protection</h3>
                <p className="text-muted-foreground">
                  An after-treatment can be applied to slow regrowth and keep render cleaner for longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Soft Washing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Why Soft Washing Is Essential for Render
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-red-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold text-foreground">High-Pressure Washing Can Cause:</h3>
                </div>
                <ul className="space-y-3">
                  {["Surface damage", "Cracking", "Colour fading", "Water ingress"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-green-200 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold text-foreground">Soft Washing Benefits:</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Soft washing cleans render thoroughly while preserving its structure and finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Benefits of Professional Render Cleaning
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Home className="h-7 w-7 text-primary" />
                  Residential Render Cleaning in Huyton
                </h3>
                <p className="text-muted-foreground mb-4">We regularly clean render on:</p>
                <ul className="space-y-2">
                  {[
                    "Detached and semi-detached homes",
                    "New-build properties",
                    "Renovated houses",
                    "Housing developments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Whether you need a one-off clean or ongoing maintenance, we can help.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border card-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Commercial Render Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">We also provide render cleaning for:</p>
                <ul className="space-y-2">
                  {[
                    "Apartment blocks",
                    "Offices and business premises",
                    "Retail units",
                    "Schools and public buildings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All work is carried out in line with UK health & safety regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              How Much Does Render Cleaning Cost in Huyton?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">Pricing depends on:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {["Render type", "Property size", "Level of contamination", "Access and height"].map((factor, index) => (
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
      <section className="py-16 bg-background">
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
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Safety & Environmental Care
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">We take care to:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Protect plants and surrounding areas",
                "Control water runoff",
                "Use non-abrasive methods",
                "Clean responsibly and safely"
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Leaf className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              Your property is always treated with respect.
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
                  q: "How often should render be cleaned?",
                  a: "Usually every 2–4 years, depending on location and exposure."
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
              Areas We Cover
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
            Book Render Cleaning in Huyton
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            For safe, reliable, and professional render cleaning in Huyton, contact R.R.M External Cleaning Specialist today.
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

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, DollarSign, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: "Event Types",
      description: "Weddings, birthdays, corporate events - tailored menus for every occasion"
    },
    {
      icon: DollarSign,
      title: "Real-time Pricing",
      description: "Instant cost calculations as you build your perfect menu"
    },
    {
      icon: Clock,
      title: "Quick Planning",
      description: "Smart recommendations to streamline your event planning process"
    }
  ];

  const eventTypes = [
    {
      name: "Weddings",
      description: "Elegant dining for your special day",
      image: "/elegant-wedding-catering-banquet-setup.jpg",
      features: ["Multi-course meals", "Dietary accommodations", "Premium service"]
    },
    {
      name: "Birthday Parties",
      description: "Fun and festive celebration meals",
      image: "/colorful-birthday-party-celebration-food-buffet.jpg",
      features: ["Kid-friendly options", "Party favorites", "Custom cakes"]
    },
    {
      name: "Corporate Events",
      description: "Professional catering for business",
      image: "/professional-corporate-event-catering-business-mee.jpg",
      features: ["Breakfast meetings", "Lunch presentations", "Networking dinners"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-3 py-1">
            Smart Event Catering Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Plan Your Perfect
            <span className="text-primary block">Event Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Intelligent menu recommendations, real-time cost estimates, and seamless planning 
            for weddings, parties, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/events">
                Start Planning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Sample Menus
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Catering Planner?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline your event planning with our intelligent catering solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Catering for Every Occasion
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized menus and service styles tailored to your event type
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <ul className="space-y-2">
                    {event.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-12 border border-primary/10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get started with our intelligent catering planner and create the perfect menu 
              for your special occasion in minutes.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/events">
                Start Planning Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

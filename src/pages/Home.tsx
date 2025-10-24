import { useState, useEffect } from "react";
import { Star, Clock, TrendingUp, Sparkles, Zap, Activity } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ServerCard from "@/components/ServerCard";
import TermsModal from "@/components/TermsModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80",
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80",
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const favoriteServers = [
    {
      id: "1",
      name: "Los Santos Roleplay",
      players: 128,
      maxPlayers: 200,
      gameMode: "Roleplay",
      map: "Los Santos",
      ping: 45,
      isFavorite: true,
      banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=200&q=80",
    },
    {
      id: "2",
      name: "Racing Paradise",
      players: 64,
      maxPlayers: 100,
      gameMode: "Racing",
      map: "Custom Track",
      ping: 32,
      isFavorite: true,
      banner: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&q=80",
    },
  ];
  
  const recentServers = [
    {
      id: "3",
      name: "Cops & Robbers Elite",
      players: 89,
      maxPlayers: 150,
      gameMode: "Cops & Robbers",
      map: "Liberty City",
      ping: 28,
      banner: "https://images.unsplash.com/photo-1532009877282-3340270e0529?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=200&q=80",
    },
    {
      id: "4",
      name: "Deathmatch Arena",
      players: 45,
      maxPlayers: 60,
      gameMode: "Deathmatch",
      map: "Arena",
      ping: 52,
      banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&q=80",
    },
  ];
  
  const stats = [
    { label: "Active Servers", value: "2,847", icon: TrendingUp, gradient: "from-accent to-orange-600" },
    { label: "Online Players", value: "45,392", icon: Activity, gradient: "from-primary to-accent" },
    { label: "Your Playtime", value: "142h", icon: Zap, gradient: "from-success to-emerald-400" },
  ];
  
  return (
    <div className="min-h-screen bg-background pr-20">
      <Sidebar />
      <TermsModal />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Image Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
            </div>
          ))}
        </div>
        
        {/* Ambient Background Effects */}
        <div className="absolute top-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm text-accent font-medium">Welcome to GG Multiplayer</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-serif font-black mb-6 leading-none animate-slide-in-left">
              <span className="gradient-white-orange">Your Gaming</span>
              <br />
              <span className="text-foreground">Universe</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Dive into immersive experiences. Connect with players worldwide. Create unforgettable moments.
            </p>
            
            <div className="flex gap-4 animate-fade-in">
              <Link to="/servers">
                <Button size="lg" className="gap-2 shadow-lg shadow-accent/20">
                  <TrendingUp className="h-5 w-5" />
                  Explore Servers
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Grid */}
      <section className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur transition-all duration-300`} />
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 group-hover:border-accent/50">
                <stat.icon className="h-8 w-8 mb-4 text-accent" />
                <div className="text-4xl font-serif font-bold mb-2 bg-gradient-to-br bg-clip-text text-transparent from-foreground to-muted-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Favorite Servers */}
      <section className="container mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-serif font-bold flex items-center gap-3 mb-2">
              <Star className="h-8 w-8 text-accent" />
              Favorite Servers
            </h2>
            <p className="text-muted-foreground">Your most played communities</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {favoriteServers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
      </section>
      
      {/* Recent Servers */}
      <section className="container mx-auto px-8 py-12 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-serif font-bold flex items-center gap-3 mb-2">
              <Clock className="h-8 w-8 text-accent" />
              Recently Played
            </h2>
            <p className="text-muted-foreground">Jump back into the action</p>
          </div>
          <Link to="/servers">
            <Button variant="outline" className="gap-2">
              View All
              <TrendingUp className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recentServers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

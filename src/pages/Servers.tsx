import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ServerCard from "@/components/ServerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FilterPanel, { FilterOptions } from "@/components/FilterPanel";
import ActivityFeed from "@/components/ActivityFeed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Servers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("players");
  const [filters, setFilters] = useState<FilterOptions>({
    gameModes: [],
    playerRange: [0, 200],
    pingRange: [0, 100],
    maps: [],
    tags: [],
  });
  
  const allServers = [
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
    {
      id: "5",
      name: "Street Racing Club",
      players: 72,
      maxPlayers: 80,
      gameMode: "Racing",
      map: "Downtown",
      ping: 38,
      banner: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?w=200&q=80",
    },
    {
      id: "6",
      name: "Grand Theft Auto RP",
      players: 156,
      maxPlayers: 200,
      gameMode: "Roleplay",
      map: "Los Santos",
      ping: 41,
      banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&q=80",
    },
  ];
  
  const filteredServers = allServers
    .filter((server) => {
      const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGameMode =
        filters.gameModes.length === 0 || filters.gameModes.includes(server.gameMode);
      
      const matchesPlayerRange =
        server.players >= filters.playerRange[0] && server.players <= filters.playerRange[1];
      
      const matchesPing = server.ping <= filters.pingRange[1];
      
      const matchesMap = filters.maps.length === 0 || filters.maps.includes(server.map);
      
      return matchesSearch && matchesGameMode && matchesPlayerRange && matchesPing && matchesMap;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "players":
          return b.players - a.players;
        case "ping":
          return a.ping - b.ping;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  
  return (
    <div className="min-h-screen bg-background pr-20">
      <Sidebar />
      
      {/* Header */}
      <section className="border-b border-border bg-secondary/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-serif font-black mb-2">
                <span className="gradient-white-orange">Server Browser</span>
              </h1>
              <p className="text-muted-foreground">
                Discover {allServers.length} active communities
              </p>
            </div>
            <FilterPanel onFilterChange={setFilters} />
          </div>
          
          {/* Search & Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search servers by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[220px] h-12 bg-card/50 backdrop-blur-sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="players">Most Players</SelectItem>
                <SelectItem value="ping">Best Ping</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Server Grid */}
          <div className="lg:col-span-3">
            {filteredServers.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServers.map((server, index) => (
                  <div
                    key={server.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ServerCard {...server} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">No servers found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servers;

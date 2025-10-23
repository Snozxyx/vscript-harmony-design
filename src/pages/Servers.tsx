import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServerCard from "@/components/ServerCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Servers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameMode, setGameMode] = useState("all");
  
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
    },
    {
      id: "3",
      name: "Cops & Robbers Elite",
      players: 89,
      maxPlayers: 150,
      gameMode: "Cops & Robbers",
      map: "Liberty City",
      ping: 28,
    },
    {
      id: "4",
      name: "Deathmatch Arena",
      players: 45,
      maxPlayers: 60,
      gameMode: "Deathmatch",
      map: "Arena",
      ping: 52,
    },
    {
      id: "5",
      name: "Street Racing Club",
      players: 72,
      maxPlayers: 80,
      gameMode: "Racing",
      map: "Downtown",
      ping: 38,
    },
    {
      id: "6",
      name: "Grand Theft Auto RP",
      players: 156,
      maxPlayers: 200,
      gameMode: "Roleplay",
      map: "Los Santos",
      ping: 41,
    },
  ];
  
  const filteredServers = allServers.filter((server) => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMode = gameMode === "all" || server.gameMode.toLowerCase() === gameMode.toLowerCase();
    return matchesSearch && matchesMode;
  });
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-serif font-black mb-4">
            <span className="gradient-white-orange">All Servers</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse {allServers.length} active servers
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search servers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={gameMode} onValueChange={setGameMode}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Game Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="roleplay">Roleplay</SelectItem>
              <SelectItem value="racing">Racing</SelectItem>
              <SelectItem value="deathmatch">Deathmatch</SelectItem>
              <SelectItem value="cops & robbers">Cops & Robbers</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Server Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
        
        {filteredServers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No servers found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Servers;

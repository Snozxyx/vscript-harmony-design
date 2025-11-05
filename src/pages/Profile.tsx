import { useState } from "react";
import { Trophy, Clock, Star, Target, Award, TrendingUp, Gamepad2 } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const userStats = {
    name: "GamerPro123",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
    level: 42,
    xp: 7850,
    xpToNext: 10000,
    totalPlaytime: "142h 32m",
    favoriteServer: "Los Santos Roleplay",
    serversJoined: 47,
    achievements: 23,
    rank: "Elite Player",
  };

  const achievements = [
    { id: 1, name: "First Steps", description: "Join your first server", icon: Target, earned: true, rarity: "common" },
    { id: 2, name: "Social Butterfly", description: "Add 10 friends", icon: Star, earned: true, rarity: "common" },
    { id: 3, name: "Night Owl", description: "Play for 100 hours", icon: Clock, earned: true, rarity: "rare" },
    { id: 4, name: "Server Hopper", description: "Join 50 different servers", icon: Gamepad2, earned: false, rarity: "rare" },
    { id: 5, name: "Legend", description: "Reach level 50", icon: Trophy, earned: false, rarity: "legendary" },
    { id: 6, name: "Champion", description: "Win 100 matches", icon: Award, earned: true, rarity: "epic" },
  ];

  const recentMatches = [
    { server: "Los Santos Roleplay", gameMode: "Roleplay", duration: "2h 15m", result: "Completed", date: "Today" },
    { server: "Racing Paradise", gameMode: "Racing", duration: "45m", result: "Victory", date: "Yesterday" },
    { server: "Deathmatch Arena", gameMode: "Deathmatch", duration: "1h 30m", result: "Defeat", date: "2 days ago" },
    { server: "Cops & Robbers Elite", gameMode: "Cops & Robbers", duration: "3h 10m", result: "Completed", date: "3 days ago" },
  ];

  const levelProgress = (userStats.xp / userStats.xpToNext) * 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "from-accent to-primary";
      case "epic":
        return "from-primary to-accent";
      case "rare":
        return "from-accent to-orange-600";
      default:
        return "from-muted to-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pr-20">
      <Sidebar />

      <div className="container mx-auto px-8 py-8">
        {/* Profile Header */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <img
                src={userStats.avatar}
                alt={userStats.name}
                className="w-24 h-24 rounded-2xl border-2 border-accent"
              />
              <Badge className="absolute -bottom-2 -right-2 bg-accent">
                Lv. {userStats.level}
              </Badge>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-serif font-black gradient-white-orange">
                  {userStats.name}
                </h1>
                <Badge variant="secondary">{userStats.rank}</Badge>
              </div>

              <div className="grid grid-cols-4 gap-6 mt-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Playtime</p>
                  <p className="text-lg font-bold">{userStats.totalPlaytime}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Servers Joined</p>
                  <p className="text-lg font-bold">{userStats.serversJoined}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Achievements</p>
                  <p className="text-lg font-bold">{userStats.achievements}/50</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Favorite Server</p>
                  <p className="text-sm font-semibold truncate">{userStats.favoriteServer}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Level {userStats.level}</span>
                  <span className="text-sm font-medium">
                    {userStats.xp}/{userStats.xpToNext} XP
                  </span>
                </div>
                <Progress value={levelProgress} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="history">Match History</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className={`bg-card/30 backdrop-blur-sm border-border transition-all animate-fade-in ${
                    achievement.earned ? "border-accent/50" : "opacity-60"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${getRarityColor(
                          achievement.rarity
                        )}`}
                      >
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                      {achievement.earned && (
                        <Badge variant="secondary" className="text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base mt-3">{achievement.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {achievement.rarity}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/30 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    Performance Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Win Rate</span>
                    <span className="font-bold">67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">K/D Ratio</span>
                    <span className="font-bold">2.4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Match Time</span>
                    <span className="font-bold">1h 45m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Best Streak</span>
                    <span className="font-bold">12 wins</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-accent" />
                    Game Mode Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Roleplay</span>
                    <span className="font-bold">45h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Racing</span>
                    <span className="font-bold">32h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Deathmatch</span>
                    <span className="font-bold">28h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cops & Robbers</span>
                    <span className="font-bold">37h</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="bg-card/30 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMatches.map((match, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border hover:border-accent/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold">{match.server}</p>
                          <p className="text-sm text-muted-foreground">{match.gameMode}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              match.result === "Victory"
                                ? "default"
                                : match.result === "Defeat"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {match.result}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{match.duration}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{match.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
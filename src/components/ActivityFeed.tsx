import { Activity, TrendingUp, UserPlus, Zap, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: string;
  type: "join" | "trending" | "achievement" | "event";
  serverName: string;
  description: string;
  timestamp: string;
  playerCount?: number;
}

const ActivityFeed = () => {
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "trending",
      serverName: "Los Santos Roleplay Elite",
      description: "Now trending with 187 active players",
      timestamp: "2 min ago",
      playerCount: 187,
    },
    {
      id: "2",
      type: "join",
      serverName: "Racing Paradise",
      description: "GamerPro123 and 15 others just joined",
      timestamp: "5 min ago",
    },
    {
      id: "3",
      type: "achievement",
      serverName: "Deathmatch Arena",
      description: "xXSniperXx achieved 'Headshot Master'",
      timestamp: "12 min ago",
    },
    {
      id: "4",
      type: "event",
      serverName: "Cops & Robbers Elite",
      description: "Heist event starting in 15 minutes",
      timestamp: "18 min ago",
    },
    {
      id: "5",
      type: "trending",
      serverName: "Street Racing Club",
      description: "Peak player count reached: 80/80",
      timestamp: "23 min ago",
      playerCount: 80,
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "join":
        return <UserPlus className="h-4 w-4 text-accent" />;
      case "trending":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "achievement":
        return <Trophy className="h-4 w-4 text-primary" />;
      case "event":
        return <Zap className="h-4 w-4 text-accent" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "join":
        return "border-accent/20 bg-accent/5";
      case "trending":
        return "border-success/20 bg-success/5";
      case "achievement":
        return "border-primary/20 bg-primary/5";
      case "event":
        return "border-accent/20 bg-accent/5";
      default:
        return "border-border";
    }
  };

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Activity className="h-5 w-5 text-accent" />
          Live Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`p-3 rounded-lg border transition-all animate-fade-in ${getActivityColor(
                activity.type
              )}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{getActivityIcon(activity.type)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {activity.serverName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                    {activity.playerCount && (
                      <Badge variant="secondary" className="text-xs">
                        {activity.playerCount} online
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-xs text-accent hover:underline">View All Activity</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
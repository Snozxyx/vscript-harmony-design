import { Users, UserPlus, MessageCircle, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "in-game";
  currentServer?: string;
}

const FriendsList = () => {
  const friends: Friend[] = [
    {
      id: "1",
      name: "CoolGamer42",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      status: "in-game",
      currentServer: "Los Santos Roleplay",
    },
    {
      id: "2",
      name: "ProRacer99",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      status: "online",
    },
    {
      id: "3",
      name: "SnipeKing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      status: "in-game",
      currentServer: "Deathmatch Arena",
    },
    {
      id: "4",
      name: "RPMaster",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      status: "offline",
    },
    {
      id: "5",
      name: "SpeedDemon",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      status: "online",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success";
      case "in-game":
        return "bg-accent";
      case "offline":
        return "bg-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "in-game":
        return "In Game";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-accent" />
            Friends
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="p-3 rounded-lg border border-border hover:border-accent/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${getStatusColor(
                      friend.status
                    )}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{friend.name}</p>
                  {friend.currentServer ? (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Gamepad2 className="h-3 w-3" />
                      <span className="truncate">{friend.currentServer}</span>
                    </div>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      {getStatusText(friend.status)}
                    </Badge>
                  )}
                </div>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendsList;
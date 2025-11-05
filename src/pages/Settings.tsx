import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Bell, Shield, Palette, User, Volume2, Eye, Zap } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const settingsSections = [
    {
      icon: User,
      title: "Profile",
      description: "Manage your account settings",
      items: [
        { label: "Display Name", value: "GamerPro123", type: "input" },
        { label: "Email", value: "gamer@example.com", type: "input" },
        { label: "Profile Visibility", type: "switch", enabled: true },
      ]
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure notification preferences",
      items: [
        { label: "Server Updates", type: "switch", enabled: true },
        { label: "Friend Requests", type: "switch", enabled: true },
        { label: "Desktop Notifications", type: "switch", enabled: false },
        { label: "Sound Alerts", type: "switch", enabled: true },
      ]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Control your privacy settings",
      items: [
        { label: "Two-Factor Authentication", type: "switch", enabled: false },
        { label: "Show Online Status", type: "switch", enabled: true },
        { label: "Activity Tracking", type: "switch", enabled: false },
        { label: "Share Match History", type: "switch", enabled: true },
      ]
    },
    {
      icon: Palette,
      title: "Appearance",
      description: "Customize your experience",
      items: [
        { label: "Dark Mode", type: "switch", enabled: true },
        { label: "Compact Mode", type: "switch", enabled: false },
        { label: "Animation Effects", type: "switch", enabled: true },
        { label: "Reduced Motion", type: "switch", enabled: false },
      ]
    },
    {
      icon: Volume2,
      title: "Audio & Video",
      description: "Adjust multimedia settings",
      items: [
        { label: "Master Volume", type: "slider", value: 80 },
        { label: "UI Sound Effects", type: "switch", enabled: true },
        { label: "Background Music", type: "switch", enabled: false },
        { label: "Voice Chat", type: "switch", enabled: true },
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimize app performance",
      items: [
        { label: "Hardware Acceleration", type: "switch", enabled: true },
        { label: "Auto-Update Servers", type: "switch", enabled: true },
        { label: "Cache Server Data", type: "switch", enabled: true },
        { label: "Preload Server Banners", type: "switch", enabled: false },
      ]
    },
  ];

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-background pr-20">
      <Sidebar />
      
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="border-b border-border px-8 py-6">
          <h1 className="text-4xl font-serif font-black gradient-white-orange">
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account and preferences
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
            {settingsSections.map((section) => (
              <Card key={section.title} className="bg-card/30 backdrop-blur-sm border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <section.icon className="h-5 w-5 text-accent" />
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-xs">{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.items.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`${section.title}-${index}`} className="text-sm">
                          {item.label}
                        </Label>
                        {item.type === "switch" && (
                          <Switch id={`${section.title}-${index}`} defaultChecked={item.enabled} />
                        )}
                      </div>
                      {item.type === "input" && (
                        <Input
                          id={`${section.title}-${index}`}
                          defaultValue={item.value}
                          className="h-9"
                        />
                      )}
                      {item.type === "slider" && (
                        <div className="space-y-2">
                          <Slider defaultValue={[item.value]} max={100} step={1} />
                          <span className="text-xs text-muted-foreground">{item.value}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 max-w-6xl">
            <Button variant="default" onClick={handleSave}>Save Changes</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, Shield, Palette, Globe, User, Mail, Lock } from "lucide-react";

const Settings = () => {
  const settingsSections = [
    {
      icon: User,
      title: "Profile",
      description: "Manage your account settings",
      items: [
        { label: "Display Name", value: "GamerPro123", type: "text" },
        { label: "Email Notifications", type: "switch", enabled: true },
        { label: "Profile Visibility", type: "switch", enabled: false },
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
      ]
    },
  ];

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
                <CardContent className="space-y-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <Label htmlFor={`${section.title}-${index}`} className="text-sm">
                        {item.label}
                      </Label>
                      {item.type === "switch" ? (
                        <Switch id={`${section.title}-${index}`} defaultChecked={item.enabled} />
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 max-w-6xl">
            <Button variant="default">Save Changes</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

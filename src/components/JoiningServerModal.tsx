import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Loader2, Check, Server } from "lucide-react";

interface JoiningServerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serverName: string;
  serverLogo?: string;
}

const JoiningServerModal = ({ open, onOpenChange, serverName, serverLogo }: JoiningServerModalProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"connecting" | "loading" | "complete">("connecting");

  useEffect(() => {
    if (!open) {
      setProgress(0);
      setStatus("connecting");
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatus("complete");
          return 100;
        }
        
        if (prev >= 60 && status === "connecting") {
          setStatus("loading");
        }
        
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [open, status]);

  const getStatusText = () => {
    switch (status) {
      case "connecting":
        return "Connecting to server...";
      case "loading":
        return "Loading resources...";
      case "complete":
        return "Connected! Launching game...";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {serverLogo ? (
              <img src={serverLogo} alt={serverName} className="w-10 h-10 rounded-lg object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gradient-bg flex items-center justify-center">
                <Server className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            <span>Joining {serverName}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{getStatusText()}</span>
              <span className="font-mono text-accent">{progress}%</span>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {status === "connecting" ? (
                <Loader2 className="h-4 w-4 animate-spin text-accent" />
              ) : (
                <Check className="h-4 w-4 text-success" />
              )}
              <span className="text-sm">Establishing connection</span>
            </div>
            
            <div className="flex items-center gap-3">
              {status === "loading" || status === "complete" ? (
                status === "complete" ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                )
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-muted" />
              )}
              <span className="text-sm">Downloading resources</span>
            </div>

            <div className="flex items-center gap-3">
              {status === "complete" ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-muted" />
              )}
              <span className="text-sm">Ready to play</span>
            </div>
          </div>

          {/* Server Info */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Make sure FiveM is running in the background
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoiningServerModal;

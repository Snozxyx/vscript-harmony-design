import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Sparkles, Link as LinkIcon } from "lucide-react";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegisterModal = ({ open, onOpenChange }: RegisterModalProps) => {
  const navigate = useNavigate();

  const handleLinkAccount = () => {
    toast.success("Account linked successfully!");
    onOpenChange(false);
    navigate("/");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2 w-fit mx-auto">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent font-medium">Join the Community</span>
          </div>
          <DialogTitle className="text-4xl font-serif font-black text-center">
            <span className="gradient-white-orange">Connect Your Account</span>
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Link your GG Multiplayer account to access all features and join servers
          </DialogDescription>
        </DialogHeader>

        <div className="py-8">
          <Button
            onClick={handleLinkAccount}
            className="w-full h-14 text-lg gap-3 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
            size="lg"
          >
            <LinkIcon className="h-5 w-5" />
            Link Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;

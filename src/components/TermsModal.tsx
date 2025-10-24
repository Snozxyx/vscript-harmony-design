import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

const TermsModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem("gg-terms-accepted");
    if (!hasAcceptedTerms) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gg-terms-accepted", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-xl border-border max-h-[90vh]">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2 w-fit mx-auto">
            <FileText className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent font-medium">Important Information</span>
          </div>
          <DialogTitle className="text-4xl font-serif font-black text-center">
            <span className="gradient-white-orange">Welcome to GG Multiplayer</span>
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Please read and accept our terms and conditions to continue
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">1. Acceptance of Terms</h3>
              <p>
                By accessing and using GG Multiplayer, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to these terms, please do not
                use this service.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">2. Use License</h3>
              <p>
                Permission is granted to temporarily access GG Multiplayer for personal,
                non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">3. User Conduct</h3>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use cheats, exploits, automation software, bots, hacks, or any unauthorized third-party software</li>
                <li>Engage in harassment, abuse, or toxic behavior towards other players</li>
                <li>Share or distribute offensive, illegal, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to the game servers or other users' accounts</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">4. Privacy Policy</h3>
              <p>
                We collect and use personal information in accordance with our Privacy Policy. By
                using GG Multiplayer, you consent to such processing and warrant that all data
                provided by you is accurate.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">5. Account Suspension</h3>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms or
                engage in behavior detrimental to the community.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">6. Disclaimer</h3>
              <p>
                GG Multiplayer is provided "as is" without any representations or warranties. We do
                not warrant that the service will be uninterrupted or error-free.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">7. Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold text-lg mb-2">8. Contact Information</h3>
              <p>
                For questions about these terms, please contact us through our support channels.
              </p>
            </section>
          </div>
        </ScrollArea>

        <DialogFooter className="sm:justify-center">
          <Button
            onClick={handleAccept}
            className="w-full sm:w-auto px-12 h-12 text-base shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
            size="lg"
          >
            Accept & Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;

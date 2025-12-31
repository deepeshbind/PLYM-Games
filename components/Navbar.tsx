import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { AuroraText } from "@/components/ui/aurora-text"
import { TypingAnimation } from "./ui/typing-animation";
import { ThemeSwitch } from "./ui/themeSwitch";

export default function Navbar() {
  return (
    <main className="h-20 py-7 px-2 border-b sticky top-0 z-99 backdrop-blur-md border flex items-center justify-between">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 w-full">
        <div className="flex items-center">
          <h5 className="text-lg font-bold flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold font-mono">PLYM Games</p>
            </div>
            <span className="text-xs rounded-full bg-primary/10 px-2 py-1 w-fit">
              BETA
            </span>
          </h5>
          <Separator orientation="vertical" className="m-2 h-6" />
          <h5 className="text-sm font-semibold text-primary/70"><AuroraText><TypingAnimation>Gaming Café OS</TypingAnimation></AuroraText></h5>
        </div>
        <div className="flex items-center">
          <div className="items-center"><ThemeSwitch /></div>
            <Separator orientation="vertical" className="m-2 h-6" />
          <Button variant="accent" className="font-bold px-6 py-3">Login</Button>
        </div>
      </nav>
    </main>
  );
}

import { Button } from "@/components/ui/button"
import { BarChart3, Settings, User } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">SentimentAI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#analisis" className="text-foreground hover:text-primary transition-colors">
              Analisis
            </a>
            <a href="#laporan" className="text-foreground hover:text-primary transition-colors">
              Laporan
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

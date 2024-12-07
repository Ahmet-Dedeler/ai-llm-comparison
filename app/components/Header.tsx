import { Github, BarChart3 } from 'lucide-react'
import { Button } from "@/components/ui/button"

const InferenceLogo = () => (
  <svg
    className="mr-2 h-4 w-4"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="20" width="8" height="60" fill="currentColor" />
    <rect x="28" y="20" width="12" height="60" fill="currentColor" />
    <rect x="50" y="20" width="16" height="60" fill="currentColor" />
    <rect x="76" y="20" width="20" height="60" fill="currentColor" />
  </svg>
)

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <BarChart3 className="w-8 h-8" />
        <span className="text-2xl font-bold">countless.dev</span>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Button variant="outline" size="sm" asChild className="border-black text-black hover:bg-gray-100">
          <a href="https://inference.net/?utm_source=countless" target="_blank" rel="noopener noreferrer">
            <InferenceLogo />
            inference.net
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild className="border-black text-black hover:bg-gray-100">
          <a href="https://github.com/Ahmet-Dedeler/ai-llm-comparison" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        {/* ... (other buttons) ... */}
      </div>
    </header>
  )
}
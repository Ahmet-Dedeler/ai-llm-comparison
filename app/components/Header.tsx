import { Github, BarChart3 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <BarChart3 className="w-8 h-8" />
        <span className="text-2xl font-bold">countless.dev</span>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Button variant="outline" size="sm" asChild className="border-black text-black hover:bg-gray-100">
          <a href="https://github.com/Ahmet-Dedeler/ai-llm-comparison" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild className="border-black text-black hover:bg-gray-100">
          <a href="https://supabase.com/blog/supabase-lw12-hackathon" target="_blank" rel="noopener noreferrer">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.659z"/>
            </svg>
            Supabase Launch Week 12
          </a>
        </Button>
        {/* ... (other buttons) ... */}
      </div>
    </header>
  )
}
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Youtube, Mail, Phone, Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="max-w-4xl w-full space-y-16">
        {/* Header Section */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            anish ganesh
          </h1>
          <p className="text-xl text-muted-foreground">
            i like to build stuff.
          </p>
        </header>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-light text-center">projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder project card */}
            <Card className="group hover:bg-accent transition-soft cursor-pointer border-border/50">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <Plus className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-soft" />
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-soft">
                  coming soon
                </p>
              </CardContent>
            </Card>
            
            {/* You can add more placeholder cards or actual projects here */}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-center">connect</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anishkganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-accent transition-soft group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-soft" />
            </a>
            <a
              href="https://www.linkedin.com/in/anishkganesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-accent transition-soft group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-soft" />
            </a>
            <a
              href="https://www.youtube.com/@anish9411"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-accent transition-soft group"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-soft" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6 pb-8">
          <h2 className="text-2xl font-light text-center">contact</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:anishkganesh@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-soft group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-soft" />
              <span className="text-muted-foreground group-hover:text-foreground transition-soft">
                anishkganesh@gmail.com
              </span>
            </a>
            <a
              href="tel:2159867669"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-soft group"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-soft" />
              <span className="text-muted-foreground group-hover:text-foreground transition-soft">
                215-986-7669
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

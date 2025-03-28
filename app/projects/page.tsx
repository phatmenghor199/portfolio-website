"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { MotionDiv } from "@/components/motion-components"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeCategory, setActiveCategory] = useState("all")

  // Get unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))]

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || project.category === activeCategory

      return matchesSearch && matchesCategory
    })

    setFilteredProjects(filtered)
  }, [searchQuery, activeCategory])

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <MotionDiv
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-text mb-4">Projects</h1>
        <p className="text-muted-foreground md:text-xl">
          Explore my portfolio of work across various technologies and industries.
        </p>
      </MotionDiv>

      <Card className="mb-8 glass-effect gradient-border">
        <CardHeader className="pb-0">
          <CardTitle className="text-xl">Find Projects</CardTitle>
          <CardDescription>Search by keyword or filter by category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-10 bg-background/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 overflow-x-auto py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-button ${activeCategory === category ? "active" : ""}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </MotionDiv>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}


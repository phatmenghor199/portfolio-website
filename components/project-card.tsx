"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden gradient-border bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary">{project.category}</Badge>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary hover:text-primary/80"
            >
              Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              Source <Github className="ml-1 h-4 w-4" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}


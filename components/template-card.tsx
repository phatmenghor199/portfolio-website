"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function TemplateCard({ template, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={template.image || "/placeholder.svg"}
            alt={template.title}
            width={600}
            height={340}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary">{template.category}</Badge>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl">{template.title}</CardTitle>
          <CardDescription className="line-clamp-2">{template.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {template.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-end">
          <span className="flex items-center text-sm text-primary hover:text-primary/80">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


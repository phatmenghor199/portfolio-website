"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function ToolCard({ tool, isExpanded, onToggle }) {
  return (
    <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{tool.title}</CardTitle>
            <CardDescription className="mt-1">{tool.shortDescription}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onToggle}>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="p-4">
              <p className="mb-4">{tool.description}</p>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="space-y-1 mb-4">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tool.usageExample && (
                <>
                  <h4 className="font-semibold mb-2">Example Usage:</h4>
                  <pre className="p-3 bg-muted rounded-md overflow-x-auto text-sm mb-4">
                    <code>{tool.usageExample}</code>
                  </pre>
                </>
              )}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
      <CardFooter className="p-4 pt-0">
        <Link href={tool.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full">
            Open Tool <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


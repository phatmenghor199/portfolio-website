"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileCode, FolderTree } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TemplateDetails({ template, onBack }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="p-0 h-auto">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Templates
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <Image
              src={template.image || "/placeholder.svg"}
              alt={template.title}
              width={800}
              height={450}
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {template.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{template.title}</h1>
            <p className="text-muted-foreground mt-2">{template.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-1">
              {template.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Download className="mr-2 h-4 w-4" /> Download Template
          </Button>
        </div>
      </div>

      <Tabs defaultValue="setup">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="setup">Setup Instructions</TabsTrigger>
          <TabsTrigger value="structure">Project Structure</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
        </TabsList>
        <TabsContent value="setup" className="space-y-4 mt-4">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
            <ol className="space-y-4">
              {template.setupInstructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-bold mr-2">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </TabsContent>
        <TabsContent value="structure" className="space-y-4 mt-4">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FolderTree className="mr-2 h-5 w-5" /> Project Structure
            </h3>
            <pre className="p-4 bg-muted rounded-md overflow-x-auto">
              <code>{template.projectStructure}</code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="customization" className="space-y-4 mt-4">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileCode className="mr-2 h-5 w-5" /> Customization Options
            </h3>
            <div className="space-y-4">
              {template.customizationOptions.map((option, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{option.title}</h4>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}


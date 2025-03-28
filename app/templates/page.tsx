"use client"

import { useState } from "react"
import { templates } from "@/data/templates"
import { TemplateCard } from "@/components/template-card"
import { TemplateDetails } from "@/components/template-details"
import { MotionDiv } from "@/components/motion-components"

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <MotionDiv
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Templates
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Ready-to-use templates to jumpstart your development process.
        </p>
      </MotionDiv>

      {selectedTemplate ? (
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <TemplateDetails template={selectedTemplate} onBack={() => setSelectedTemplate(null)} />
        </MotionDiv>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <MotionDiv
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <TemplateCard template={template} onClick={() => setSelectedTemplate(template)} />
            </MotionDiv>
          ))}
        </div>
      )}
    </div>
  )
}


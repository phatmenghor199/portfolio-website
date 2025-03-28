"use client"

import { useState } from "react"
import { MotionDiv } from "@/components/motion-components"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Check, FileJson, Code, RefreshCw, Wand2 } from "lucide-react"

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState("json-to-ts")
  const [jsonInput, setJsonInput] = useState(
    '{\n  "name": "John Doe",\n  "age": 30,\n  "isActive": true,\n  "skills": ["JavaScript", "TypeScript", "React"]\n}',
  )
  const [tsOutput, setTsOutput] = useState(
    "interface User {\n  name: string;\n  age: number;\n  isActive: boolean;\n  skills: string[];\n}",
  )
  const [copied, setCopied] = useState(false)

  const [cssGradientType, setCssGradientType] = useState("linear")
  const [cssGradientAngle, setCssGradientAngle] = useState(90)
  const [cssGradientColors, setCssGradientColors] = useState([
    { color: "#6366f1", position: 0 },
    { color: "#a855f7", position: 100 },
  ])

  const [regexPattern, setRegexPattern] = useState("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  const [regexTestString, setRegexTestString] = useState("test@example.com")
  const [regexMatches, setRegexMatches] = useState(true)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const convertJsonToTs = () => {
    try {
      // This is a simplified version - in a real app, you'd have a more robust converter
      const jsonObj = JSON.parse(jsonInput)
      let output = "interface Generated {\n"

      Object.entries(jsonObj).forEach(([key, value]) => {
        let type = typeof value
        if (Array.isArray(value)) {
          const arrayType = value.length > 0 ? typeof value[0] : "any"
          type = `${arrayType}[]`
        } else if (type === "object" && value !== null) {
          type = "Record<string, any>"
        }
        output += `  ${key}: ${type};\n`
      })

      output += "}"
      setTsOutput(output)
    } catch (error) {
      setTsOutput(`// Error: ${error.message}`)
    }
  }

  const generateCssGradient = () => {
    const sortedColors = [...cssGradientColors].sort((a, b) => a.position - b.position)
    const colorStops = sortedColors.map((c) => `${c.color} ${c.position}%`).join(", ")

    if (cssGradientType === "linear") {
      return `linear-gradient(${cssGradientAngle}deg, ${colorStops})`
    } else {
      return `radial-gradient(circle, ${colorStops})`
    }
  }

  const testRegex = () => {
    try {
      const regex = new RegExp(regexPattern)
      setRegexMatches(regex.test(regexTestString))
    } catch (error) {
      setRegexMatches(false)
    }
  }

  const tools = [
    { id: "json-to-ts", name: "JSON to TypeScript", icon: <FileJson className="h-5 w-5" /> },
    { id: "css-gradient", name: "CSS Gradient Generator", icon: <Wand2 className="h-5 w-5" /> },
    { id: "regex-tester", name: "Regex Tester", icon: <Code className="h-5 w-5" /> },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <MotionDiv
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mb-4">
          Developer Tools
        </h1>
        <p className="text-muted-foreground md:text-xl">
          A collection of useful tools to enhance your development workflow.
        </p>
      </MotionDiv>

      <Card className="bg-card/50 backdrop-blur-sm gradient-border">
        <CardHeader>
          <CardTitle>Interactive Tools</CardTitle>
          <CardDescription>Select a tool to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start mb-6">
              {tools.map((tool) => (
                <TabsTrigger key={tool.id} value={tool.id} className="flex items-center gap-2">
                  {tool.icon}
                  {tool.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="json-to-ts" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">JSON Input</h3>
                    <Button variant="ghost" size="sm" onClick={convertJsonToTs} className="h-8 px-2 text-xs">
                      <RefreshCw className="h-3.5 w-3.5 mr-1" />
                      Convert
                    </Button>
                  </div>
                  <Textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    className="font-mono text-sm h-[300px]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">TypeScript Output</h3>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(tsOutput)} className="h-8 px-2 text-xs">
                      {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>
                  <Textarea value={tsOutput} readOnly className="font-mono text-sm h-[300px]" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="css-gradient" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Gradient Type</h3>
                    <div className="flex gap-2">
                      <Button
                        variant={cssGradientType === "linear" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCssGradientType("linear")}
                      >
                        Linear
                      </Button>
                      <Button
                        variant={cssGradientType === "radial" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCssGradientType("radial")}
                      >
                        Radial
                      </Button>
                    </div>
                  </div>

                  {cssGradientType === "linear" && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Angle: {cssGradientAngle}°</h3>
                      <Input
                        type="range"
                        min="0"
                        max="360"
                        value={cssGradientAngle}
                        onChange={(e) => setCssGradientAngle(Number.parseInt(e.target.value))}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Colors</h3>
                    {cssGradientColors.map((color, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="color"
                          value={color.color}
                          onChange={(e) => {
                            const newColors = [...cssGradientColors]
                            newColors[index].color = e.target.value
                            setCssGradientColors(newColors)
                          }}
                          className="w-10 h-10 rounded-md overflow-hidden"
                        />
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={color.position}
                          onChange={(e) => {
                            const newColors = [...cssGradientColors]
                            newColors[index].position = Number.parseInt(e.target.value)
                            setCssGradientColors(newColors)
                          }}
                          className="w-20"
                        />
                        <span className="text-sm">%</span>
                      </div>
                    ))}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCssGradientColors([...cssGradientColors, { color: "#ffffff", position: 50 }])}
                        disabled={cssGradientColors.length >= 5}
                      >
                        Add Color
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (cssGradientColors.length > 2) {
                            setCssGradientColors(cssGradientColors.slice(0, -1))
                          }
                        }}
                        disabled={cssGradientColors.length <= 2}
                      >
                        Remove Color
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Preview</h3>
                    <div className="w-full h-40 rounded-lg" style={{ background: generateCssGradient() }}></div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">CSS Code</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(`background: ${generateCssGradient()};`)}
                        className="h-8 px-2 text-xs"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                        {copied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <Textarea
                      value={`background: ${generateCssGradient()};`}
                      readOnly
                      className="font-mono text-sm h-20"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="regex-tester" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Regular Expression</h3>
                    <Textarea
                      value={regexPattern}
                      onChange={(e) => setRegexPattern(e.target.value)}
                      className="font-mono text-sm h-20"
                      placeholder="Enter regex pattern..."
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Test String</h3>
                    <Textarea
                      value={regexTestString}
                      onChange={(e) => setRegexTestString(e.target.value)}
                      className="font-mono text-sm h-20"
                      placeholder="Enter text to test..."
                    />
                  </div>

                  <Button onClick={testRegex}>Test Regex</Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Result</h3>
                    <div
                      className={`p-4 rounded-lg ${regexMatches ? "bg-green-500/20 border border-green-500/50" : "bg-red-500/20 border border-red-500/50"}`}
                    >
                      <p className="font-medium">{regexMatches ? "Match found!" : "No match"}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        The pattern {regexMatches ? "matches" : "does not match"} the test string.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Common Patterns</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setRegexPattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")}
                        className="justify-start h-auto py-2"
                      >
                        <div className="text-left">
                          <p className="font-medium">Email</p>
                          <p className="text-xs text-muted-foreground">Validates email addresses</p>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setRegexPattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
                        }
                        className="justify-start h-auto py-2"
                      >
                        <div className="text-left">
                          <p className="font-medium">Strong Password</p>
                          <p className="text-xs text-muted-foreground">
                            Min 8 chars, uppercase, lowercase, number, special char
                          </p>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setRegexPattern("^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$")
                        }
                        className="justify-start h-auto py-2"
                      >
                        <div className="text-left">
                          <p className="font-medium">URL</p>
                          <p className="text-xs text-muted-foreground">Validates website URLs</p>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}


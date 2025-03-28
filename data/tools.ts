export const tools = [
  {
    id: 1,
    title: "JSON to TypeScript Converter",
    shortDescription: "Convert JSON objects to TypeScript interfaces",
    description:
      "This tool automatically generates TypeScript interfaces from JSON data, saving you time and ensuring type safety in your TypeScript projects.",
    features: [
      "Automatic type inference",
      "Support for nested objects and arrays",
      "Optional properties detection",
      "Export as interface or type",
      "Copy to clipboard functionality",
    ],
    usageExample: `// Input JSON:
{
  "name": "John Doe",
  "age": 30,
  "isActive": true,
  "skills": ["JavaScript", "TypeScript", "React"]
}

// Generated TypeScript:
interface User {
  name: string;
  age: number;
  isActive: boolean;
  skills: string[];
}`,
    url: "https://transform.tools/json-to-typescript",
  },
  {
    id: 2,
    title: "CSS Gradient Generator",
    shortDescription: "Create beautiful CSS gradients with a visual editor",
    description:
      "Design custom gradients with an intuitive visual editor. Preview your gradient in real-time and copy the generated CSS code to use in your projects.",
    features: [
      "Linear and radial gradient support",
      "Multiple color stops",
      "Angle adjustment",
      "Real-time preview",
      "CSS code generation",
    ],
    url: "https://cssgradient.io/",
  },
  {
    id: 3,
    title: "SVG Optimizer",
    shortDescription: "Optimize and clean up SVG files",
    description:
      "Reduce the file size of your SVG images by removing unnecessary metadata, comments, and other elements that don't affect the visual output.",
    features: [
      "Remove unnecessary attributes",
      "Clean up path data",
      "Merge duplicate paths",
      "Remove comments and metadata",
      "Batch processing",
    ],
    usageExample: `<!-- Before optimization -->
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In -->
  <metadata>Created by Example</metadata>
  <path d="M50,10 L90,90 L10,90 Z" fill="#ff0000" stroke="#000000" stroke-width="2"/>
</svg>

<!-- After optimization -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 10L90 90H10z" fill="#f00" stroke="#000" stroke-width="2"/>
</svg>`,
    url: "https://jakearchibald.github.io/svgomg/",
  },
  {
    id: 4,
    title: "Regex Tester",
    shortDescription: "Test and debug regular expressions",
    description:
      "A powerful tool for testing, debugging, and learning regular expressions. Visualize your regex pattern and test it against different input strings in real-time.",
    features: [
      "Real-time matching",
      "Match highlighting",
      "Regex explanation",
      "Common patterns library",
      "Save and share regex patterns",
    ],
    usageExample: `// Regex pattern for validating email addresses
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$

// Test input:
john.doe@example.com  // Match
invalid-email         // No match`,
    url: "https://regex101.com/",
  },
  {
    id: 5,
    title: "Color Palette Generator",
    shortDescription: "Generate harmonious color palettes for your projects",
    description:
      "Create beautiful color palettes for your design projects. Generate complementary, analogous, triadic, and other color harmonies based on color theory.",
    features: [
      "Multiple harmony types",
      "Export as CSS variables",
      "Tailwind CSS color configuration",
      "Accessibility contrast checking",
      "Save and share palettes",
    ],
    url: "https://coolors.co/",
  },
  {
    id: 6,
    title: "API Request Builder",
    shortDescription: "Build and test API requests",
    description:
      "A comprehensive tool for building, testing, and debugging API requests. Support for various authentication methods, request parameters, and response visualization.",
    features: [
      "Support for GET, POST, PUT, DELETE, and other methods",
      "Authentication (Basic, Bearer, OAuth)",
      "Custom headers and query parameters",
      "JSON request body builder",
      "Response formatting and syntax highlighting",
    ],
    usageExample: `// Example GET request
GET https://api.example.com/users?page=1&limit=10
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json

// Response
{
  "users": [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Smith" }
  ],
  "total": 42,
  "page": 1,
  "limit": 10
}`,
    url: "https://hoppscotch.io/",
  },
  {
    id: 7,
    title: "Image Compressor",
    shortDescription: "Compress images without losing quality",
    description:
      "Reduce the file size of your images without significant quality loss. Support for various image formats including JPEG, PNG, SVG, and WebP.",
    features: [
      "Batch processing",
      "Adjustable compression level",
      "Format conversion",
      "Resize options",
      "Metadata removal",
    ],
    url: "https://squoosh.app/",
  },
  {
    id: 8,
    title: "Code Formatter",
    shortDescription: "Format and beautify your code",
    description:
      "Automatically format your code according to best practices and style guides. Support for multiple programming languages and customizable formatting rules.",
    features: [
      "Multiple language support",
      "Customizable formatting rules",
      "Integration with popular style guides",
      "Diff view to see changes",
      "Copy formatted code to clipboard",
    ],
    usageExample: `// Before formatting
function example(a,b){if(a>b){return a;}else{return b;}}

// After formatting
function example(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}`,
    url: "https://prettier.io/playground/",
  },
]


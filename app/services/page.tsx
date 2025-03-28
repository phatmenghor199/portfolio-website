import { ArrowRight, Code, Database, Globe, Layout, Smartphone, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/motion-components"

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-indigo-400" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like Next.js, React, and Tailwind CSS. From simple landing pages to complex web applications, I deliver solutions that are fast, responsive, and user-friendly.",
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "SEO-friendly structure",
        "Accessibility compliance",
        "Content management systems",
      ],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-indigo-400" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that provide seamless experiences across all devices. Using React Native and other modern frameworks, I create mobile solutions that feel native on any platform.",
      features: [
        "Cross-platform development",
        "Native app development",
        "UI/UX design for mobile",
        "App store submission",
        "Maintenance and updates",
      ],
    },
    {
      icon: <Layout className="h-12 w-12 text-indigo-400" />,
      title: "UI/UX Design",
      description:
        "User-centered design that balances aesthetics with functionality to create intuitive digital experiences. I focus on creating interfaces that are not only beautiful but also easy to use and navigate.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing",
        "Design systems",
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-indigo-400" />,
      title: "Backend Development",
      description:
        "Robust server-side applications with Node.js, Express, and various database technologies. I build scalable, secure, and efficient backend systems that power your applications.",
      features: [
        "API development",
        "Database design",
        "Authentication systems",
        "Cloud deployment",
        "Performance optimization",
      ],
    },
    {
      icon: <Code className="h-12 w-12 text-indigo-400" />,
      title: "Technical Consulting",
      description:
        "Expert advice on technology choices, architecture, and implementation strategies for your digital projects. I help you make informed decisions about your tech stack and development approach.",
      features: [
        "Technology assessment",
        "Architecture planning",
        "Code reviews",
        "Performance audits",
        "Team training",
      ],
    },
    {
      icon: <Sparkles className="h-12 w-12 text-indigo-400" />,
      title: "AI Integration",
      description:
        "Incorporating machine learning and AI capabilities to create intelligent, adaptive applications. I help you leverage the power of AI to enhance your products and services.",
      features: [
        "AI model integration",
        "Natural language processing",
        "Computer vision implementation",
        "Chatbot development",
        "Data analysis and visualization",
      ],
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <MotionDiv
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Services
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Comprehensive digital solutions tailored to your specific needs and objectives.
        </p>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <MotionDiv
            key={index}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </div>

      <MotionDiv
        className="mt-16 mx-auto max-w-3xl bg-gradient-to-br from-indigo-900/70 to-purple-900/70 p-8 md:p-12 rounded-3xl border border-indigo-800/50 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Let's discuss how I can help bring your ideas to life with the right technology solutions.
        </p>
        <Link href="/contact">
          <Button className="bg-white text-indigo-900 hover:bg-gray-100">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </MotionDiv>
    </div>
  )
}


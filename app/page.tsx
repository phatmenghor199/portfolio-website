"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Cpu, Database, Globe, Layers, Lightbulb, Smartphone, CheckCircle } from "lucide-react"
import { MotionDiv } from "@/components/motion-components"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText =
    "Transforming ideas into elegant, functional digital solutions with modern technologies and thoughtful design."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <MotionDiv
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animated-text text-glow">
                  Building digital experiences that matter
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="gradient-border">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-700/30 opacity-20 blur-3xl"></div>
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Developer"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <MotionDiv
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/3">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 blur"></div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Profile"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="md:w-2/3">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 animated-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    About Me
                  </motion.h2>
                  <motion.h3
                    className="text-xl font-medium mb-6 text-glow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Passionate developer with a focus on creating elegant solutions to complex problems
                  </motion.h3>
                  <div className="space-y-4 text-muted-foreground">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Hi, I'm [Your Name]. With over 8 years of experience in software development, I've had the
                      privilege of working on a diverse range of projects, from enterprise applications to
                      consumer-facing products. My journey in tech began with a fascination for creating things that
                      solve real problems.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      I specialize in full-stack development with a focus on React, Next.js, and Spring Boot. My
                      approach combines technical expertise with a deep understanding of user needs to create solutions
                      that are both powerful and intuitive.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                      projects, or sharing my knowledge through technical writing and mentoring.
                    </motion.p>
                  </div>
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link href="/contact">
                      <Button variant="outline" className="gradient-border">
                        Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>
        <div className="container px-4 md:px-6">
          <MotionDiv
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-text mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground md:text-xl">A selection of my recent work and achievements</p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <MotionDiv
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </MotionDiv>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 relative">
        <div className="container px-4 md:px-6">
          <MotionDiv
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-text mb-4">
              Key Achievements
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Milestones and accomplishments from my professional journey
            </p>
          </MotionDiv>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Optimized E-commerce Platform",
                description:
                  "Reduced page load times by 40% and increased conversion rates by 25% through performance optimization and UX improvements.",
                metric: "40% Faster",
              },
              {
                title: "AI-Powered Recommendation Engine",
                description:
                  "Developed a machine learning algorithm that increased average order value by 30% through personalized product recommendations.",
                metric: "30% Higher AOV",
              },
              {
                title: "Enterprise CRM Integration",
                description:
                  "Led the integration of a custom CRM solution with legacy systems, reducing manual data entry by 80% and improving data accuracy.",
                metric: "80% Less Manual Work",
              },
              {
                title: "Mobile App Development",
                description:
                  "Designed and developed a cross-platform mobile application that achieved 100,000+ downloads in the first month after launch.",
                metric: "100K+ Downloads",
              },
              {
                title: "Microservices Architecture",
                description:
                  "Migrated a monolithic application to a microservices architecture, improving scalability and reducing deployment time by 60%.",
                metric: "60% Faster Deployment",
              },
              {
                title: "Open Source Contributions",
                description:
                  "Contributed to several open-source projects with over 500 stars on GitHub, including performance improvements and new features.",
                metric: "500+ GitHub Stars",
              },
            ].map((achievement, index) => (
              <motion.div key={index} className="bg-card rounded-xl p-6 gradient-border h-full" variants={item}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {achievement.metric}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Expertise */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <MotionDiv
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-text mb-4">
              My Expertise
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Specialized in modern web technologies and frameworks that enable creating fast, responsive, and
              user-friendly applications.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-indigo-400" />,
                title: "Web Development",
                description:
                  "Creating responsive, performant websites using Next.js, React, and modern CSS frameworks like Tailwind.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-indigo-400" />,
                title: "Mobile Development",
                description:
                  "Building cross-platform mobile applications with React Native that feel native on any device.",
              },
              {
                icon: <Database className="h-10 w-10 text-indigo-400" />,
                title: "Backend Solutions",
                description:
                  "Developing robust server-side applications with Node.js, Express, and various database technologies.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-indigo-400" />,
                title: "AI Integration",
                description:
                  "Incorporating machine learning and AI capabilities to create intelligent, adaptive applications.",
              },
              {
                icon: <Layers className="h-10 w-10 text-indigo-400" />,
                title: "UI/UX Design",
                description:
                  "Designing intuitive user interfaces and experiences that balance aesthetics with functionality.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-indigo-400" />,
                title: "Technical Consulting",
                description:
                  "Providing expert advice on technology choices, architecture, and implementation strategies.",
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                className="flex flex-col p-6 rounded-xl gradient-border bg-card/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6">
          <MotionDiv
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-text mb-4">Services</h2>
            <p className="text-muted-foreground md:text-xl">
              Comprehensive digital solutions tailored to your specific needs and objectives.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Web Development",
                description:
                  "Bespoke websites and web applications built with modern technologies to meet your specific requirements.",
              },
              {
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
              },
              {
                title: "UI/UX Design",
                description:
                  "User-centered design that balances aesthetics with functionality to create intuitive digital experiences.",
              },
              {
                title: "Technical Consulting",
                description:
                  "Expert advice on technology choices, architecture, and implementation strategies for your digital projects.",
              },
            ].map((service, index) => (
              <MotionDiv
                key={index}
                className="bg-card rounded-xl p-8 gradient-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Link href="/contact" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">
                  Learn more <ArrowRight className="inline ml-1 h-4 w-4" />
                </Link>
              </MotionDiv>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12">
        <MotionDiv
          className="mx-auto max-w-3xl glass-effect p-8 md:p-12 rounded-3xl border border-indigo-800/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
            scale: 1.02,
          }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 animated-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to bring your ideas to life?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let's collaborate to create digital experiences that make a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </MotionDiv>
      </section>
    </div>
  )
}


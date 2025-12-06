'use client'

import { useEffect, useRef } from 'react'

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Store references that won't be null
    const canvasElement = canvas
    const context = ctx

    // Set canvas size
    const resizeCanvas = () => {
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star class with enhanced animation
    class Star {
      x: number
      y: number
      z: number
      size: number
      speed: number
      brightness: number

      constructor() {
        this.x = (Math.random() - 0.5) * 2000
        this.y = (Math.random() - 0.5) * 2000
        this.z = Math.random() * 2000
        this.size = Math.random() * 1.5 + 0.3
        this.speed = Math.random() * 1 + 0.3
        this.brightness = Math.random() * 0.3 + 0.2
      }

      update() {
        this.z -= this.speed
        
        if (this.z <= 0) {
          this.x = (Math.random() - 0.5) * 2000
          this.y = (Math.random() - 0.5) * 2000
          this.z = 2000
        }
      }

      draw() {
        const x = (this.x / this.z) * 1000 + canvasElement.width / 2
        const y = (this.y / this.z) * 1000 + canvasElement.height / 2
        const scale = 1000 / this.z
        const radius = this.size * scale
        const opacity = Math.min(this.brightness * (1 - this.z / 2000), 1)

        if (x < -radius || x > canvasElement.width + radius || y < -radius || y > canvasElement.height + radius) return

        const dimmedOpacity = opacity * 0.4
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${dimmedOpacity * 0.6})`)
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${dimmedOpacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        context.fillStyle = gradient
        context.beginPath()
        context.arc(x, y, radius * 2, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = `rgba(255, 255, 255, ${dimmedOpacity * 0.8})`
        context.beginPath()
        context.arc(x, y, radius * 0.8, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Galaxy spiral arm particles
    class GalaxyParticle {
      angle: number
      distance: number
      speed: number
      size: number
      opacity: number
      centerX: number
      centerY: number

      constructor() {
        this.centerX = canvasElement.width / 2
        this.centerY = canvasElement.height / 2
        this.angle = Math.random() * Math.PI * 2
        this.distance = Math.random() * Math.min(canvasElement.width, canvasElement.height) * 0.8
        this.speed = Math.random() * 0.0008 + 0.0003
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.angle += this.speed
        const spiralFactor = 1 - (this.distance / (Math.min(canvasElement.width, canvasElement.height) * 0.8))
        this.angle += this.speed * (1 + spiralFactor * 2)
      }

      draw() {
        const x = this.centerX + Math.cos(this.angle) * this.distance
        const y = this.centerY + Math.sin(this.angle) * this.distance

        const distanceOpacity = 1 - (this.distance / (Math.min(canvasElement.width, canvasElement.height) * 0.8))
        const finalOpacity = this.opacity * distanceOpacity * 0.5

        context.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`
        context.beginPath()
        context.arc(x, y, this.size, 0, Math.PI * 2)
        context.fill()

        const gradient = context.createRadialGradient(x, y, 0, x, y, this.size * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity * 0.6})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        context.fillStyle = gradient
        context.beginPath()
        context.arc(x, y, this.size * 2, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Nebula clouds
    class NebulaCloud {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulseSpeed: number
      pulseOffset: number

      constructor() {
        this.x = Math.random() * canvasElement.width
        this.y = Math.random() * canvasElement.height
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.size = Math.random() * 200 + 100
        this.opacity = Math.random() * 0.15 + 0.05
        this.pulseSpeed = Math.random() * 0.001 + 0.0005
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        const pulse = (Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) + 1) / 2
        this.size = (Math.random() * 200 + 100) * (0.8 + pulse * 0.4)

        if (this.x < -this.size) this.x = canvasElement.width + this.size
        if (this.x > canvasElement.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvasElement.height + this.size
        if (this.y > canvasElement.height + this.size) this.y = -this.size
      }

      draw() {
        const gradient = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
        gradient.addColorStop(0.3, `rgba(200, 200, 200, ${this.opacity * 0.6})`)
        gradient.addColorStop(0.6, `rgba(150, 150, 150, ${this.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(100, 100, 100, 0)')

        context.fillStyle = gradient
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Shooting stars
    class ShootingStar {
      x: number
      y: number
      vx: number
      vy: number
      length: number
      life: number
      maxLife: number

      constructor() {
        this.maxLife = Math.random() * 100 + 50
        this.life = this.maxLife
        this.x = Math.random() * canvasElement.width
        this.y = Math.random() * canvasElement.height
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 3 + 2
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.length = Math.random() * 50 + 20
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--

        if (this.life <= 0 || this.x < 0 || this.x > canvasElement.width || this.y < 0 || this.y > canvasElement.height) {
          this.life = this.maxLife
          this.x = Math.random() * canvasElement.width
          this.y = Math.random() * canvasElement.height
          const angle = Math.random() * Math.PI * 2
          const speed = Math.random() * 3 + 2
          this.vx = Math.cos(angle) * speed
          this.vy = Math.sin(angle) * speed
        }
      }

      draw() {
        const opacity = (this.life / this.maxLife) * 0.5
        const gradient = context.createLinearGradient(
          this.x,
          this.y,
          this.x - this.vx * this.length,
          this.y - this.vy * this.length
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        context.strokeStyle = gradient
        context.lineWidth = 1.5
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x - this.vx * this.length, this.y - this.vy * this.length)
        context.stroke()
      }
    }

    // Create particles
    const stars: Star[] = []
    for (let i = 0; i < 400; i++) {
      stars.push(new Star())
    }

    const galaxyParticles: GalaxyParticle[] = []
    for (let i = 0; i < 150; i++) {
      galaxyParticles.push(new GalaxyParticle())
    }

    const nebulaClouds: NebulaCloud[] = []
    for (let i = 0; i < 10; i++) {
      nebulaClouds.push(new NebulaCloud())
    }

    const shootingStars: ShootingStar[] = []
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar())
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.15)'
      context.fillRect(0, 0, canvasElement.width, canvasElement.height)

      nebulaClouds.forEach(cloud => {
        cloud.update()
        cloud.draw()
      })

      galaxyParticles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      shootingStars.forEach(star => {
        star.update()
        star.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
    />
  )
}

'use client'

import { useEffect, useRef } from 'react'

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
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
      twinkleSpeed: number
      twinkleOffset: number

      constructor() {
        this.x = (Math.random() - 0.5) * 2000
        this.y = (Math.random() - 0.5) * 2000
        this.z = Math.random() * 2000
        this.size = Math.random() * 1.5 + 0.3
        this.speed = Math.random() * 1 + 0.3
        this.brightness = Math.random() * 0.3 + 0.2 // Fixed brightness, no twinkle
        this.twinkleSpeed = 0 // Not used anymore
        this.twinkleOffset = 0 // Not used anymore
      }

      update() {
        this.z -= this.speed
        // No twinkle - brightness stays constant
        
        if (this.z <= 0) {
          this.x = (Math.random() - 0.5) * 2000
          this.y = (Math.random() - 0.5) * 2000
          this.z = 2000
        }
      }

      draw() {
        const x = (this.x / this.z) * 1000 + canvas.width / 2
        const y = (this.y / this.z) * 1000 + canvas.height / 2
        const scale = 1000 / this.z
        const radius = this.size * scale
        const opacity = Math.min(this.brightness * (1 - this.z / 2000), 1)

        if (x < -radius || x > canvas.width + radius || y < -radius || y > canvas.height + radius) return

        // Draw star with dimmer glow
        const dimmedOpacity = opacity * 0.4 // Reduce overall brightness
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${dimmedOpacity * 0.6})`)
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${dimmedOpacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Dimmer core
        ctx.fillStyle = `rgba(255, 255, 255, ${dimmedOpacity * 0.8})`
        ctx.beginPath()
        ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2)
        ctx.fill()
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
        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.angle = Math.random() * Math.PI * 2
        this.distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.8
        this.speed = Math.random() * 0.0008 + 0.0003
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        // Rotate around center
        this.angle += this.speed
        // Spiral effect - particles closer to center move faster
        const spiralFactor = 1 - (this.distance / (Math.min(canvas.width, canvas.height) * 0.8))
        this.angle += this.speed * (1 + spiralFactor * 2)
      }

      draw() {
        const x = this.centerX + Math.cos(this.angle) * this.distance
        const y = this.centerY + Math.sin(this.angle) * this.distance

        // Fade based on distance from center
        const distanceOpacity = 1 - (this.distance / (Math.min(canvas.width, canvas.height) * 0.8))
        const finalOpacity = this.opacity * distanceOpacity * 0.5 // Dimmer

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`
        ctx.beginPath()
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add dimmer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity * 0.6})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, this.size * 2, 0, Math.PI * 2)
        ctx.fill()
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
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
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

        // Pulse effect
        const pulse = (Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) + 1) / 2
        this.size = (Math.random() * 200 + 100) * (0.8 + pulse * 0.4)

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
      }

      draw() {
        const gradient = ctx.createRadialGradient(
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

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
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
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
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

        if (this.life <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.life = this.maxLife
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          const angle = Math.random() * Math.PI * 2
          const speed = Math.random() * 3 + 2
          this.vx = Math.cos(angle) * speed
          this.vy = Math.sin(angle) * speed
        }
      }

      draw() {
        const opacity = (this.life / this.maxLife) * 0.5 // Dimmer shooting stars
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - this.vx * this.length,
          this.y - this.vy * this.length
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.vx * this.length, this.y - this.vy * this.length)
        ctx.stroke()
      }
    }

    // Create particles (reduced counts)
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
      // Clear with fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulaClouds.forEach(cloud => {
        cloud.update()
        cloud.draw()
      })

      // Draw galaxy spiral
      galaxyParticles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw stars
      stars.forEach(star => {
        star.update()
        star.draw()
      })

      // Draw shooting stars
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

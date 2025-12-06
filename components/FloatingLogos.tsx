'use client'

import { useEffect, useState, useCallback } from 'react'

interface LogoData {
  id: string
  name: string
  url: string
  section: string
  glowColor: string
  atmosphereColor: string
}

interface Logo extends LogoData {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
}

const logoData: LogoData[] = [
  { 
    id: 'amazon', 
    name: 'Amazon', 
    url: 'https://logo.clearbit.com/amazon.com', 
    section: '#experience',
    glowColor: 'rgba(255, 153, 0, 0.6)',
    atmosphereColor: 'rgba(255, 153, 0, 0.15)'
  },
  { 
    id: 'walmart', 
    name: 'Walmart', 
    url: 'https://logo.clearbit.com/walmart.com', 
    section: '#experience',
    glowColor: 'rgba(0, 113, 206, 0.6)',
    atmosphereColor: 'rgba(0, 113, 206, 0.15)'
  },
  { 
    id: 'piramal', 
    name: 'Piramal', 
    url: 'https://logo.clearbit.com/piramal.com', 
    section: '#experience',
    glowColor: 'rgba(0, 102, 153, 0.6)',
    atmosphereColor: 'rgba(0, 102, 153, 0.15)'
  },
  { 
    id: 'bakerhughes', 
    name: 'Baker Hughes', 
    url: 'https://logo.clearbit.com/bakerhughes.com', 
    section: '#experience',
    glowColor: 'rgba(0, 150, 57, 0.6)',
    atmosphereColor: 'rgba(0, 150, 57, 0.15)'
  },
  { 
    id: 'nyu', 
    name: 'NYU', 
    url: 'https://logo.clearbit.com/nyu.edu', 
    section: '#education',
    glowColor: 'rgba(87, 6, 140, 0.6)',
    atmosphereColor: 'rgba(87, 6, 140, 0.15)'
  },
  { 
    id: 'vit', 
    name: 'VIT', 
    url: 'https://logo.clearbit.com/vit.ac.in', 
    section: '#education',
    glowColor: 'rgba(178, 34, 34, 0.6)',
    atmosphereColor: 'rgba(178, 34, 34, 0.15)'
  },
]

export default function FloatingLogos() {
  const [logos, setLogos] = useState<Logo[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Define the center exclusion zone (where text/buttons are)
  const getExclusionZone = useCallback((width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const zoneWidth = Math.min(600, width * 0.5)
    const zoneHeight = Math.min(400, height * 0.5)
    return {
      left: centerX - zoneWidth / 2,
      right: centerX + zoneWidth / 2,
      top: centerY - zoneHeight / 2,
      bottom: centerY + zoneHeight / 2,
    }
  }, [])

  // Check if a position is in the exclusion zone
  const isInExclusionZone = useCallback((x: number, y: number, size: number, width: number, height: number) => {
    const zone = getExclusionZone(width, height)
    const centerX = x + size / 2
    const centerY = y + size / 2
    return (
      centerX > zone.left - size / 2 &&
      centerX < zone.right + size / 2 &&
      centerY > zone.top - size / 2 &&
      centerY < zone.bottom + size / 2
    )
  }, [getExclusionZone])

  // Get a valid starting position outside the exclusion zone
  const getValidPosition = useCallback((size: number, width: number, height: number, existingLogos: Logo[]) => {
    let x, y
    let attempts = 0
    const maxAttempts = 100

    do {
      // Place logos in the corners and edges
      const edge = Math.floor(Math.random() * 4)
      switch (edge) {
        case 0: // Top
          x = Math.random() * (width - size)
          y = Math.random() * 100
          break
        case 1: // Bottom
          x = Math.random() * (width - size)
          y = height - 100 - size + Math.random() * 100
          break
        case 2: // Left
          x = Math.random() * 150
          y = Math.random() * (height - size)
          break
        case 3: // Right
          x = width - 150 - size + Math.random() * 150
          y = Math.random() * (height - size)
          break
        default:
          x = Math.random() * (width - size)
          y = Math.random() * (height - size)
      }
      attempts++
    } while (
      attempts < maxAttempts &&
      (isInExclusionZone(x!, y!, size, width, height) ||
        existingLogos.some(logo => {
          const dx = (x! + size / 2) - (logo.x + logo.size / 2)
          const dy = (y! + size / 2) - (logo.y + logo.size / 2)
          const distance = Math.sqrt(dx * dx + dy * dy)
          return distance < (size / 2 + logo.size / 2 + 20)
        }))
    )

    return { x: x!, y: y! }
  }, [isInExclusionZone])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Initialize logos with valid positions
    const initialLogos: Logo[] = []
    logoData.forEach((logo) => {
      const size = 70 + Math.random() * 25
      const { x, y } = getValidPosition(size, window.innerWidth, window.innerHeight, initialLogos)
      initialLogos.push({
        ...logo,
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      })
    })

    setLogos(initialLogos)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [getValidPosition])

  useEffect(() => {
    if (logos.length === 0 || dimensions.width === 0) return

    const animate = () => {
      setLogos((prevLogos) => {
        const newLogos = prevLogos.map((logo) => ({
          ...logo,
          x: logo.x + logo.vx,
          y: logo.y + logo.vy,
          rotation: logo.rotation + logo.rotationSpeed,
        }))

        // Handle collisions and boundaries
        for (let i = 0; i < newLogos.length; i++) {
          const logo = newLogos[i]
          
          // Bounce off screen edges
          if (logo.x <= 0) {
            logo.x = 0
            logo.vx = Math.abs(logo.vx)
          } else if (logo.x >= dimensions.width - logo.size) {
            logo.x = dimensions.width - logo.size
            logo.vx = -Math.abs(logo.vx)
          }
          
          if (logo.y <= 0) {
            logo.y = 0
            logo.vy = Math.abs(logo.vy)
          } else if (logo.y >= dimensions.height - logo.size) {
            logo.y = dimensions.height - logo.size
            logo.vy = -Math.abs(logo.vy)
          }

          // Bounce off exclusion zone (center content area)
          const zone = getExclusionZone(dimensions.width, dimensions.height)
          const centerX = logo.x + logo.size / 2
          const centerY = logo.y + logo.size / 2
          
          if (
            centerX > zone.left - logo.size / 2 &&
            centerX < zone.right + logo.size / 2 &&
            centerY > zone.top - logo.size / 2 &&
            centerY < zone.bottom + logo.size / 2
          ) {
            // Determine which edge to bounce from
            const distLeft = centerX - (zone.left - logo.size / 2)
            const distRight = (zone.right + logo.size / 2) - centerX
            const distTop = centerY - (zone.top - logo.size / 2)
            const distBottom = (zone.bottom + logo.size / 2) - centerY
            
            const minDist = Math.min(distLeft, distRight, distTop, distBottom)
            
            if (minDist === distLeft) {
              logo.x = zone.left - logo.size
              logo.vx = -Math.abs(logo.vx)
            } else if (minDist === distRight) {
              logo.x = zone.right
              logo.vx = Math.abs(logo.vx)
            } else if (minDist === distTop) {
              logo.y = zone.top - logo.size
              logo.vy = -Math.abs(logo.vy)
            } else {
              logo.y = zone.bottom
              logo.vy = Math.abs(logo.vy)
            }
          }

          // Collision detection with other logos
          for (let j = i + 1; j < newLogos.length; j++) {
            const other = newLogos[j]
            const dx = (other.x + other.size / 2) - (logo.x + logo.size / 2)
            const dy = (other.y + other.size / 2) - (logo.y + logo.size / 2)
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = (logo.size + other.size) / 2

            if (distance < minDistance && distance > 0) {
              // Collision detected - bounce apart
              const angle = Math.atan2(dy, dx)
              const overlap = minDistance - distance

              // Separate the logos
              const separateX = Math.cos(angle) * overlap / 2
              const separateY = Math.sin(angle) * overlap / 2
              
              logo.x -= separateX
              logo.y -= separateY
              other.x += separateX
              other.y += separateY

              // Exchange velocities (elastic collision)
              const tempVx = logo.vx
              const tempVy = logo.vy
              logo.vx = other.vx * 0.9
              logo.vy = other.vy * 0.9
              other.vx = tempVx * 0.9
              other.vy = tempVy * 0.9
            }
          }
        }

        return newLogos
      })
    }

    const intervalId = setInterval(animate, 30)
    return () => clearInterval(intervalId)
  }, [logos.length, dimensions, getExclusionZone])

  return (
    <div className="absolute inset-0 overflow-hidden z-20">
      {logos.map((logo) => (
        <a
          key={logo.id}
          href={logo.section}
          title={`${logo.name} - Click to see ${logo.section === '#experience' ? 'experience' : 'education'}`}
          className="absolute cursor-pointer pointer-events-auto group"
          style={{
            left: logo.x,
            top: logo.y,
            width: logo.size,
            height: logo.size,
          }}
        >
          {/* Outer atmosphere glow */}
          <div 
            className="absolute inset-[-50%] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${logo.atmosphereColor} 0%, transparent 70%)`,
            }}
          />
          
          {/* Middle atmosphere */}
          <div 
            className="absolute inset-[-25%] rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${logo.atmosphereColor} 20%, transparent 70%)`,
            }}
          />

          {/* Planet body */}
          <div 
            className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-110 transition-all duration-500"
            style={{
              boxShadow: `
                0 0 20px ${logo.glowColor},
                0 0 40px ${logo.atmosphereColor},
                inset -8px -8px 20px rgba(0,0,0,0.4),
                inset 5px 5px 15px rgba(255,255,255,0.2)
              `,
              transform: `rotate(${logo.rotation}deg)`,
            }}
          >
            {/* Planet surface gradient (3D effect) */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 50%, rgba(200,200,200,0.85) 100%)
                `,
              }}
            />
            
            {/* Light reflection */}
            <div 
              className="absolute top-[10%] left-[15%] w-[30%] h-[25%] rounded-full opacity-60"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, transparent 70%)',
              }}
            />

            {/* Logo container */}
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <img
                src={logo.url}
                alt={logo.name}
                className="w-[70%] h-[70%] object-contain drop-shadow-lg"
                style={{
                  transform: `rotate(${-logo.rotation}deg)`,
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>

            {/* Atmosphere edge glow */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, transparent 50%, ${logo.glowColor} 100%)`,
                opacity: 0.3,
              }}
            />
          </div>

          {/* Orbital ring on hover */}
          <div 
            className="absolute inset-[-20%] rounded-full border opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:rotate-12"
            style={{
              borderColor: logo.glowColor,
              borderWidth: '1px',
              transform: 'rotateX(70deg)',
            }}
          />
        </a>
      ))}
    </div>
  )
}

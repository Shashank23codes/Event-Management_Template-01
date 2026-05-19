import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const onMouseEnter = () => setHidden(false)
    const onMouseLeave = () => setHidden(true)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  // Smooth ring follow logic
  useEffect(() => {
    let animId
    const follow = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        }
      })
      animId = requestAnimationFrame(follow)
    }
    follow()
    return () => cancelAnimationFrame(animId)
  }, [position])

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  if (hidden) return null

  return (
    <>
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${hovered ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
      <div
        className="cursor-ring hidden md:block"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          width: hovered ? '44px' : '24px',
          height: hovered ? '44px' : '24px',
          borderColor: hovered ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.2)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const trailsRef = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`

      // Create trail particle
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = e.clientX + 'px'
      trail.style.top = e.clientY + 'px'
      document.body.appendChild(trail)
      setTimeout(() => trail.remove(), 600)
    }

    const onMouseDown = () => cursor.classList.add('cursor-click')
    const onMouseUp = () => cursor.classList.remove('cursor-click')

    const onMouseEnterLink = () => {
      cursor.classList.add('cursor-hover')
      follower.classList.add('follower-hover')
    }
    const onMouseLeaveLink = () => {
      cursor.classList.remove('cursor-hover')
      follower.classList.remove('follower-hover')
    }

    // Smooth follower animation
    const animateFollower = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.1
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.1
      follower.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`
      requestAnimationFrame(animateFollower)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    animateFollower()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}

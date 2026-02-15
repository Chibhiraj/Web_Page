import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        {isHome ? (
          <>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </>
        ) : (
          <>
            <Link to="/#about">About</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#education">Education</Link>
            <Link to="/#projects">Projects</Link>
          </>
        )}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

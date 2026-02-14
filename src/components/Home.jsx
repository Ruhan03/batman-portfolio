import { useEffect, useRef } from 'react'
import batmanVideo from '../assets/batman-bg.mp4'
import Nav from './Nav'
import batSignal from '../assets/bat-signal.jpg'

function Home() {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        let ticking = false

        const updateVideo = () => {
            const scrollTop = window.scrollY
            const maxScroll = document.body.scrollHeight - window.innerHeight
            const scrollFraction = scrollTop / maxScroll

            if (video && video.duration) {
                video.currentTime = scrollFraction * video.duration
            }

            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateVideo)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-section')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])



    const sectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 'clamp(20px, 8vw, 80px)',
        paddingRight: 'clamp(20px, 8vw, 80px)',
        paddingTop: '40px',
        paddingBottom: '40px',
        color: 'white',
        maxWidth: '1200px',
        margin: '0 auto'
    }




    const inputStyle = {
        padding: '12px',
        background: 'rgba(0,0,0,0.6)',
        border: '1px solid white',
        color: 'white',
        fontSize: '1rem'
    }

    const buttonStyle = {
        padding: '12px',
        background: '#f5c542',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: 'bold'
    }


    return (
        <div>

            <Nav />
            <video
                ref={videoRef}
                src={batmanVideo}
                muted
                playsInline
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'cover',
                    zIndex: -1
                }}

            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.45)',
                    zIndex: -1
                }}
            />

            <section id="home" style={sectionStyle} className="fade-section">
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    marginBottom: '10px'
                }}>Hi, I’m Ruhan</h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                    letterSpacing: '1px',
                    opacity: 0.9,
                    maxWidth: '600px'
                }}>
                    Welcome to my portfolio</p>
            </section>

            <section id="about" style={sectionStyle} className="fade-section">
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    marginBottom: '10px'
                }}>About Me</h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                    letterSpacing: '1px',
                    opacity: 0.9,
                    maxWidth: '600px'
                }}>
                    Dark. Focused. Determined.</p>
            </section>

            <section id="projects" style={sectionStyle} className="fade-section">
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    marginBottom: '10px'
                }}>Projects</h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                    letterSpacing: '1px',
                    opacity: 0.9,
                    maxWidth: '600px'
                }}>
                    Built in the shadows.Coming Soon.</p>
            </section>

            <section id="contact" style={sectionStyle} className="fade-section">
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    marginBottom: '10px'
                }}>Contact Me</h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                    letterSpacing: '1px',
                    opacity: 0.9,
                    maxWidth: '600px'
                }}>

                    Signal me. I’ll respond from the shadows.
                </p>

                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdbNkF21C_U7e8K3w4vGswIvEKwWjvTkICn0JiGZqf_g-oovQ/formResponse"
                    method="POST"
                    target="_blank"
                    style={{
                        marginTop: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        width: '300px'
                    }}
                >

                    <input
                        name="entry.1306542616"
                        placeholder="Your Name"
                        required
                        style={inputStyle}
                    />

                    <input
                        name="entry.2057286500"
                        type="email"
                        placeholder="Your Email"
                        required
                        style={inputStyle}
                    />

                    <textarea
                        name="entry.1702094355"
                        placeholder="Your Message"
                        rows="4"
                        required
                        style={inputStyle}
                    />

                    <button type="submit" style={buttonStyle}>
                        Send Signal
                    </button>
                </form>
            </section>

            <footer className="bat-footer">
                <div className="bat-footer-text">
                    <span>BEGINS.</span>
                    <span>DARK KNIGHT.</span>
                    <span>DARK KNIGHT RISES.</span>
                </div>
            </footer>













        </div>
    )
}

export default Home
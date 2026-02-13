import { useEffect, useRef } from 'react'
import batmanVideo from '../assets/batman-bg.mp4'
import Nav from './Nav'
import batSignal from '../assets/bat-signal.jpg'

function Home() {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current


        const handleScroll = () => {
            const scrollTop = window.scrollY
            const maxScroll = document.body.scrollHeight - window.innerHeight
            const scrollFraction = scrollTop / maxScroll

            if (video && video.duration) {
                video.currentTime = scrollFraction * video.duration
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const sectionStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '80px',   
        color: 'white'
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
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            />
            <section id="home" style={sectionStyle}>
                <h1>Hi, I’m Ruhan</h1>
                <p style={{ fontSize: '1.4rem', letterSpacing: '1px', opacity: 0.9 }}>Welcome to my portfolio</p>
            </section>

            <section id="about" style={sectionStyle}>
                <h1>About Me</h1>
                <p style={{ fontSize: '1.4rem', letterSpacing: '1px', opacity: 0.9 }}>Dark. Focused. Determined.</p>
            </section>

            <section id="projects" style={sectionStyle}>
                <h1>Projects</h1>
                <p style={{ fontSize: '1.4rem', letterSpacing: '1px', opacity: 0.9 }}>Built in the shadows.Coming Soon.</p>
            </section>

            <section id="contact" style={sectionStyle}>
                <h1>Contact Me</h1>

                <p style={{ fontSize: '1.4rem', letterSpacing: '1px', opacity: 0.9 }}>
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

            <footer
                style={{
                    width: "100vw",
                    height: "350px",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundImage: `url(${batSignal})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "50px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "80px",
                        color: "black",
                        fontSize: "2rem",
                        letterSpacing: "4px",
                        fontWeight: "700",
                        fontFamily: "Impact, Arial Black, sans-serif",
                        textTransform: "uppercase"
                    }}
                >
                    <span>BEGINS.</span>
                    <span>DARK KNIGHT.</span>
                    <span>DARK KNIGHT RISES.</span>
                </div>
            </footer>











        </div>
    )
}

export default Home
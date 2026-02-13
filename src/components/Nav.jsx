import { useState } from 'react'

function NavLink({ href, children, onClick }) {
    const [hover, setHover] = useState(false)

    return (
        <a
            href={href}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                color: hover ? '#f5c542' : 'white',
                textDecoration: 'none',
                fontSize: '1.4rem',
                letterSpacing: '1px',
                transform: hover ? 'translateX(8px)' : 'translateX(0)',
                transition: 'all 0.3s ease'
            }}
        >
            {children}
        </a>
    )
}


function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                ☰
            </div>

            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        height: '100vh',
                        width: '280px',
                        background: 'rgba(0,0,0,0.95)',
                        paddingTop: '100px',
                        paddingLeft: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px',
                        zIndex: 999
                    }}
                >
                    <NavLink href="#home" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
                    <NavLink href="#projects" onClick={() => setOpen(false)}>Projects</NavLink>
                    <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>

                </div>
            )}
        </>
    )
}

export default Navbar
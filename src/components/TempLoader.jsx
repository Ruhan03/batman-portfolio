import loaderVideo from '../assets/loader.mp4'

function Loader() {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <video
                src={loaderVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '300px',
                    maxWidth: '80%'
                }}
            />
        </div>
    )
}

export default Loader
import '../css/Footer.css'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="signature">
            <img className="icon" src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="" />
            <div className="signature-text">
              <span className="name">JuaniScript</span>
              <span className="role">Full Stack Developer</span>
            </div>
          </div>
          <small className="copyright">© {year} · Made with ❤️</small>
        </div>

        <nav className="footer-links" aria-label="Mis enlaces">
          <ul>
            <li><a href="https://github.com/JuanJoseVillalobos" target="_blank" rel="">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/juan-josé-villalobos-b98741265" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:juanvillalobos.contacto@gmail.com">Contact Email</a></li>
            <li><a href="https://www.youtube.com/@JuaniScript" target="_blank" rel="noreferrer">Youtube</a></li>
            <li><a href="https://github.com/JuanJoseVillalobos" target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
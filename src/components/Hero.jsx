import profileImg from '../assets/images/profile.webp';

export default function Hero() {
  return (
    <div className="wrap hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-kicker">
            <span className="status-dot"></span>
            FULL-STACK ENGINEERING · ENTERPRISE SYSTEMS
          </div>
          <h1>Sivadath G</h1>
          <div className="role">
            Senior Software Developer <span>·</span> Team Lead
          </div>
          <p>
            Full stack .NET developer working with React.js, ASP.NET Core and SQL Server.
            I build and maintain enterprise applications including ERP, HRMS, employee
            self-service, attendance management, custom forms and ZATCA e-invoicing.
          </p>
          <div className="links hero-actions">
            <a className="action-primary" href="#projects">
              Explore projects <span aria-hidden="true">↘</span>
            </a>
            <a className="action-secondary" href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl className="facts">
            <div><dt>role</dt><dd>Sr. Software Developer cum Team Lead</dd></div>
            <div><dt>current company</dt><dd>Olivo Technologies</dd></div>
            <div><dt>since</dt><dd>August 2023</dd></div>
            <div><dt>location</dt><dd>Kannur, Kerala</dd></div>
          </dl>
        </div>
        <figure className="portrait">
          <img
            src={profileImg}
            width="720"
            height="720"
            alt="Portrait of Sivadath G"
          />
        </figure>
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { BookOpen, CheckCircle, Globe, MapPin, Phone, Mail, GraduationCap, Building, Microscope, Users, Video, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const courses = [
    { level: 'A1', duration: '4 months', sub1: 'A1.1 (2 months)', sub2: 'A1.2 (2 months)', books: 'Menschen A1.1 & A1.2 (4 books)' },
    { level: 'A2', duration: '4 months', sub1: 'A2.1 (2 months)', sub2: 'A2.2 (2 months)', books: 'Menschen A2.1 & A2.2 (4 books)' },
    { level: 'B1', duration: '4 months', sub1: 'B1.1 (2 months)', sub2: 'B1.2 (2 months)', books: 'Menschen B1.1 & B1.2 (4 books)' },
    { level: 'B2', duration: '4 months', sub1: 'B2.1 (2 months)', sub2: 'B2.2 (2 months)', books: 'Menschen B2.1 & B2.2 (4 books)' },
  ];

  const translationServices = [
    { title: 'Chemical Laboratories', icon: <Microscope size={32} />, desc: 'Translation of Summary of Product Characteristics (SPCs) for export to francophone countries.' },
    { title: 'Herbal Companies', icon: <img src="https://cdn-icons-png.flaticon.com/512/2922/2922003.png" alt="Herbal" style={{width: 32, filter: 'invert(80%) sepia(20%) saturate(1000%) hue-rotate(350deg)'}} />, desc: 'Translate product notices to facilitate usage by francophone customers for Ghanaian herbalists.' },
    { title: 'Industries', icon: <Building size={32} />, desc: 'English to French translations of product notices, enabling goods export to francophone countries.' },
    { title: 'Expats Services', icon: <Users size={32} />, desc: 'Document translation for expats in Europe and Asia. We scan and ship originals via DHL globally.' },
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img src="/logo.png" alt="Frischiller Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.5)' }} />
          </div>
          FRISCHILLER GHANA LTD
        </div>
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', display: 'none' }}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/FETS.IMAGE.jpeg" target="_blank" rel="noreferrer" title="Francophone English Testing System" onClick={() => setIsMobileMenuOpen(false)}>FETS</a></li>
          <li><a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a></li>
          <li><a href="#translation" onClick={() => setIsMobileMenuOpen(false)}>Translation</a></li>
          <li><a href="#recognition" onClick={() => setIsMobileMenuOpen(false)}>Recognition & Jobs</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', width: '100%', maxWidth: '1500px', margin: '0 auto', flexWrap: 'wrap' }}>
          <div className="hero-content" style={{ flex: '1 1 450px', paddingRight: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>German Language School & Translation</h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)', opacity: 0.95 }}>
              Learn German online with live lessons or get professional translation services for your business. We open doors to German-speaking countries and West Africa.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a href="https://wa.me/233532954524" className="btn btn-primary" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                <Phone size={20} /> Chat on WhatsApp
              </a>
              <a href="#courses" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                View Courses
              </a>
            </div>
          </div>
          <div className="hero-image-right" style={{ flex: '1.5 1 500px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <img src="/frischiller-sch.png" alt="Frischiller School" style={{ width: '100%', maxWidth: '850px', height: 'auto', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', border: '4px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="section">
        <h2 className="section-title">German Language Program</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          We offer comprehensive German language teaching from beginner to advanced levels, using the proven 'Menschen' coursebook series.
        </p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-level">LEVEL {course.level}</div>
              <p>Total Duration: <strong>{course.duration}</strong></p>
              <ul className="course-details">
                <li><CheckCircle size={16} /> {course.sub1}</li>
                <li><CheckCircle size={16} /> {course.sub2}</li>
                <li><BookOpen size={16} /> {course.books}</li>
              </ul>
            </div>
          ))}
          <div className="course-card" style={{ background: 'var(--primary-color)', color: 'white' }}>
            <div className="course-level" style={{ color: 'var(--accent-color)' }}>C1 Program</div>
            <p style={{ marginTop: '1rem' }}>Advanced program including an introduction to German culture, history, and daily life.</p>
            <ul className="course-details">
              <li><CheckCircle size={16} style={{ color: 'var(--accent-color)' }} /> Cultural Immersion</li>
              <li><CheckCircle size={16} style={{ color: 'var(--accent-color)' }} /> History & Society</li>
            </ul>
          </div>
        </div>



        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="https://zoom.us/" className="btn" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
            <Video size={24} /> Schedule a Live Class on Zoom
          </a>
          <p style={{ marginTop: '1rem', color: 'var(--text-color)', opacity: 0.8 }}>Choose a time that works best for you and start learning!</p>
        </div>
      </section>

      {/* Translation Services */}
      <section id="translation" className="section services-bg">
        <h2 className="section-title">Professional Translation Services</h2>
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <p style={{ marginBottom: '1rem' }}>We provide high-quality translation from:</p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left', fontWeight: '600', fontSize: '1.05rem' }}>
            <span>🇬🇧 ENGLISH &nbsp;→&nbsp; 🇩🇪 GERMAN</span>
            <span>🇬🇧 ENGLISH &nbsp;→&nbsp; 🇫🇷 FRENCH</span>
            <span>🇬🇧 ENGLISH &nbsp;→&nbsp; 🇮🇹 ITALIAN</span>
            <span>🇬🇧 ENGLISH &nbsp;→&nbsp; 🇪🇸 SPANISH</span>
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.85 }}>And other European and Asian languages.</p>
        </div>

        {/* Highlighted sub-heading */}
        <div style={{ textAlign: 'center', margin: '0 auto 2.5rem auto' }}>
          <p style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
            color: '#1F4232',
            fontWeight: '800',
            fontSize: '1.2rem',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
            letterSpacing: '0.03em',
          }}>
            ✦ We also translate for the Industries below ✦
          </p>
        </div>

        <div className="services-grid">

          {translationServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition & Assistance */}
      <section id="recognition" className="section">
        <div className="recognition">
          <div className="recognition-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Recognition of Degrees & Assistance</h2>
            <p style={{
              marginBottom: '2rem',
              fontSize: '1.15rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
              color: '#1F4232',
              padding: '1rem 1.5rem',
              borderRadius: '10px',
              borderLeft: '5px solid #1F4232',
              boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
              lineHeight: '1.7',
            }}>
              We assist qualified and skilled workers with the recognition process of degrees and diplomas in Germany, Austria, and Switzerland.
            </p>
            
            <div className="step-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <h4>Document Processing</h4>
                  <p>Send us your documents. We translate and ship them to the recognition office in your target country.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <h4>Language Preparation</h4>
                  <p>We offer specialized German language training for qualified workers in specific fields.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <h4>Job Search & Placement</h4>
                  <p>After recognition, we assist in job seeking via Blue Card or Opportunity Card. We apply and secure contracts for you.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div>
                  <h4>Academic Research</h4>
                  <p>For PhD students and Postdocs willing to conduct research in Germany, we assist in the search for scholarships.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="recognition-image">
             {/* Using the uploaded school image */}
            <img src="/school.png" alt="Students and Professionals" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '10px' }}>
                <img src="/logo.png" alt="Frischiller Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.5)' }} />
              </div>
              FRISCHILLER GHANA LTD
            </div>
            <p>Institute of Language & Translation</p>
            <p>West Africa - German Speaking Countries</p>
            <div className="social-links">
               {/* We could add actual social links here */}
               <a href="#"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Contact Information</h4>
            <p><MapPin size={18} /> Ho (Ghana)</p>
            <p><a href="https://wa.me/233532954524" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={18} /> +233 532954524 (WhatsApp)</a></p>
            <p><Phone size={18} /> +233 0538389845 (WhatsApp)</p>
            <p><Mail size={18} /> frischiller85@gmail.com</p>
          </div>

          <div className="footer-col">
            <h4>Registration Details</h4>
            <p><strong>Registry No:</strong> CS013780223</p>
            <p><strong>Steuer Nr:</strong> C0062595172</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Frischiller Ghana Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;

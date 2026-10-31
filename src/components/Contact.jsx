import { useState } from 'react';

const EMAIL = 'sivadathdermal899@gmail.com';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus('copied');
    } catch {
      // Fallback: select the mail link text
      const mailEl = document.getElementById('mail');
      if (mailEl) {
        const range = document.createRange();
        range.selectNodeContents(mailEl);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      setCopyStatus('press Ctrl+C to copy');
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-kicker"> LET&apos;S CONNECT</div>
        <h2>Contact</h2>
        <p className="intro">Email is the fastest way to reach me.</p>
        <a className="mail" id="mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <div className="copyrow">
          <button type="button" id="copy" onClick={handleCopy}>
            copy address
          </button>{' '}
          <span id="copied" aria-live="polite">{copyStatus}</span>
        </div>
        <ul className="contact-list">
          <li>
            <small>phone</small>
            <a href="tel:+919633247134">9633247134</a>
          </li>
          <li>
            <small>linkedin</small>
            <a href="https://linkedin.com/in/sivadathdermal" rel="noopener noreferrer">
              linkedin.com/in/sivadathdermal
            </a>
          </li>
          <li>
            <small>location</small>
            Kannur, Kerala
          </li>
        </ul>
      </div>
    </section>
  );
}


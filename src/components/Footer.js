import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Plebiant 2019. All Rights Reserved.</p>
        <ul className="list-inline">
        <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy-policy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/tos-agreement">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

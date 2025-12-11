
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Study Zone - Board Exam Question Bank',
  description: 'Centralized Study Material for Board Exams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo">Study<span>Zone</span></div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/subject">Subjects</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 Study Zone | Centralized Board Exam Solutions</p>
        </footer>
      </body>
    </html>
  );
}

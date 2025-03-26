
export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav>
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Over</a></li>
        </ul>
      </nav>
    </header>
  );
}

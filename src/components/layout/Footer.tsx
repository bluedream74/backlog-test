import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-neutral-600 lg:text-left bg-white py-4 border-t-[1px]">
      <div className="text-center">
        <span>© 2024 Copyright:</span>
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          to="http://localhost:3000"
        >
          Backlog
        </Link>
      </div>
    </footer>
  );
}
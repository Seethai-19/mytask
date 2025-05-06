import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 flex justify-center space-x-6 fixed top-0 w-full shadow-lg">
      <Link to="/" className="text-lg font-bold hover:underline">Home</Link>
      <Link to="/about" className="text-lg font-bold hover:underline">About</Link>
    </nav>
  );
}

export default function About() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center text-white bg-gray-900"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg max-w-lg text-center">
        This website is created to showcase amazing projects and ideas.
        Stay tuned for updates!
      </p>
    </div>
  );
}

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <center>
      <div
        className="w-full h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-4xl font-bold mb-6">Welcome to Home Page</h1>

        {loggedIn ? (
          <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-80 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold">You are logged in!</h2>
            <p className="mt-4">Full Name: {name}</p>
            <p>Mobile Number: {mobile}</p>
            <p>Username: {username}</p>
          </div>
        ) : (
          <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-left p-2">Full Name:</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 rounded text-black w-full"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left p-2">Mobile Number:</td>
                    <td>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="p-2 rounded text-black w-full"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left p-2">Username:</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 rounded text-black w-full"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left p-2">Password:</td>
                    <td>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 rounded text-black w-full"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <center>
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full"
                        >
                          Login
                        </button>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        )}
      </div>
    </center>
  );
}

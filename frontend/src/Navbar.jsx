import image from "./assets/logo.jpg";
function Navbar() {
  return (
    <nav className="w-full bg-black/60 text-white font-mono shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={image}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full border border-white"
          />
          <span className="text-xl font-bold">MyApp</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <span className="hover:text-yellow-400 cursor-pointer transition duration-200">Home</span>
          <span className="hover:text-yellow-400 cursor-pointer transition duration-200">About</span>
          <span className="hover:text-yellow-400 cursor-pointer transition duration-200">Help</span>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
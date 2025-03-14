export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between item-center">
                <h1 className="text-white text xl">My Website</h1>
                <ul className="hidden md:flex space-x-4">
                    <li className="text-white">Home</li>
                    <li className="text-white">About</li>
                    <li className="text-white">Contact</li>
                </ul>
                <button className="md:hidden text-white">☰</button>
            </div>
        </nav>
    );
}
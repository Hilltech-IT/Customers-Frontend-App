const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h6 className="text-lg font-semibold mb-4">About Our Hotel Booking App</h6>
            <p className="text-sm">
              Discover, book, and explore hotels worldwide with ease. Get personalized recommendations for your next stay and travel smarter.
            </p>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Explore</h6>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Search Hotels</a></li>
              <li><a href="#" className="hover:underline">Bookings</a></li>
              <li><a href="#" className="hover:underline">Recommendations</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Join Our Newsletter</h6>
            <p className="text-sm mb-4">
              Get exclusive deals, travel insights, and personalized recommendations.
            </p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none" 
                required 
              />
              <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-r">Subscribe</button>
            </form>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fa fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fa fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fa fa-dribbble"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fa fa-behance"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>© WonderWise - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

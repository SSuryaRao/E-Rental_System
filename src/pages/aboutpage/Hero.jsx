import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        We're More Than Just a Company
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
  At <strong>E-Rental</strong>, we are driven by a passion for innovation and a commitment to empowering communities through smart sharing.
  We believe in <strong>sustainability</strong>, <strong>accessibility</strong>, and <strong>trust</strong> — values that shape every rental experience on our platform.
  <br /><br />
  Whether you're renting out idle tools or borrowing essential items for your next big project, E-Rental makes it simple, secure, and affordable.
  We’re building a future where everyone can get what they need — without owning everything — while strengthening local connections and reducing environmental impact.
  <br /><br />
  Join us in rethinking ownership and embracing a smarter way to share.
</p>

                    <div className="mt-6">
                        <a
                            href="/our-values"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Our Values
                        </a>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
                    <div className="aspect-w-5 aspect-h-3 sm:aspect-w-2 sm:aspect-h-1 md:aspect-w-3 md:aspect-h-2">
                        <img
                            className="object-cover shadow-lg rounded-md"
                            src="public/about-us-image.jpg"
                            alt="Our Team or Company Culture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
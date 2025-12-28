import { useState } from 'react';
import { Link } from 'react-router-dom';
import presidentImg from "../../assets/images/board/president.jpg";
import vice1Img from "../../assets/images/board/stephen.jpg";
import vice2Img from "../../assets/images/board/minh.jpg";
import ngocImg from "../../assets/images/board/ngoc.jpg";
import hieuImg from "../../assets/images/board/hieu.jpg";
import kathyImg from "../../assets/images/board/kathy.jpg";

import g1 from "../../assets/images/board/glr1.jpg";
import g2 from "../../assets/images/board/glr2.jpg";
import g3 from "../../assets/images/board/glr3.jpg";
import g4 from "../../assets/images/board/glr4.jpg";
import g5 from "../../assets/images/board/glr5.jpg";
import g6 from "../../assets/images/board/glr6.jpg";
import g7 from "../../assets/images/board/glr7.jpg";
import g8 from "../../assets/images/board/glr8.jpg";

import g9 from "../../assets/images/board/aboutimg.jpg";

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/182f62a31e9414f4fd33c7d49784c0be.jpeg" 
                alt="VietTech Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900 font-['Dancing_Script']">VietTech</span>
            </div>
              
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">HOME</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">ABOUT</button>
              <button onClick={() => scrollToSection('news')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">NEWS & EVENTS</button>
              <button onClick={() => scrollToSection('board')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">BOARD MEMBERS</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">GALLERY</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">CONTACT</button>
              <Link to="/banks" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">RESOURCES</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-${showMobileMenu ? 'close' : 'menu'}-line text-2xl text-gray-900`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">HOME</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">ABOUT</button>
              <button onClick={() => scrollToSection('news')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">NEWS & EVENTS</button>
              <button onClick={() => scrollToSection('board')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">BOARD MEMBERS</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">GALLERY</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">CONTACT</button>
              <Link to="/banks" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">RESOURCES</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/1f3f873593ba03766df5957d386a5d98.jpeg" 
            alt="VietTech Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Connecting Vietnamese Hearts at <span className="text-yellow-400">Virginia Tech</span>
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              VietTech is a vibrant community of Vietnamese students at Virginia Tech, dedicated to preserving our culture, supporting each other, and creating unforgettable memories together.
            </p>
            <a 
              href="https://gobblerconnect.vt.edu/organization/viettech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              JOIN OUR COMMUNITY
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={g9} 
                alt="VietTech Students" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-red-600">VietTech</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
                VietTech was founded by passionate Vietnamese students at Virginia Tech who wanted to create a home away from home. We are more than just an organization – we are a family that celebrates our rich Vietnamese heritage while embracing the opportunities of American university life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
                Our mission is to support Vietnamese students throughout their academic journey, organize cultural events that keep us connected to our roots, and help prospective students learn about life at Virginia Tech. Whether you're a current student or considering joining the Hokie family, VietTech is here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Spring 2026 </span>
                <span className="text-red-600">Events</span>
              </h2>
              <p className="text-gray-600 mt-2">Join us for exciting cultural activities and community gatherings</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 - Lunar New Year */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src="https://readdy.ai/api/search-image?query=Vietnamese%20Lunar%20New%20Year%20Tet%20celebration%20potluck%20event%20with%20traditional%20decorations%20red%20lanterns%20festive%20atmosphere%20apartment%20setting%20students%20celebrating%20together%20vibrant%20colors%20warm%20lighting&width=600&height=400&seq=viettech-tet-2026&orientation=landscape" 
                  alt="Lunar New Year Potluck" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Cultural Event</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Lunar New Year Potluck</h3>
                <p className="text-gray-600 text-sm mb-4">Celebrate Tet with traditional Vietnamese food and festivities at Foxridge Apartment.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Feb 14, 2026 (Saturday)</span>
                </div>
              </div>
            </div>

            {/* Event Card 2 - Movie Night */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src="https://readdy.ai/api/search-image?query=university%20students%20movie%20night%20event%20in%20Johnston%20Student%20Center%20room%20304%20cozy%20atmosphere%20popcorn%20snacks%20friends%20watching%20together%20casual%20social%20gathering%20evening%20lighting&width=600&height=400&seq=viettech-movie-2026&orientation=landscape" 
                  alt="Movie Night" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Social Event</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Movie Night</h3>
                <p className="text-gray-600 text-sm mb-4">Join us for a fun movie night at Johnston Student Center 304 (reserved).</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Feb 19, 2026 (Thursday) 6 PM</span>
                </div>
              </div>
            </div>

            {/* Event Card 3 - Pickleball */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src="https://readdy.ai/api/search-image?query=college%20students%20playing%20pickleball%20outdoor%20court%20university%20campus%20sports%20tournament%20practice%20day%20sunny%20weather%20active%20lifestyle%20friends%20competing%20together%20athletic%20event&width=600&height=400&seq=viettech-pickleball-2026&orientation=landscape" 
                  alt="Pickleball Tournament" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Sports Event</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Pickleball Practice and Tournament</h3>
                <p className="text-gray-600 text-sm mb-4">Practice day and friendly tournament. All skill levels welcome!</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">April 2026</span>
                </div>
              </div>
            </div>

            {/* Event Card 4 - International Street Fair */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src="https://readdy.ai/api/search-image?query=international%20street%20fair%20festival%20with%20Vietnamese%20cultural%20booth%20traditional%20games%20%C3%B4%20%C4%83n%20quan%20board%20game%20colorful%20decorations%20stage%20performance%20outdoor%20event%20university%20campus%20multicultural%20celebration&width=600&height=400&seq=viettech-streetfair-2026&orientation=landscape" 
                  alt="International Street Fair" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Cultural Festival</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">International Street Fair</h3>
                <p className="text-gray-600 text-sm mb-4">Interactive activities, traditional games (Ô ăn quan), fundraising, and stage performance.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Apr 26, 2026 (Sunday)</span>
                </div>
              </div>
            </div>

            {/* Event Card 5 - Summer Activity */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src="https://readdy.ai/api/search-image?query=summer%20outdoor%20picnic%20BBQ%20at%20lake%20park%20Foxridge%20Claytor%20Lake%20students%20grilling%20food%20nature%20setting%20sunny%20day%20friends%20gathering%20hiking%20trail%20beautiful%20scenery&width=600&height=400&seq=viettech-summer-2026&orientation=landscape" 
                  alt="Summer Picnic/BBQ" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Outdoor Activity</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Summer Picnic/BBQ and Hiking</h3>
                <p className="text-gray-600 text-sm mb-4">Enjoy outdoor activities at Foxridge or Claytor Lake with BBQ and hiking.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Summer 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
     <section id="board" className="py-24 relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/src/assets/images/board/board.JPG')",
  }}>
    <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-start justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
              Our Leadership Board
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Board Member 1 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={presidentImg}
                    alt="President" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Khoi Mai</h3>
                <p className="text-red-500 font-semibold mb-2">President</p>
                <p className="text-gray-100 text-sm">Leading VietTech with passion and dedication to our community's growth.</p>
              </div>
            </div>

            {/* Board Member 2 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={vice1Img} 
                    alt="Vice President" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Stephen Nguyen</h3>
                <p className="text-red-500 font-semibold mb-2">Vice President</p>
                <p className="text-gray-100 text-sm">Supporting our president and coordinating major events and initiatives.</p>
              </div>
            </div>

            {/* Board Member 3 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={hieuImg} 
                    alt="Vice President" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Hieu Do</h3>
                <p className="text-red-500 font-semibold mb-2">Vice President</p>
                <p className="text-gray-100 text-sm">Keeping our organization organized and communication flowing smoothly.</p>
              </div>
            </div>

            {/* Board Member 4 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={vice2Img}
                    alt="Treasurer" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Nguyen Minh</h3>
                <p className="text-red-500 font-semibold mb-2">Treasurer</p>
                <p className="text-gray-100 text-sm">Managing our finances and ensuring sustainable growth for VietTech.</p>
              </div>
            </div>

            {/* Board Member 5 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={ngocImg} 
                    alt="Events Coordinator" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Thien Ngoc</h3>
                <p className="text-red-500 font-semibold mb-2">Events Coordinator</p>
                <p className="text-gray-100 text-sm">Planning and executing memorable events that bring our community together.</p>
              </div>
            </div>

            {/* Board Member 6 */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-4">
                <div className="h-80">
                  <img 
                    src={kathyImg}
                    alt="Content Director" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Kathy Nguyen</h3>
                <p className="text-red-500 font-semibold mb-2">Creative Director</p>
                <p className="text-gray-100 text-sm">Keeping our community connected through engaging social media content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Moments We've Shared</h2>
            <p className="text-gray-600 mb-8">Capturing the memories that make VietTech special</p>
            <a
              href="https://gobblerconnect.vt.edu/organization/viettech/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              VIEW FULL GALLERY
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g1} 
                alt="Gallery 1" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g2} 
                alt="Gallery 2" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g3} 
                alt="Gallery 3" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g4} 
                alt="Gallery 4" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g5} 
                alt="Gallery 5" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g6} 
                alt="Gallery 6" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g7} 
                alt="Gallery 7" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={g8} 
                alt="Gallery 8" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join VietTech?</h2>
          <p className="text-xl mb-8 text-red-100">
            Become part of our vibrant community and experience the best of Vietnamese culture at Virginia Tech
          </p>
          <a 
            href="https://gobblerconnect.vt.edu/organization/viettech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-xl"
          >
            GET STARTED TODAY
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-red-50 via-yellow-50 to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">Have questions about VietTech or want to learn more about our community? We'd love to hear from you!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:viethokiesatvt@gmail.com" className="text-gray-600 text-lg hover:text-red-600 transition-colors">viethokiesatvt@gmail.com</a>
                  <p className="text-gray-500 text-sm mt-2">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Call Us</h3>
                  <a href="tel:5406050675" className="text-gray-600 text-lg hover:text-red-600 transition-colors">540-605-0675</a>
                  <p className="text-gray-500 text-sm mt-2">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-lg">Blacksburg, VA 24060</p>
                  <p className="text-gray-600 text-lg">United States</p>
                  <p className="text-gray-500 text-sm mt-2">Virginia Tech Campus</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-6">Follow us on social media to stay updated with our latest events and activities!</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/VTVietnamese" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg cursor-pointer">
                    <i className="ri-facebook-fill text-2xl text-white"></i>
                  </a>
                  <a href="https://www.instagram.com/viet_hokies/?hl=vi" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg cursor-pointer">
                    <i className="ri-instagram-line text-2xl text-white"></i>
                  </a>
                  <a href="mailto:viethokiesatvt@gmail.com" className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg cursor-pointer">
                    <i className="ri-mail-line text-2xl text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[700px]">
              <a 
                href="https://www.google.com/maps/place/Virginia+Tech/@37.2283843,-80.4234167,15z/data=!4m6!3m5!1s0x884d9509b0a5f745:0x1e1e6a82e0b5c0c0!8m2!3d37.2283843!4d-80.4234167!16zL20vMDFwNnRy"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25466.89087890625!2d-80.4234167!3d37.2283843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d9509b0a5f745%3A0x1e1e6a82e0b5c0c0!2sVirginia%20Tech!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Virginia Tech Location"
                  className="w-full h-full"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-16 relative overflow-hidden">
        {/* Decorative Wave Pattern */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/182f62a31e9414f4fd33c7d49784c0be.jpeg" 
                  alt="VietTech Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-bold font-['Dancing_Script']">VietTech</span>
              </div>
              <p className="text-red-100 mb-6 leading-relaxed">
                Building a strong Vietnamese community at Virginia Tech
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-red-800 border border-red-700 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
                <button 
                  type="submit"
                  className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer flex-shrink-0"
                >
                  <i className="ri-send-plane-fill text-red-900"></i>
                </button>
              </form>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-red-100 hover:text-white transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-red-100 hover:text-white transition-colors cursor-pointer">About Us</button></li>
                <li><button onClick={() => scrollToSection('news')} className="text-red-100 hover:text-white transition-colors cursor-pointer">Events</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><Link to="/banks" className="text-red-100 hover:text-white transition-colors cursor-pointer">Banking Guide</Link></li>
                <li><Link to="/sim-cards" className="text-red-100 hover:text-white transition-colors cursor-pointer">SIM Cards Guide</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">CAMPUS</h3>
              <ul className="space-y-2">
                <li><a href="https://www.vt.edu/visit.html" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colors cursor-pointer">Virginia Tech</a></li>
                <li><a href="https://www.vt.edu/campus-life/discover-blacksburg.html" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colors cursor-pointer">Student Life</a></li>
                <li><a href="https://www.vt.edu/admissions/undergraduate.html" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colors cursor-pointer">Undergraduate Admissions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-red-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-red-200 text-sm">© 2025 VietTech at Virginia Tech</p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/VTVietnamese" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-red-700 rounded-lg flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/viet_hokies/?hl=vi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-red-700 rounded-lg flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="mailto:viethokiesatvt@gmail.com" className="w-10 h-10 border border-red-700 rounded-lg flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

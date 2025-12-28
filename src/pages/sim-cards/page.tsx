import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SimCardsPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carriers = [
    {
      name: 'T-Mobile',
      description: 'Excellent coverage in Blacksburg and nationwide. Popular among international students for their affordable prepaid plans and no-contract options. Great data speeds and customer service.',
      pros: ['Strong campus coverage', 'International calling options', 'No annual contract required', 'Free Netflix on some plans'],
      cons: ['Can be expensive for premium plans', 'Rural coverage varies'],
      plans: 'Prepaid plans start at $40/month with unlimited talk, text, and data',
      link: 'https://www.t-mobile.com/cell-phone-plans',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/9a164a5486fa48ffcbb6e7e89f10122a.png'
    },
    {
      name: 'Verizon',
      description: 'Best overall coverage in Virginia and rural areas around Blacksburg. Premium carrier with reliable service, though typically more expensive. Great for students who travel frequently.',
      pros: ['Best coverage in Virginia', 'Reliable network', 'Excellent customer service', 'Strong rural coverage'],
      cons: ['Higher prices', 'Limited budget options'],
      plans: 'Plans start at $35/month for prepaid, postpaid from $65/month',
      link: 'https://www.verizon.com/plans/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/388d82b829a72f5bfd5d4e7c08197773.png'
    },
    {
      name: 'AT&T',
      description: 'Strong nationwide coverage with good presence in Blacksburg. Offers competitive student plans and international calling features. Good balance of price and coverage.',
      pros: ['Good campus coverage', 'Student discounts available', 'International features', 'HBO Max included on some plans'],
      cons: ['Customer service can be slow', 'Some plans require contracts'],
      plans: 'Prepaid from $40/month, postpaid plans from $60/month',
      link: 'https://www.att.com/plans/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/aa1adda33e0c312ef14ed97f795c428f.png'
    },
    {
      name: 'Mint Mobile',
      description: 'Budget-friendly option running on T-Mobile network. Perfect for students on a tight budget. Requires upfront payment for 3, 6, or 12 months but offers significant savings.',
      pros: ['Very affordable', 'Uses T-Mobile network', 'No contracts', 'Easy online setup'],
      cons: ['Requires bulk payment', 'Limited customer service', 'No physical stores'],
      plans: 'Plans as low as $15/month with bulk purchase (3-12 months)',
      link: 'https://www.mintmobile.com/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/bdac948b1cbf05f6a5db57c2038efed3.png'
    },
    {
      name: 'Visible',
      description: 'Owned by Verizon, offering unlimited data on Verizon network at budget prices. All-digital service with no physical stores, but excellent value for students who use lots of data.',
      pros: ['Unlimited data', 'Uses Verizon network', 'Very affordable', 'No contracts'],
      cons: ['Data may be deprioritized', 'Online-only support', 'No physical stores'],
      plans: 'Single plan at $25-30/month with unlimited everything',
      link: 'https://www.visible.com/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/a90f3b158a649b42bab387074d3f356b.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/182f62a31e9414f4fd33c7d49784c0be.jpeg" 
                  alt="VietTech Logo" 
                  className="w-12 h-12 object-contain "
                />
                <span className="text-2xl font-bold text-gray-900 font-['Dancing_Script']">VietTech</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">HOME</Link>
                <Link to="/banks" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">BANKING GUIDE</Link>
                <Link to="/sim-cards" className="text-sm font-medium text-red-600 cursor-pointer whitespace-nowrap">SIM CARDS</Link>
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
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">HOME</Link>
                <Link to="/banks" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">BANKING GUIDE</Link>
                <Link to="/sim-cards" className="text-sm font-medium text-red-600 cursor-pointer whitespace-nowrap text-left">SIM CARDS</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-yellow-50 to-amber-50 relative">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                SIM Card Guide for <span className="text-red-600">First-Year Students</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Getting a US phone number is essential for your life at Virginia Tech. We've reviewed the best mobile carriers and plans to help you stay connected with friends, family, and the VietTech community.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>No SSN required</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>Flexible plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>International options</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tips Section */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6 relative z-10">📱 What You Need to Know</h2>
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-smartphone-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Check Phone Compatibility</h3>
                    <p className="text-red-100 text-sm">Make sure your phone is unlocked and compatible with US networks. Most modern phones work, but verify before purchasing a plan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-sim-card-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Physical vs eSIM</h3>
                    <p className="text-red-100 text-sm">Many carriers offer eSIM activation. If your phone supports it, you can activate service without a physical SIM card.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Coverage Matters</h3>
                    <p className="text-red-100 text-sm">Blacksburg has good coverage from all major carriers, but check coverage maps if you plan to travel to rural areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-global-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">International Calling</h3>
                    <p className="text-red-100 text-sm">Consider plans with international calling if you need to call home frequently. Some carriers offer free international texting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carriers Review Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Best Mobile Carriers for <span className="text-red-600">Students</span>
              </h2>
              <p className="text-gray-600 text-lg">Compare plans and find the perfect fit for your budget and needs</p>
            </div>

            <div className="space-y-8">
              {carriers.map((carrier, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                  {/* Card Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <i className="ri-star-line text-6xl text-yellow-600"></i>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 h-80 md:h-auto">
                      <img 
                        src={carrier.image}
                        alt={carrier.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 md:p-10">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{carrier.name}</h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">{carrier.description}</p>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p className="text-sm font-semibold text-gray-900">💰 Pricing: <span className="font-normal">{carrier.plans}</span></p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                            <i className="ri-check-line"></i>
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {carrier.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                <i className="ri-arrow-right-s-line text-green-600 mt-0.5"></i>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                            <i className="ri-close-line"></i>
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {carrier.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a 
                        href={carrier.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        View {carrier.name} Plans
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Where to Get Your SIM Card</h2>
              <p className="text-gray-600 text-lg">Multiple convenient options in Blacksburg</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Card Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <i className="ri-map-pin-line text-6xl text-red-600"></i>
                </div>

                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-store-2-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carrier Stores</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Visit T-Mobile, Verizon, or AT&T stores in Blacksburg. Staff can help you choose the right plan and activate your service immediately.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Card Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <i className="ri-price-tag-line text-6xl text-yellow-600"></i>
                </div>

                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shopping-cart-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Stores</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Walmart, Target, and Best Buy sell prepaid SIM cards and starter kits. Great for budget carriers like Mint Mobile and Visible.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Card Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <i className="ri-cursor-line text-6xl text-green-600"></i>
                </div>

                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Orders</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Order SIM cards online before arriving in the US. Many carriers offer free shipping and easy online activation with eSIM support.</p>
              </div>
            </div>
          </div>
        </section>

      

        {/* Footer */}
        <footer className="bg-red-900 text-white py-12 relative">
          {/* Footer Top Wave */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400"></div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/182f62a31e9414f4fd33c7d49784c0be.jpeg" 
                  alt="VietTech Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold font-['Dancing_Script']">VietTech</span>
              </div>
              <p className="text-red-200 text-sm">© 2025 VietTech at Virginia Tech</p>
             
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

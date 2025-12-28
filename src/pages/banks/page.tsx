import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BanksPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const banks = [
    {
      name: 'Bank of America',
      description: 'One of the largest banks in the US with a branch right on campus at University Mall. Great for students with no monthly fees on student accounts and extensive ATM network nationwide.',
      pros: ['Campus branch location', 'No monthly fees for students', 'Excellent mobile app', 'Large ATM network'],
      cons: ['Can be crowded during peak times', 'Some services require minimum balance'],
      link: 'https://www.bankofamerica.com/student-banking/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/bdf29b7618fde5d156dd16e7fee8da3c.png'
    },
    {
      name: 'Wells Fargo',
      description: 'Another major national bank with a convenient Blacksburg location. Offers student checking accounts with no monthly service fees and easy online banking features.',
      pros: ['National presence', 'Student-friendly accounts', 'Good customer service', 'Free checks for students'],
      cons: ['Limited local branches', 'Some fees for certain services'],
      link: 'https://www.wellsfargo.com/student/',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/0ba049f9b4465a9a82208217780fd367.png'
    },
    {
      name: 'Truist',
      description: 'Regional bank with strong presence in Virginia. Offering competitive student banking options with local branches in Blacksburg and excellent customer service.',
      pros: ['Local presence', 'Personalized service', 'Student checking accounts', 'Easy account setup'],
      cons: ['Smaller ATM network nationally', 'Limited international services'],
      link: 'https://www.truist.com/checking/student-checking',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/f5ea7d248441006bb89a1a5ebbc1a67d.png'
    },
    {
      name: 'Chase Bank',
      description: 'Major national bank with excellent digital banking features. While no physical branch in Blacksburg, their mobile app and extensive ATM network make banking convenient.',
      pros: ['Excellent mobile app', 'Large ATM network', 'Student account benefits', 'Strong fraud protection'],
      cons: ['No local branch', 'Some services require minimum balance'],
      link: 'https://www.chase.com/personal/checking/student-checking',
      image: 'https://static.readdy.ai/image/b1d0b6f93a6a7f547abfefe718b6a2d8/525df45ab21e037d1fcd9533f6821726.png'
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
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-bold text-gray-900 font-['Dancing_Script']">VietTech</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">HOME</Link>
                <Link to="/banks" className="text-sm font-medium text-red-600 cursor-pointer whitespace-nowrap">BANKING GUIDE</Link>
                <Link to="/sim-cards" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap">SIM CARDS</Link>
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
                <Link to="/banks" className="text-sm font-medium text-red-600 cursor-pointer whitespace-nowrap text-left">BANKING GUIDE</Link>
                <Link to="/sim-cards" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap text-left">SIM CARDS</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-yellow-50 to-amber-50 relative">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Banking Guide for <span className="text-red-600">First-Year Students</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Starting your journey at Virginia Tech? Opening a US bank account is one of the first important steps. We've reviewed the best banking options in Blacksburg to help you make an informed decision.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>Student-friendly accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>Low or no fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span>Convenient locations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tips Section */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6 relative z-10">💡 Important Tips Before Opening an Account</h2>
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-file-text-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Required Documents</h3>
                    <p className="text-red-100 text-sm">Bring your passport, I-20/DS-160, Virginia Tech ID, and proof of address (dorm assignment or lease).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">SSN Not Required Initially</h3>
                    <p className="text-red-100 text-sm">Most banks allow you to open an account without a Social Security Number. You can add it later.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Initial Deposit</h3>
                    <p className="text-red-100 text-sm">Some accounts require a minimum opening deposit, typically $25-$100. Check with each bank.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-smartphone-line text-red-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mobile Banking</h3>
                    <p className="text-red-100 text-sm">Download the bank's mobile app for easy account management, deposits, and transfers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banks Review Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Best Banks in <span className="text-red-600">Blacksburg</span>
              </h2>
              <p className="text-gray-600 text-lg">Compare features and choose the best option for your needs</p>
            </div>

            <div className="space-y-8">
              {banks.map((bank, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                  {/* Card Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <i className="ri-star-line text-6xl text-yellow-600"></i>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 h-80 md:h-auto">
                      <img 
                        src={bank.image}
                        alt={bank.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 md:p-10">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{bank.name}</h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">{bank.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                            <i className="ri-check-line"></i>
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {bank.pros.map((pro, i) => (
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
                            {bank.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a 
                        href={bank.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Visit {bank.name} Website
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

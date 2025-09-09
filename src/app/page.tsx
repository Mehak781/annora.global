'use client'

import { useState } from 'react'
import Image from 'next/image'

type Language = 'en' | 'hi'
type Role = 'consumer' | 'producer' | null

const translations = {
  en: {
    title: 'Annora Global',
    subtitle: 'Farm to Table Marketplace',
    description: 'Connecting consumers directly with farmers for fresh, quality produce',
    selectLanguage: 'Select Language',
    selectRole: 'I am a...',
    consumer: 'Consumer',
    producer: 'Producer/Farmer',
    consumerDesc: 'I want to buy fresh produce',
    producerDesc: 'I want to sell my crops',
    continue: 'Continue',
    footer: 'Bringing fresh produce from farm to your table'
  },
  hi: {
    title: 'अन्नोरा ग्लोबल',
    subtitle: 'खेत से थाली तक बाज़ार',
    description: 'ताज़ी और गुणवत्तापूर्ण उपज के लिए उपभोक्ताओं को सीधे किसानों से जोड़ना',
    selectLanguage: 'भाषा चुनें',
    selectRole: 'मैं हूँ...',
    consumer: 'उपभोक्ता',
    producer: 'उत्पादक/किसान',
    consumerDesc: 'मैं ताज़ी उपज खरीदना चाहता हूँ',
    producerDesc: 'मैं अपनी फसल बेचना चाहता हूँ',
    continue: 'आगे बढ़ें',
    footer: 'खेत से आपकी थाली तक ताज़ी उपज पहुंचाना'
  }
}

// Google Form URLs
const GOOGLE_FORMS = {
  consumer: {
    en: 'https://docs.google.com/forms/d/e/1FAIpQLScRFWKs0LJzSd5xcueMHRKH8XpL0_cNiPRq4YxIN7KZQSp04Q/viewform',
    hi: 'https://docs.google.com/forms/d/e/1FAIpQLScRFWKs0LJzSd5xcueMHRKH8XpL0_cNiPRq4YxIN7KZQSp04Q/viewform'
  },
  producer: {
    en: 'https://docs.google.com/forms/d/e/1FAIpQLSfjncY22zGQQ-6sHkyKMKQ7F27v9kvIzy1qdJ7A-Lf1y27twg/viewform', 
    hi: 'https://docs.google.com/forms/d/e/1FAIpQLSfjncY22zGQQ-6sHkyKMKQ7F27v9kvIzy1qdJ7A-Lf1y27twg/viewform'
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [selectedRole, setSelectedRole] = useState<Role>(null)

  const t = translations[language]

  const handleContinue = () => {
    if (selectedRole) {
      const formUrl = GOOGLE_FORMS[selectedRole][language]
      window.open(formUrl, '_blank')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{t.selectLanguage}:</span>
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.subtitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* Role Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t.selectRole}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Consumer Option */}
            <div 
              onClick={() => setSelectedRole('consumer')}
              className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 ${
                selectedRole === 'consumer' 
                  ? 'border-green-500 bg-green-50 shadow-md' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{t.consumer}</h4>
                <p className="text-gray-600">{t.consumerDesc}</p>
              </div>
            </div>

            {/* Producer Option */}
            <div 
              onClick={() => setSelectedRole('producer')}
              className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 ${
                selectedRole === 'producer' 
                  ? 'border-green-500 bg-green-50 shadow-md' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{t.producer}</h4>
                <p className="text-gray-600">{t.producerDesc}</p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleContinue}
              disabled={!selectedRole}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
                selectedRole
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t.continue}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600">{t.footer}</p>
          <div className="mt-4 space-x-6">
            <a href="/privacy" className="text-sm text-green-600 hover:text-green-700">Privacy Policy</a>
            <a href="/terms" className="text-sm text-green-600 hover:text-green-700">Terms of Service</a>
            <a href="/contact" className="text-sm text-green-600 hover:text-green-700">Contact Us</a>
          </div>
        </div>
      </div>
    </main>
  )
}
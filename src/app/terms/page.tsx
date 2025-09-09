import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Annora Global&apos;s services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use Annora Global&apos;s services for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of our platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights and property of other users</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Annora Global shall not be liable for any damages arising from the use or inability 
                to use our services, even if we have been notified of the possibility of such damages.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@annora.global
                <br />
                Phone: +91-XXXX-XXXXXX
              </p>
            </section>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
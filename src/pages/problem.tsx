import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Problem() {
  return (
    <>
      <Head>
        <title>The Problem - Involv Investment Pitch</title>
        <meta
          name="description"
          content="Gaming venues face a perfect storm of regulatory compliance challenges, operational inefficiencies, and market pressures."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <SummaryView>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Perfect Storm
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Gaming venues face unprecedented challenges that threaten their operational integrity and financial performance
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                THE PROBLEM
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Gaming venues face a perfect storm of challenges:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Regulatory Compliance Burden</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Complex AML requirements, increasing enforcement action with severe penalties and reputational damage for non-compliance. The Australian casinos are case studies in what happens if you wait too long. Pubs & clubs can't afford to make the same mistake.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Evolving responsible gambling obligations
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Multiple state-based regulatory frameworks
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Manual, paper-based compliance processes prone to errors
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Operational Inefficiencies</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Gaming machines operating below optimal performance
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Limited data insights for revenue optimisation
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Gaming‑floor decisions still guided by gut instinct and simple heuristics
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Market Pressures</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Increasing scrutiny from regulators and community
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Need to balance profitability with safer gambling
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Board oversight of risk & compliance maturing
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Staff training and retention challenges
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The Cost:</strong> Average venue ineffectively spends c.$50,000+ annually on compliance alone, whilst missing 10-20% revenue optimisation opportunities.
              </p>
            </div>
          </DetailedView>

          {/* Key Stat Cards */}
          <SummaryView>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">300%+</div>
                <div className="text-sm opacity-90">increase in regulatory enforcement actions since 2021</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">70%</div>
                <div className="text-sm opacity-90">of venues report having no dedicated compliance staff</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-sm opacity-90">of operators rely on manual forms or spreadsheets for governance</div>
              </div>
            </div>
          </SummaryView>

          {/* Main Problem Areas */}
          <SummaryView>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance Burden</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Complex AML requirements with severe penalties for non-compliance</li>
                  <li>Evolving responsible gambling obligations</li>
                  <li>Myriad sources of obligations; onus on operator to find</li>
                  <li>Manual, paper-based processes prone to errors</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gaming Floor Operations Not Optimised</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Gaming machines revenue performance could be improved with data and insights</li>
                  <li>Gaming floor decisions guided by gut instinct and overly simple heuristics</li>
                  <li>Increasingly unsustainable in a competitive market share driven industry</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Pressures</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Increasing scrutiny from regulators; community expecations evolving</li>
                  <li>Need to balance profitability with safer gambling</li>
                  <li>Board oversight of risk & compliance maturing</li>
                  <li>Staff training and retention challenges</li>
                </ul>
              </div>
            </div>
          </SummaryView>

          {/* Cost Impact Section */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">The Ying and Yang of Operating Gaming Machines</h2>
                <p className="text-xl opacity-90">Mounting compliance costs running into intensified competition for customers</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">$50,000+</div>
                  <div className="text-lg mb-2">What a venue would spend annually on compliance activities</div>
                  <div className="text-sm opacity-80">Ineffectively spent on manual processes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">10-20%</div>
                  <div className="text-lg mb-2">Missed revenue optimisation</div>
                  <div className="text-sm opacity-80">Due to lack of data-driven insights</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Case Study Callout */}
          <SummaryView>
            <div className="mt-16 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Learning from the Casino Crisis</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      Australian casinos serve as cautionary tales of what happens when compliance failures escalate. <strong>Pubs & clubs can't afford to make the same mistakes.</strong> The time for proactive compliance and operational excellence is now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>
        </div>
      </div>

      <PitchNavigation />
      <Footer />
    </>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ViewLink from '../components/ViewLink'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Home() {
  return (
    <>
      <Head>
        <title>Involv - Investment Pitch</title>
        <meta name="description" content="Involv - Compliance Made Simple. Gaming Made Smarter. Built for Pubs and Clubs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section with Overlays */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/involv-hero.jpg"
            alt="Pub and gaming venue interior"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          {/* Tagline */}
          <SummaryView>
            <div className="mb-8 pt-24">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Compliance Made Simple.
                <br />
                Gaming Made Smarter.
                <br />
                <span className="text-[#66899b]">Built for Pubs and Clubs.</span>
              </h1>
            </div>
          </SummaryView>

          {/* Detailed Executive Summary */}
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
                Involv is a specialist advisory and regulatory technology company
              </h1>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                ...with a comprehensive GRC and gaming optimisation platform serving Australia's $15 billion gaming industry.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4 mt-6">Executive Summary</h2>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>Situation:</strong> 300%+ increase in state level enforcement actions and penalties since 2021 (across AML, responsible gambling and licence breaches); 70% of venues report no dedicated compliance or analytics staff; 80% rely on manual spreadsheets for governance tasks (industry survey, 2024).
              </p>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>The Opportunity:</strong> Pubs and clubs face increasing regulatory complexity, compliance costs, and pressure to optimise gaming performance whilst maintaining responsible gambling standards. They face significantly increased regulatory scrutiny and enforcement, while most venues remain under-resourced and poorly equipped to manage compliance effectively.
              </p>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>Our Solution:</strong> Integrated advisory services, and supporting SaaS compliance platform (Assure), transaction monitoring software (Sentinel), safer gaming monitoring software (SafePlay), and EGM optimisation software (PrimeEdge).
              </p>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>Market:</strong> 3,750+ licensed venues across Australia operating gaming machines. $1.5B+ annual spend on compliance, risk management, and gaming technology.
              </p>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>Business Model:</strong> Recurring software subscription fees + high-margin implementation and consulting services.
              </p>
              <p className="text-white/80 mb-4 pb-2 border-b border-white/30">
                <strong>Traction:</strong> 14 current clients, c. $2M current revenue. 1 client trialling GRC tool.
              </p>
              <p className="text-white/80 mb-4">
                <strong>Funding Ask:</strong> $[X] million to accelerate growth and acquire technology that provides a significant competitive advantage, product development and market expansion.
              </p>
            </div>
          </DetailedView>

          {/* Product Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
            {/* Assure */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/logo-involv-assure-white2.svg"
                alt="Involv Assure"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-white text-sm font-medium">A compliance team in your browser.</p>
            </div>

            {/* Sentinel */}
            <div className="flex flex-col items-center space-y-4">
              <Image src="/logo-sentinel-white.png" alt="Sentinel" width={160} height={60} className="h-12 w-auto" />
              <p className="text-white text-sm font-medium">Real-time transaction monitoring.</p>
            </div>

            {/* SafePlay */}
            <div className="flex flex-col items-center space-y-4">
              <Image src="/logo-safeplay-white.png" alt="SafePlay" width={160} height={60} className="h-12 w-auto" />
              <p className="text-white text-sm font-medium">Real-time safer gaming monitoring.</p>
            </div>

            {/* PrimeEdge */}
            <div className="flex flex-col items-center space-y-4">
              <Image src="/logo-involv-primeedge-white2.svg" alt="Involv PrimeEdge" width={160} height={60} className="h-12 w-auto" />
              <p className="text-white text-sm font-medium">The science behind high-performance gaming venues.</p>
            </div>
          </div>

          {/* Executive Summary Stats */}
          <SummaryView>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">300%+</div>
                <div className="text-sm text-gray-200">Increase in enforcement actions since 2021</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">$1.5B+</div>
                <div className="text-sm text-gray-200">Annual compliance & tech spend</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3,750+</div>
                <div className="text-sm text-gray-200">Licensed gaming venues</div>
              </div>
            </div>
          </SummaryView>

          {/* Navigation to Next Section */}
          <div className="mt-16">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-lg blur opacity-60 animate-pulse"></div>
              <div className="absolute -inset-2 bg-[#66899b] rounded-lg opacity-20 animate-ping"></div>
              <SummaryView>
                <Link
                  href="/problem"
                  className="relative inline-flex items-center px-8 py-4 bg-[#66899b] text-white font-semibold rounded-lg hover:bg-[#5a7a8a] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  Begin Presentation
                  <svg className="ml-2 w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </SummaryView>
              <DetailedView>
                <ViewLink
                  href="/problem"
                  className="relative inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300"
                >
                  Deep-dive: Problem Statement
                </ViewLink>
              </DetailedView>
            </div>
            <p className="text-white/80 text-sm mt-4 animate-pulse">Click to explore our investment opportunity</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

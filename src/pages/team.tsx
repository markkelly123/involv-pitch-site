import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team - Involv Investment Pitch</title>
        <meta name="description" content="Proven leadership team with 80+ years of combined experience in gaming, compliance, and business transformation." />
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
                Proven Leadership Team
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Deep industry expertise with the relationships and knowledge to execute at scale
              </p>
            </div>
          </SummaryView>

          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                TEAM
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Proven Leadership with Deep Industry Expertise</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Louise Lane -- Founder & Chief Executive Officer</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                Louise Lane brings decades of specialised governance, risk, and compliance expertise across multiple regulated industries including gaming, liquor, media, wagering, and sporting administration. Her extensive in-house experience informs her pragmatic approach to navigating evolving regulatory landscapes and meeting growing stakeholder expectations. Louise excels at developing tailored frameworks and sustainable compliance solutions that protect business interests while satisfying stringent obligations. With particular insight into Australia's changing AML laws and fluid gaming environment, she delivers strategic guidance that transforms regulatory challenges into operational advantages, ensuring clients understand that licenses remain privileges requiring diligent management.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Mark Kelly - Founder & Chief Operating Officer</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                Mark is a seasoned executive with 30 years of experience driving transformational change across industries. For the past six years, he has specialised in compliance-led growth within casino, pub, and club gaming environments. Mark's expertise encompasses gaming systems enhancement, rewards program development, and EGM optimisation that increases yield while maintaining regulatory compliance. His unique ability to blend product expertise with responsible gaming practices allows him to translate complex compliance requirements into commercially viable, guest-focused strategies that future-proof venues in today's scrutinised gaming landscape.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Tim Barnett -- Founder & Chief Strategy Officer</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                Tim Barnett brings over two decades of leadership excellence in hospitality and gaming across Australia and international markets. His proven expertise in business transformation, regulatory navigation, and team leadership creates substantial value for organisations. Tim excels at developing robust risk management frameworks and control systems that satisfy stringent compliance requirements. His passion for building sustainable gaming businesses is fundamentally supported by effective safer gaming practices. Tim's deep understanding of regulatory obligations enables him to deliver strategic solutions that skilfully balance commercial objectives with safer gaming principles.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Con Nikitas -- Founder & Chief Commercial Officer</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                Con brings 30 years of unparalleled expertise to his CCO role at Involv, having established himself as a cornerstone figure in Australia's gaming industry. His distinguished career spans leadership positions with premier gaming and hospitality organisations, where he navigated regulatory frameworks while optimising venue operations. Con's strategic vision, comprehensive industry knowledge, and ability to balance compliance with business growth make his counsel some of the most valuable in the industry. His proven track record in gaming asset management and operational excellence continues to drive innovation and sustainable success.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Advisory Board:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Being recruited
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Why This Team:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Combined 80+ years of gaming and compliance experience
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Proven track record managing the largest gaming operations in Australia, navigated complex regulatory environments, and leading successful business transformations at scale.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Complete solution coverage: gaming operations, regulatory compliance, business transformation, and digital, data & technology innovation.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Decades of experience means deep relationships with regulators, manufacturers, operators, and industry bodies.
              </p>
              <p className="text-gray-700 mb-4">
                • Hands-on implementation within sophisticated gaming operators
              </p>
            </div>
          </DetailedView>

          {/* Team Stats */}
          <SummaryView>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">80+</div>
                <div className="text-sm opacity-90">Years Combined Experience</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Founding Partners</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">13,000+</div>
                <div className="text-sm opacity-90">EGMs Managed</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Solution Coverage</div>
              </div>
            </div>
          </SummaryView>

          {/* Why This Team */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why This Team</h2>
              
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Complete Solution Coverage</h3>
                  <p className="text-lg opacity-90">One team with all the expertise needed to deliver end-to-end value</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">Gaming Operations</div>
                    <div className="text-xs opacity-80 mt-1">Con's 30-year track record</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">Regulatory Compliance</div>
                    <div className="text-xs opacity-80 mt-1">Louise's deep GRC expertise</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">Business Transformation</div>
                    <div className="text-xs opacity-80 mt-1">Tim's strategic leadership</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">Technology & Innovation</div>
                    <div className="text-xs opacity-80 mt-1">Mark's product expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Founder Profiles */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet the Founders</h2>
              
              <div className="space-y-16">
                {/* Louise Lane - CEO */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <Image
                          src="/images/team/louise-lane.jpg"
                          alt="Louise Lane"
                          width={300}
                          height={300}
                          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Louise Lane</h3>
                        <p className="text-[#66899b] font-medium mb-4">Founder & Chief Executive Officer</p>
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">Expertise</div>
                          <div>Governance, Risk & Compliance</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Louise Lane brings decades of specialised governance, risk, and compliance expertise across multiple regulated industries including gaming, liquor, media, wagering, and sporting administration. Her extensive in-house experience informs her pragmatic approach to navigating evolving regulatory landscapes and meeting growing stakeholder expectations.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                          Louise excels at developing tailored frameworks and sustainable compliance solutions that protect business interests while satisfying stringent obligations. With particular insight into Australia's changing AML laws and fluid gaming environment, she delivers strategic guidance that transforms regulatory challenges into operational advantages.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="font-medium text-blue-900 mb-2">Core Strengths</div>
                            <ul className="text-sm text-blue-800 space-y-1">
                              <li>• AML/CTF program design</li>
                              <li>• Regulatory navigation</li>
                              <li>• Risk framework development</li>
                              <li>• Multi-industry compliance experience</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 rounded-lg p-4">
                            <div className="font-medium text-green-900 mb-2">Industry Impact</div>
                            <ul className="text-sm text-green-800 space-y-1">
                              <li>• Gaming, liquor, media sectors</li>
                              <li>• Sporting administration</li>
                              <li>• Wagering operations</li>
                              <li>• Regulatory liaison expertise</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mark Kelly - COO */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <Image
                          src="/images/team/mark-kelly.jpg"
                          alt="Mark Kelly"
                          width={300}
                          height={300}
                          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Mark Kelly</h3>
                        <p className="text-[#66899b] font-medium mb-4">Founder & Chief Operating Officer</p>
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">Expertise</div>
                          <div>Technology & Gaming Innovation</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Mark is a seasoned executive with 30 years of experience driving transformational change across industries. For the past six years, he has specialised in compliance-led growth within casino, pub, and club gaming environments. Mark's expertise encompasses gaming systems enhancement, rewards program development, and EGM optimisation that increases yield while maintaining regulatory compliance.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                          His unique ability to blend product expertise with responsible gaming practices allows him to translate complex compliance requirements into commercially viable, guest-focused strategies that future-proof venues in today's scrutinised gaming landscape.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          <div className="bg-purple-50 rounded-lg p-4">
                            <div className="font-medium text-purple-900 mb-2">Core Strengths</div>
                            <ul className="text-sm text-purple-800 space-y-1">
                              <li>• Gaming systems enhancement</li>
                              <li>• Rewards program development</li>
                              <li>• EGM optimisation strategies</li>
                              <li>• Product-compliance integration</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-50 rounded-lg p-4">
                            <div className="font-medium text-yellow-900 mb-2">Industry Focus</div>
                            <ul className="text-sm text-yellow-800 space-y-1">
                              <li>• Casino gaming environments</li>
                              <li>• Pub and club operations</li>
                              <li>• Responsible gaming practices</li>
                              <li>• Technology transformation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tim Barnett - CSO */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <Image
                          src="/images/team/tim-barnett.jpg"
                          alt="Tim Barnett"
                          width={300}
                          height={300}
                          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Tim Barnett</h3>
                        <p className="text-[#66899b] font-medium mb-4">Founder & Chief Strategy Officer</p>
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">Expertise</div>
                          <div>Business Transformation & Strategy</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Tim Barnett brings over two decades of leadership excellence in hospitality and gaming across Australia and international markets. His proven expertise in business transformation, regulatory navigation, and team leadership creates substantial value for organisations. Tim excels at developing robust risk management frameworks and control systems that satisfy stringent compliance requirements.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                          His passion for building sustainable gaming businesses is fundamentally supported by effective safer gaming practices. Tim's deep understanding of regulatory obligations enables him to deliver strategic solutions that skilfully balance commercial objectives with safer gaming principles.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          <div className="bg-green-50 rounded-lg p-4">
                            <div className="font-medium text-green-900 mb-2">Core Strengths</div>
                            <ul className="text-sm text-green-800 space-y-1">
                              <li>• Business transformation</li>
                              <li>• Risk management frameworks</li>
                              <li>• Team leadership</li>
                              <li>• Strategic planning</li>
                            </ul>
                          </div>
                          
                          <div className="bg-indigo-50 rounded-lg p-4">
                            <div className="font-medium text-indigo-900 mb-2">Market Experience</div>
                            <ul className="text-sm text-indigo-800 space-y-1">
                              <li>• Two decades of hospitality sector expertise</li>
                              <li>• International gaming management</li>
                              <li>• Former COO Crown Melbourne</li>
                              <li>• Regulatory compliance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Con Nikitas - CCO */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <Image
                          src="/images/team/con-nikitas.jpg"
                          alt="Con Nikitas"
                          width={300}
                          height={300}
                          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Con Nikitas</h3>
                        <p className="text-[#66899b] font-medium mb-4">Founder & Chief Commercial Officer</p>
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">Expertise</div>
                          <div>Gaming Operations & Industry Relations</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Con brings 30 years of unparalleled expertise to his CCO role at Involv, having established himself as a cornerstone figure in Australia's gaming industry. His distinguished career spans leadership positions with premier gaming and hospitality organisations, where he navigated regulatory frameworks while optimising venue operations.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                          Con's strategic vision, comprehensive industry knowledge, and ability to balance compliance with business growth make his counsel some of the most valuable in the industry. His proven track record in gaming asset management and operational excellence continues to drive innovation and sustainable success.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          <div className="bg-red-50 rounded-lg p-4">
                            <div className="font-medium text-red-900 mb-2">Industry Leadership</div>
                            <ul className="text-sm text-red-800 space-y-1">
                              <li>• ALH Group (13,000 EGMs)</li>
                              <li>• AVC gaming performance optimisation</li>
                              <li>• Consultant to Mathieson Pub Group </li>
                              <li>• 30-year track record</li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-50 rounded-lg p-4">
                            <div className="font-medium text-orange-900 mb-2">Network Value</div>
                            <ul className="text-sm text-orange-800 space-y-1">
                              <li>• Top 500 venue relationships</li>
                              <li>• All state regulators</li>
                              <li>• LMO and supplier network</li>
                              <li>• Industry body access</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Team Competitive Advantages */}
          <SummaryView>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Team Advantages</h2>
                <p className="text-lg text-gray-700">What makes this founding team uniquely positioned for success</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Industry Relationships</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Decades of relationship building means direct access to regulators, manufacturers, operators, and industry bodies. This network provides immediate credibility and accelerated customer acquisition.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Proven Track Record</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Successfully managed Australia's largest gaming operations, navigated complex regulatory environments, and led business transformations at scale. Results speak for themselves.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Hands-On Implementation</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Not just strategic advisors, but operators who understand day-to-day venue realities. This practical experience ensures solutions that actually work in the field.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Complementary Skills</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Each founder brings distinct but complementary expertise covering all aspects of the solution: operations, compliance, technology, and business transformation.
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
import React from 'react';
import { 
  ArrowLeft, Upload, Brain, MousePointerClick, MessageSquare, 
  FlaskConical, Gauge, Sparkles, ArrowRight, Image,
  Zap, CheckCircle2, Monitor, Server, Database
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Any Image',
    subtitle: 'Drag & drop or click to browse',
    icon: <Upload className="w-10 h-10" />,
    color: 'from-blue-500 to-cyan-400',
    description: 'Start by uploading any image you want to understand — a machine, circuit board, biological diagram, building blueprint, anatomy chart, or even a everyday object.',
    details: [
      'Supports JPEG, PNG, WebP, and GIF formats',
      'Up to 10MB file size',
      'Works with photos, screenshots, diagrams, and schematics',
      'Drag and drop or click the upload area',
    ],
  },
  {
    number: '02',
    title: 'AI Analyzes Your Image',
    subtitle: 'Powered by Google Gemini',
    icon: <Brain className="w-10 h-10" />,
    color: 'from-purple-500 to-pink-400',
    description: 'Google Gemini\'s multimodal AI instantly processes your image, identifying all visible components, understanding their relationships, and generating a comprehensive breakdown.',
    details: [
      'Identifies and labels every visible component',
      'Provides a structured overview of the entire image',
      'Explains how the parts work together',
      'Shares interesting facts and context',
    ],
  },
  {
    number: '03',
    title: 'Tap to Explore Components',
    subtitle: 'Click anywhere on the image',
    icon: <MousePointerClick className="w-10 h-10" />,
    color: 'from-emerald-500 to-teal-400',
    description: 'Click or tap on any part of your image. The AI detects exactly what\'s at that position and gives you a focused, detailed explanation of that specific component.',
    details: [
      'Click anywhere on the image to explore',
      'AI identifies the component at that exact position',
      'Get detailed explanations for each part',
      'Visual indicator shows where you tapped',
    ],
  },
  {
    number: '04',
    title: 'Ask Follow-Up Questions',
    subtitle: 'Natural conversation with context',
    icon: <MessageSquare className="w-10 h-10" />,
    color: 'from-orange-500 to-amber-400',
    description: 'Use the chat panel to ask any follow-up question. The AI remembers your entire conversation history and the image context, so you can have a natural, flowing dialogue.',
    details: [
      'Unlimited follow-up questions per session',
      'AI remembers the full conversation context',
      'Ask about specific details, comparisons, or explanations',
      'Responses are tailored to your chosen difficulty level',
    ],
  },
  {
    number: '05',
    title: 'Adjust Difficulty Level',
    subtitle: '5 levels from Novice to Expert',
    icon: <Gauge className="w-10 h-10" />,
    color: 'from-red-500 to-rose-400',
    description: 'Slide the difficulty level to control how technical the AI\'s explanations are. Novice uses everyday language and analogies. Expert dives into specifications and advanced concepts.',
    details: [
      'Novice — Simple, everyday language with analogies',
      'Beginner — Basic terms introduced gently',
      'Intermediate — Standard technical vocabulary',
      'Advanced — Deep technical detail with specs',
      'Expert — Professional-level with edge cases',
    ],
  },
  {
    number: '06',
    title: 'Explore What-If Scenarios',
    subtitle: 'Toggle What-If Mode',
    icon: <FlaskConical className="w-10 h-10" />,
    color: 'from-indigo-500 to-violet-400',
    description: 'Turn on What-If Mode and ask hypothetical questions. "What if this wire is cut?", "What happens if this overheats?", "What if we remove this component?" — and get detailed cause-and-effect analysis.',
    details: [
      'Toggle What-If Mode with one click',
      'Ask hypothetical "what if" scenarios',
      'Get cause-and-effect chain analysis',
      'Learn about failure modes and prevention',
    ],
  },
];

const techFlow = [
  { icon: <Image className="w-5 h-5" />, label: 'Your Image', sublabel: 'Upload' },
  { icon: <Monitor className="w-5 h-5" />, label: 'React Frontend', sublabel: 'Canvas + Chat' },
  { icon: <Server className="w-5 h-5" />, label: 'Express Backend', sublabel: 'API Processing' },
  { icon: <Brain className="w-5 h-5" />, label: 'Gemini AI', sublabel: 'Multimodal Analysis' },
  { icon: <Database className="w-5 h-5" />, label: 'Supabase', sublabel: 'Session Storage' },
];

const HowItWorksPage = ({ onBack }) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary-500 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to App
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-accent-400 animate-pulse" />
              <span className="text-accent-400 font-medium text-sm uppercase tracking-wider">Step by Step</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How <span className="gradient-text">Visualize.AI</span> Works
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              From uploading an image to mastering a concept — here's exactly what happens at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {steps.map((step, idx) => (
            <div key={idx} className="relative mb-8 last:mb-0">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-[39px] top-[90px] bottom-[-32px] w-px bg-gradient-to-b from-gray-600 to-gray-800" />
              )}

              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex md:flex-col items-center gap-4 md:gap-2">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <span className="text-gray-600 font-mono text-sm font-bold">STEP {step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-primary-400 text-sm font-medium mb-3">{step.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Under the Hood</h2>
            <p className="text-gray-400 text-lg">How data flows through the system</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techFlow.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="glass rounded-xl p-4 text-center min-w-[120px] hover:border-primary-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 mx-auto mb-2">
                    {item.icon}
                  </div>
                  <p className="text-white font-medium text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sublabel}</p>
                </div>
                {idx < techFlow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like Tips */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              <Zap className="w-7 h-7 inline-block text-accent-400 mr-2 -mt-1" />
              Tips for Best Results
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What images work best?', a: 'Clear, well-lit photos or high-resolution diagrams. Close-up shots of machinery, annotated schematics, anatomy diagrams, and circuit boards give the best results.' },
              { q: 'Can I change difficulty mid-session?', a: 'Yes! Adjust the slider anytime. Your next question or tap will use the new difficulty level while keeping the conversation context.' },
              { q: 'How does What-If Mode differ?', a: 'Normal mode explains what things ARE. What-If mode explores what WOULD HAPPEN — it analyzes hypothetical scenarios, failure modes, and cause-and-effect chains.' },
              { q: 'Is my image stored?', a: 'Images are kept only for the duration of your session in secure Supabase storage. No images are stored permanently or shared.' },
              { q: 'Can I use it on mobile?', a: 'Absolutely! The interface is fully responsive. You can take a photo with your phone camera and upload it directly.' },
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-xl p-5 hover:border-primary-500/30 transition-colors">
                <h4 className="text-white font-semibold mb-2">{item.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See It In Action</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The best way to understand is to try it yourself. Upload an image and explore.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25"
          >
            Try It Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Visualize.AI — Making visual learning accessible to everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorksPage;

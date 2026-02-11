import React from 'react';
import { 
  Brain, Eye, MessageSquare, Lightbulb, Layers, Gauge, 
  Zap, Target, BookOpen, Microscope, ArrowLeft, Sparkles,
  Image, MousePointerClick, FlaskConical, GraduationCap
} from 'lucide-react';

const features = [
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Image-Powered Learning',
    description: 'Upload any image — a car engine, a circuit board, a biological cell, a building blueprint — and instantly get an AI-powered breakdown of every visible component.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: 'Tap-to-Explore',
    description: 'Click or tap anywhere on your uploaded image and the AI will identify and explain the exact component at that position. It\'s like having a personal professor right on screen.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Conversational Follow-Ups',
    description: 'Ask unlimited follow-up questions in a smooth chat interface. The AI remembers context from your entire session, so the conversation flows naturally.',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'What-If Scenarios',
    description: 'Toggle "What-If Mode" and explore hypothetical questions. Ask "What if this wire was cut?" or "What happens if this part overheats?" and get detailed cause-and-effect analysis.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: '5-Level Difficulty Slider',
    description: 'Adjust explanations from Novice (everyday language) to Expert (deep technical detail). Perfect for students at any level, curious hobbyists, or seasoned professionals.',
    color: 'from-red-500 to-rose-400',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Adaptive Explanations',
    description: 'The AI tailors vocabulary, analogies, and depth to your chosen difficulty. A Novice sees simple analogies; an Expert gets specifications and edge cases.',
    color: 'from-indigo-500 to-violet-400',
  },
];

const useCases = [
  {
    title: 'Students & Learners',
    description: 'Struggling with a textbook diagram? Snap a photo and get instant, clear explanations at your level. Great for STEM subjects, anatomy, electronics, and more.',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: 'Engineers & Technicians',
    description: 'Quickly identify components in machinery, circuit boards, or architectural plans. Use What-If mode to analyze failure scenarios before they happen.',
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: 'Teachers & Educators',
    description: 'Bring visual aids to life in the classroom. Upload a diagram and walk students through it interactively — adjusting difficulty per audience.',
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Hobbyists & DIY Makers',
    description: 'Tinkering with an engine, fixing electronics, or learning about nature? Upload a photo and get guided explanations — no prior expertise needed.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Researchers & Scientists',
    description: 'Quickly decode complex images — microscope slides, geological samples, chemical structures. Explore at Expert level for deep technical insights.',
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: 'Curious Minds',
    description: 'Ever wondered how a jet engine works? Or what all those parts under the hood of your car do? Just snap, upload, and learn. Curiosity has never been this easy.',
    icon: <Eye className="w-6 h-6" />,
  },
];

const howItWorks = [
  { step: '1', title: 'Upload an Image', description: 'Drag and drop or select any image — a diagram, photo, schematic, or screenshot.' },
  { step: '2', title: 'AI Analyzes It', description: 'Google Gemini\'s multimodal AI identifies components, labels them, and explains the whole picture.' },
  { step: '3', title: 'Explore Interactively', description: 'Tap on specific parts to zoom into details. Ask follow-up questions in the chat.' },
  { step: '4', title: 'Go Deeper', description: 'Toggle What-If mode to explore hypotheticals, or adjust the difficulty slider to match your level.' },
];

const FeaturesPage = ({ onBack }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to App
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-14 h-14 text-primary-400" />
              <Sparkles className="w-6 h-6 text-accent-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Visualize.AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Understand How <span className="text-primary-400 font-semibold">Anything</span> Works — Just From an Image
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powered by Google Gemini's multimodal AI, Visualize.AI turns any image into an interactive learning experience. 
              Upload a photo, tap to explore, ask questions, and learn at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <Zap className="w-8 h-8 inline-block text-accent-400 mr-2 -mt-1" />
              Core Features
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to turn static images into deep understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-gray-400 text-lg">Four simple steps to learn anything visually.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-600">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Who Is This For?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Whether you're a student, engineer, teacher, or just curious — Visualize.AI adapts to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 hover:border-accent-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-400">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Built With</h2>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Google Gemini 2.5 Flash', desc: 'Multimodal AI' },
                { name: 'React 18', desc: 'Frontend UI' },
                { name: 'Tailwind CSS', desc: 'Styling' },
                { name: 'Node.js + Express', desc: 'Backend API' },
                { name: 'Supabase', desc: 'Session Storage' },
                { name: 'HTML Canvas', desc: 'Image Interaction' },
              ].map((tech, idx) => (
                <div key={idx} className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="text-white font-medium text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Upload an image and start learning. It's free, fast, and incredibly powerful.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25"
          >
            Start Learning Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Visualize.AI — Making visual learning accessible to everyone.</p>
          <p className="mt-1">Powered by Google Gemini Multimodal AI</p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;

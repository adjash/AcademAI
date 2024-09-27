import Head from "next/head";

export default function Home() {
  return (
    <div className="max-w-[1280px] w-[95vw] mx-auto p-6 mt-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          AcademAI – Your Personal AI Learning Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Master any subject with personalized study plans, real-time quizzes,
          and adaptive learning.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
          Get Started
        </button>
      </div>

      {/* Features Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Custom Learning Paths
            </h3>
            <p className="text-gray-700">
              Tailor your study plan to your goals and learning preferences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Bite-Sized Summaries
            </h3>
            <p className="text-gray-700">
              Get clear, concise explanations of complex topics, generated in
              real-time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Real-Time Quizzes
            </h3>
            <p className="text-gray-700">
              Test your knowledge with quizzes adapted to your learning
              progress.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Progress Tracking
            </h3>
            <p className="text-gray-700">
              Monitor your performance and see how you improve over time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Adaptive Learning Suggestions
            </h3>
            <p className="text-gray-700">
              Get personalized suggestions based on your learning behavior.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Study Anywhere, Anytime
            </h3>
            <p className="text-gray-700">
              Access your learning resources from any device, anywhere in the
              world.
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Free Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Free Plan
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Access basic features for free.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>✓ Custom Study Plans</li>
              <li>✓ Bite-Sized Summaries</li>
              <li>✕ Advanced Quizzes</li>
              <li>✕ Progress Tracking</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Sign Up for Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg border-2 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Pro Plan
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Unlock full access to all features.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>✓ Custom Study Plans</li>
              <li>✓ Bite-Sized Summaries</li>
              <li>✓ Real-Time Quizzes</li>
              <li>✓ Progress Tracking</li>
              <li>✓ Adaptive Learning Suggestions</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-white rounded-lg shadow-lg grid-rows-none">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Enterprise Plan
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              For organizations or teams.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>✓ All Pro Plan Features</li>
              <li>✓ Team Progress Tracking</li>
              <li>✓ Priority Support</li>
              <li>✓ Custom Integrations</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Question 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              What is AcademAI?
            </h3>
            <p className="text-gray-700">
              AcademAI is a personal AI-powered learning assistant designed to
              help students and professionals create personalized study plans,
              access real-time quizzes, and get adaptive learning suggestions
              based on progress.
            </p>
          </div>
          {/* Question 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Is there a free version?
            </h3>
            <p className="text-gray-700">
              Yes! AcademAI offers a free plan with basic features, including
              custom study plans and bite-sized summaries. You can upgrade to
              the Pro plan for advanced features like real-time quizzes and
              progress tracking.
            </p>
          </div>
          {/* Question 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              How do I upgrade to the Pro plan?
            </h3>
            <p className="text-gray-700">
              You can upgrade to the Pro plan by clicking the "Upgrade to Pro"
              button in the Pricing section and following the sign-up process.
              Payments are handled securely through our payment provider.
            </p>
          </div>
          {/* Question 4 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              What kind of quizzes does AcademAI offer?
            </h3>
            <p className="text-gray-700">
              AcademAI generates real-time quizzes based on your current
              learning progress. These quizzes are tailored to help you
              reinforce knowledge and identify areas where you may need
              improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

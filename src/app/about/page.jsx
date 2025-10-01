"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-8 py-16 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Project Description */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-center">
            About Open Source Component Library
          </h1>
          <p className="text-lg leading-relaxed text-center">
            This repository is an open-source <strong>Next.js + Tailwind CSS</strong> Component Library.
            It contains ready-to-use UI components like <strong>Buttons</strong> and <strong>Cards</strong>
            that you can plug into any project. Perfect for beginners to learn, practice, and contribute during Hacktoberfest 🎉.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Next.js 14 (App Router)</li>
            <li>Tailwind CSS for styling</li>
            <li>React for UI components</li>
            <li>Vercel for deployment</li>
          </ul>
        </section>

        {/* Contribution Guidelines */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contribution Guidelines</h2>
          <p className="mb-4">
            We welcome all contributions! Please follow these steps:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>Give this repo a star ⭐ (mandatory)</li>
            <li>Follow my GitHub account (mandatory)</li>
            <li>Fork this repository</li>
            <li>Create an Issue for the feature/bug you want to work on</li>
            <li>Commit your changes with a meaningful message</li>
            <li>Push your changes to your forked repo</li>
            <li>Create a Pull Request (PR)</li>
            <li>Wait for review and merge 🚀</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">How to Fork this Repository</h3>
          <p className="mb-4">
            On the top-right corner of this repo page, click Fork. Choose your GitHub account to fork the repo into.
            Then clone your forked repo: 
            <code className="bg-gray-100 px-1 rounded mx-1">git clone https://github.comGyanthakur/component-library.git</code>
          </p>

          <h3 className="text-2xl font-semibold mb-2">How to Create an Issue</h3>
          <p className="mb-4">
            Go to the Issues tab of this repository, click New Issue, choose a template (bug, enhancement, documentation, etc.), fill in the details, and submit.
          </p>

          <h3 className="text-2xl font-semibold mb-2">How to Raise a Pull Request (PR)</h3>
          <p className="mb-4">
            Push your code to your forked repository. Go to the Pull Requests tab of the main repository, click New Pull Request, select your branch from your forked repo, and submit the PR with a proper description of your changes.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Need Help? Contact Me!</h3>
          <p className="mb-4">
            If you have any query or confusion, you can WhatsApp me at <strong>+91 895-7818-597</strong> or click the WhatsApp button below:
          </p>
          <a
            href="https://wa.me/918957818597"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            WhatsApp
          </a>

          <p className="mt-6">
            Thank you to every contributor of this repository. Your efforts make this project better for everyone 💜
          </p>
          <p className="mt-2 font-semibold">🌟 Happy Contributing & Happy Hacktoberfest 2025 🎉</p>
        </section>
      </div>
    </div>
  );
}

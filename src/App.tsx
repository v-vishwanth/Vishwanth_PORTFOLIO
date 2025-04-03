import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Menu, X, Award, GraduationCap, Trophy, AlignCenterVertical as Certificate, Phone } from 'lucide-react';

function App() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('[data-scroll]').forEach((element) => {
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

const skills = [
  { name: 'React', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'Python', percentage: 70 },
];

const certifications = [
  {
    title: 'Data Analyst',
    issuer: 'Board Infinity',
    date: 'June 2024',
    link: '/dist/assets/boardinfinity_certificate.pdf'
  },
  {
    title: 'Programing Fundamentals in Kotlin',
    issuer: 'Meta', 
    date: 'Nov 2024',
    link: '/dist/assets/Coursera android.pdf'
  },
  {
    title: 'Data Scientist',
    issuer: 'LinkedIN Learning ',
    date: 'Feb 2023',
    link: '/dist/assets/LinkedIn Learning Certificate.pdf'
  }
];

const projects = [
  {
    title: 'IMDB Movie Rating Analysis',
    description: 'IMDB Movie Rating Analysis examines patterns and trends in movie ratings, helping to identify factors that influence audience and critic scores. 🎬📊',
    image: 'https://mediaindia.eu/wp-content/uploads/2022/09/png_20220925_215820_0000-e1664192564158-1200x896.png',
    github: 'https://github.com/v-vishwanth/IMDB-Movie-raing'
  },
  {
    title: 'Auto Capture Smile Detection',
    description: 'The Auto Capture Smile Detection project is a Python-based application that detects smiles in real-time using a webcam and automatically captures an image when a smile is detected. ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnNE4yTOe43SU0USvUeq2jWfhrjBGt5zrwg&s',
    github: 'https://github.com/v-vishwanth/Auto-Capture-Selfie-By-Detecting-Smile-using-python-'
  },
  {
    title: 'Atuomotive Sales Analysis',
    description: 'The Automotive Sales Analysis EDA project aims to analyze historical sales data of automobiles to uncover patterns, trends, and insights that can help businesses make data-driven decisions. ',
    image: 'data:image/jpeg;base64,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',
    github: 'https://github.com/v-vishwanth/EDA_project'
  },
];

const achievements = [
  {
    title: 'Top 10% in Code-A-Haunt Hackathon',
    description: 'Designed a EDA of Disease Prediction by our team.',
    year: '2025'
  },
  {
    title: 'Chess Player',
    description: '3rd Place in Chess Club organized by cluster sports',
    year: '2022'
  },
  {
    title: 'EDA Major Project',
    description: 'Established a IMDB Movie Rating System which tells the profit and loss reports and genre of the movie.',
    year: '2024'
  }
];

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Lovely Professional University',
    year: '2022-2026',
    grade: '7.4 CGPA'
  },
  {
    degree: 'Intermediate',
    field: 'MPC-State Board',
    institution: 'Alwings Educare Academy',
    year: '2020-2022',
    grade: '97 %'
  },
  {
    degree: 'Matriculation',
    field: 'CBSE',
    institution: 'Candor Shrine School',
    year: '2019-2020',
    grade: '84 %'
  }
];

const contactInfo = {
  email: 'vishwanthreddyvelidanda@gmail.com',
  phone: '+91 9392347822'
};

return (
  <div className="min-h-screen bg-gray-50">
    {/* Navigation */}
    <nav className="bg-white shadow-md fixed w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800">Portfolio</span>
      </div>
      
      {/* Mobile menu button */}
      <div className="flex items-center sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:flex sm:items-center sm:space-x-6">
        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
        <a href="#certifications" className="text-gray-600 hover:text-gray-900">Certifications</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#achievements" className="text-gray-600 hover:text-gray-900">Achievements</a>
        <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        {/* Resume Button */}
        <a
          href="/dist/assets/Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          My Resume
        </a>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="sm:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
        <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
        <a href="#certifications" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Certifications</a>
        <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#achievements" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Achievements</a>
        <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Education</a>
        <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
        {/* (Optional) You can also add the Resume link to the mobile menu if desired */}
      </div>
    </div>
  )}
</nav>

    {/* Hero Section */}
    <section id="about" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between" data-scroll>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Vishwanth Reddy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A passionate and aspiring Data Analyst skilled in Python, SQL, Excel, and Tableau. I worked on projects in D-Mart Sales Analysis, IMDB Movie Rating, and Automotive Sales Prediction, uncovering insights for data-driven decisions. I have certifications from Meta and Board Infinity, with expertise in data analysis, and visualization.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/v-vishwanth" className="text-gray-600 hover:text-gray-900" target='_blank'>
                <Github size={24} />
              </a>  
              <a href="https://www.linkedin.com/in/vishwanthreddy-8b61ab252/" className="text-gray-600 hover:text-gray-900" target='_blank'>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
              <img
                src="/dist/assets/DATASCIENCE.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" data-scroll>Skill-Set</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    
    {/* Programming Languages */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Programming Languages</h3>
      <div className="space-y-4">
        {[
          { name: "C", percentage: 80 },
          { name: "Java", percentage: 90 },
          { name: "Python", percentage: 95 },
          { name: "SQL", percentage: 83 },
        ].map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Frameworks & Libraries */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frameworks & Libraries</h3>
      <div className="space-y-4">
        {[
          { name: "HTML", percentage: 90 },
          { name: "CSS", percentage: 80 }
        ].map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Tools & Technologies */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Tools & Technologies</h3>
      <div className="space-y-4">
        {[
          { name: "PowerBI", percentage: 75 },
          { name: "Tableau", percentage: 95 },
        ].map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
</section>


    {/* Certifications Section */}
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
              <Certificate className="text-blue-600 mb-4" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 mb-4">{cert.date}</p>
              <a href={cert.link} className="text-blue-600 hover:text-blue-700 font-medium">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements Section */}
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
              <Trophy className="text-blue-600 mb-4" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-2">{achievement.description}</p>
              <span className="text-blue-600 font-medium">{achievement.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
              <div className="flex items-start">
                <GraduationCap className="text-blue-600 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.field}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500">{edu.year}</span>
                    <span className="text-blue-600 font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    {/* Contact Section */}
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Contact Me</h2>
        <div className="max-w-lg mx-auto" data-scroll>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Mail size={24} className="text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-600 font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Phone size={24} className="text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-blue-600 font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default App;
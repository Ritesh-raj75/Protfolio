import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="px-6 py-16 mt-40 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Description */}
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text">
            Ritesh-Raj
          </h2>

          {/* Connect Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-purple-200">
              Connect
            </h3>
            <div className="flex justify-center gap-6 md:gap-4 md:justify-start">
              <a
                className='p-2 text-gray-300 transition-colors bg-gray-800 rounded-full cursor-pointer hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400'
                href="https://github.com/Ritesh-raj75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub className='w-6 h-6 md:w-5 md:h-5' />
              </a>
              <a
                className='p-2 text-gray-300 transition-colors bg-gray-800 rounded-full cursor-pointer hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400'
                href="https://www.linkedin.com/in/ritesh-raj-18775a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin className='w-6 h-6 md:w-5 md:h-5' />
              </a>
              <a
                className='p-2 text-gray-300 transition-colors bg-gray-800 rounded-full cursor-pointer hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400'
                href="https://x.com/RiteshRaj431029"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FiTwitter className='w-6 h-6 md:w-5 md:h-5' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-700 md:flex-row'>
          <p className='text-sm text-gray-500'>
            © 2025 Ritesh-Raj. All rights reserved.
          </p>
          <div className='flex mt-4 space-x-6 md:mt-0'>
            <a className='text-sm text-gray-500 transition-colors cursor-pointer hover:text-white' href="#">
              Privacy Policy
            </a>
            <a className='text-sm text-gray-500 transition-colors cursor-pointer hover:text-white' href="#">
              Terms of Service
            </a>
            <a className='text-sm text-gray-500 transition-colors cursor-pointer hover:text-white' href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
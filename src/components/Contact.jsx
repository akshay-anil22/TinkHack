import React from 'react';

function Contact() {
  return (
    <div className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
        <p className="text-slate-300 mb-8">
          Have questions or want to get involved? Reach out to us!
        </p>
        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="mailto:contact@tinkhack.com" className="text-slate-300 hover:text-cyan-400 transition duration-300">
            contact@tinkhack.com
          </a>
        </div>

   
        <div className="flex justify-center items-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
         
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.04 2.113a8.885 8.885 0 00-3.35.056c-.95.044-1.448.2-1.844.363a2.78 2.78 0 00-1.002.73 2.78 2.78 0 00-.73 1.002c-.164.396-.32.895-.363 1.844-.043.966-.056 1.267-.056 3.35s.013 2.384.056 3.35c.043.95.2 1.448.363 1.844a2.78 2.78 0 00.73 1.002 2.78 2.78 0 001.002.73c.396.164.895.32 1.844.363.966.043 1.267.056 3.35.056s2.384-.013 3.35-.056c.95-.044 1.448-.2 1.844-.363a2.78 2.78 0 001.002-.73 2.78 2.78 0 00.73-1.002c.164-.396.32-.895.363-1.844.043-.966.056-1.267.056-3.35s-.013-2.384-.056-3.35c-.043-.95-.2-1.448-.363-1.844a2.78 2.78 0 00-.73-1.002 2.78 2.78 0 00-1.002-.73c-.396-.164-.895-.32-1.844-.363-.966-.043-1.267-.056-3.35-.056zM12 6.845a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31zm0 2.113a3.042 3.042 0 110 6.084 3.042 3.042 0 010-6.084zM16.845 6.1a1.238 1.238 0 100 2.476 1.238 1.238 0 000-2.476z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
     
      <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400">
        <p>© 2025 TinkerHub MEC. All rights reserved.</p>
        <p className="text-sm mt-2">Built with ❤️ for the community.</p>
      </div>
    </div>
  );
}

export default Contact;
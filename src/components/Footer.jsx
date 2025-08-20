import React from 'react'

const Footer = () => {
  return (
       <footer className="bg-zinc-900 text-zinc-100 border-t border-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-zinc-400 text-xl font-semibold mb-1 clash-display">DriveWell</h2>
          <p className="text-zinc-300 text-sm">Drive your dreams. Rent with confidence.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <a href="#" className="hover:text-zinc-400 transition">About</a>
          <a href="#" className="hover:text-zinc-400 transition">Contact</a>
          <a href="#" className="hover:text-zinc-400 transition">Privacy</a>
        </div>
      </div>
      <div className="mt-6 text-center text-zinc-400 text-xs">
        © {new Date().getFullYear()} CarRentApp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
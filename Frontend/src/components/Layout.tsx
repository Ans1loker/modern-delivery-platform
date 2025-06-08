import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed w-full bg-white border-b z-10 py-3 px-6 shadow">
        <span className="font-bold text-orange-600 text-xl">ПРЯМИКОМ</span>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="mt-12 py-6 text-center text-gray-400">© 2024 ПРЯМИКОМ</footer>
    </div>
  )
}

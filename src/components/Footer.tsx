'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10 flex flex-col items-center space-y-6">
      {/* Centered Logo */}
      <Image
        src="/dwdLogo_white.svg"
        alt="Darnell White Design Footer Logo "
        width={160}
        height={100}
        unoptimized
      />
    </footer>
  );
}

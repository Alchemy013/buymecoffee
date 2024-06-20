'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import "./globals.css";
import Link from "next/link";
import { signIn } from 'next-auth/react';

export default function Header() {
  return (
    <>
      <header className='mb-16'>
        <div className='flex justify-between max-w-xl mx-auto px-0 py-4'>
          <Link href={'/'} className='inline-flex gap-1 items-center'>
            <FontAwesomeIcon className="h-8" icon={faMugHot} />
            <span className='mt-2'>buy me a coffee</span>
          </Link>
          <nav className='mt-3 flex gap-4 items-center'>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <div className='flex gap-4'>
              <button
                onClick={() => signIn("google")} className='border-2 rounded-full px-4 py-2'>
                Login
              </button>
              <button className='bg-yellow-300 rounded-full px-4 py-2'>Sign Up</button>
            </div>
          </nav>
        </div>

      </header>

    </>
  );
} 

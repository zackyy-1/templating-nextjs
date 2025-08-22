// app/components/layout/Footer.tsx
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm text-gray-600">
              Copyright © {currentYear}
            </span>
            <Link 
              href="https://spruko.com" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nowa
            </Link>
            <span className="text-sm text-gray-600">
              by Spruko
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              Designed with
            </span>
            <div className="flex items-center">
              <Heart className="h-4 w-4 text-red-500 fill-current mx-1" />
              <span className="text-sm text-gray-600">by</span>
              <Link
                href="https://spruko.com"
                className="text-blue-600 hover:text-blue-800 font-medium ml-1 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spruko
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
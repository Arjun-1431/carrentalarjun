
import { Link } from "react-router-dom"
import "./cssfiles/Navbar.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const neviagte = useNavigate()

  const handleHome = () => {
    neviagte('/userhome')
  }
  const handleexplore = () => {
    neviagte('/explorecar')
  }
  const handlefeedback = () => {
    neviagte('/feedback')
  }

  const handlecontect = () => {
    neviagte('/contectus')
  }
  const handleuploadcar = () => {
    neviagte('/uploadcar')
  }
  useEffect(() => {

    const menu = document.getElementsByTagName("menu");
    const nav = document.getElementsByTagName("nav");

    const perform = (elem, type) => {
      menu[0].classList.add(type);
      // overlay(type, "ham");
    };

  })
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Your useEffect code here
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">





            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">

                  <a class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" onClick={handleHome}>Home</a>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleexplore}>Explore Car</a>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handlefeedback}>Feedback</a>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handlecontect}>Contect us</a>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleuploadcar}>Upload Car</a>

                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="sm:hidden" id="mobile-menu" style={{ marginTop: '-20%' }}>
          <div class="space-y-1 px-2 pb-3 pt-2">

            <a class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" onClick={handleHome}>Home</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleexplore}>Explore Car</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handlefeedback}>Feedback</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handlecontect}>Contect us</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleuploadcar}>Upload Car</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
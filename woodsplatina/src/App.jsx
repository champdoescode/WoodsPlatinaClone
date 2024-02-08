import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sliders } from './components/Sliders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-gray border-b-2 fixed w-full top-0 z-50">
        <nav className="bg-white shadow-lg">
            <div className="flex items-center justify-around nav-container">
              <div className="flex items-center">
                <img className="h-20" src="./images/logo.jpg" alt=""/>
              </div>
              <div className="flex item-center nav-links">
                <ul className="flex flex-row items-center">
                  <li className="p-4 "><a className="" href="">Overview</a></li>
                  <li className="p-4 "><a className="" href="">Gallary</a></li>
                  <li className="p-4 "><a className="" href="">Floor Plan</a></li>
                  <li className="p-4 "><a className="" href="">About</a></li>
                  <li className="p-4 flex items-center"> <img className="w-4 h-4" src="./images/call.png" alt="contact:-"/> <a className="hover:underline decoration-1" href="">+912241498607</a></li>
                </ul>
              </div>
              <div className="hidden p-2 menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-10 h-8 p-2 rounded menu-svg">
                  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="hidden bg-gray-500 text-white nav-mob-links">
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            <a className="hover:underline decoration-1" href="">About Us</a>
            </div>

            
        </nav>
      </div>

      <div className="w-full pt-20 template-img">
          <img className="w-screen home-img" src="./images/template.jpeg" alt="WoodsPlatina"/>
      </div>
      <div className="hidden mobile-temp">
        <img  src="./images/mobile-template.jpeg" alt="WoodsPlatina"/>
      </div>




      <div className="flex justify-center mt-16 ml-40 mr-40 h-fit intrduction-container">

        <div className="w-2/5 intro-img">
            <img className="rounded-3xl" src="./images/about1.jpg" alt=""/>
        </div>

        <div className="ml-8 mt-4 w-3/5 intro-text">
          <div className="m-0">
            <div className="m-0">Intdroducing</div>
            <div className="m-0">2 & 3 BHK</div>
          </div>
          <div className="mt-2">
            <div className="font-dayana">Ultra Luxury Lifespaces</div>
          </div>
          <div>
            <div className="text-lg">IN WALNUT & OAK @ WOODS PLATINA</div>
          </div>
          <div className="">
            <div className="mt-4">
              After the grand success of Maple & Ebony Towers, SMGK Group has to offer you Ultra Luxury lifespaces in Walnut & Oak Towers @ Woods Platina
            </div>
            <div className="mt-4">
              Curated with smart technology features and modern amenities, these thoughtfully designed residences make your life Simpler, Smarter and Efficient
            </div>
            <div className="mt-4">
              In a congested city like Mumbai only a privileged few get the opportunity to enjoy Nature and Luxury in one place
            </div>
            <div className="mt-4">
              So make the most out of it and get best of both the worlds only at - Woods Platina
            </div>
          </div>
          <div>
            <button className="p-2 text-md mt-6 text-white know-btn">Know More</button>
          </div>
        </div>

      </div>




      <div className="flex justify-center ml-40 mr-40 mt-20 h-fit intrduction-container">

        <div className="mt-4 w-3/5 mr-8 intro2-text">
          <div className="m-0 luxury-txt">
            <div className="m-0">Luxury</div>
            <div className="m-0 text-lg">A KING SIZE LIFE OF</div>
          </div>
          <div className="mt-2">
            <div className="font-dayana">Urban Indulgences</div>
          </div>
          <div>
            <div className="text-md">AT WOODS PLATINA, YOU HAVE AN EXCLUSIVE ROOFTOP GARDEN WITH A HOST OF AMENITIES FOR YOU TO SAVOUR THE HIGH LIFE</div>
          </div>

          <div className="flex mb-8">
            <div className="flex items-center w-3/5">
              <div><img src="./images/i1.jpg" alt=""/></div>
              <div>Exquisite Sky Garden</div>
            </div>
            <div className="flex items-center w-2/5">
              <div><img src="./images/i4.jpg" alt=""/>
              </div>
              <div>Jogging Track</div>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex items-center w-3/5">
              <div><img src="./images/i2.jpg" alt=""/></div>
              <div>Children's Play Area</div>
            </div>
            <div className="flex items-center w-2/5">
              <div><img src="./images/i5.jpg" alt=""/>
              </div>
              <div>Infinity Edge Pool</div>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex items-center w-3/5">
              <div><img src="./images/i3.jpg" alt=""/></div>
              <div>Sit-Out Areas</div>
            </div>
          </div>

          
        </div>
        <div className="w-2/5 intro-img relative">
            <img className="rounded-3xl" src="./images/ame.jpg" alt=""/>
            <div className="absolute top-0">
              <div className="bg-lime-950 rounded-lg text-white pl-2 pr-2 ml-4">Rooftop Amenities</div>
            </div>
        </div>
      </div>


      <div className="flex justify-center ml-40 mr-40 h-fit intrduction-container">
        
        <div className="w-2/5 intro-img relative">
            <img className="rounded-3xl" src="./images/capsule-lift.jpg" alt=""/>
            <div className="absolute top-0">
              <div className="bg-lime-950 rounded-lg text-white pl-2 pr-2 ml-4">Capsule Lift @ Walnut Tower</div>
            </div>
        </div>

        <div className="ml-8 mt-2 w-3/5 intro-text">
          <div className="mt-2">
            <div className="font-dayana">High Living</div>
          </div>
          <div>
            <div className="text-lg">A PREVIEW OF YOUR LIFESTYLE</div>
          </div>
          <div className="">
            <div className="mt-2">
              FEATURES
            </div>
            <div className="ml-8">
              <ol className="list-disc">
                <li>Two Fully Automatic High Speed Lifts</li>
                <li>Boom Barrier Systems at Entry / Exit Points</li>
                <li>An Integrated Fire Fighting System</li>
                <li>Vertical Garbage Shafts</li>
                <li>Sewerage Treatment Plant</li>
                <li>Generator Backup for Essential Services</li>
                <li>Automated Parking Tower</li>
              </ol>
            </div>
            <div className="mt-4">
              <div>Enhancing the breath-taking architectural aesthetics of Woods Platina is a 
                Capsule Lift in Walnut Tower with striking interiors and large glass viewing panels
                 overlooking the beautiful recreational spaces bound by the scenic skyline</div>
            </div>
          </div>
        </div>

      </div>
      <Sliders/>

      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl mt-16 mb-10">FLOOR PLAN</div>
        <div className="flex justify-center relative">
          <img className="w-9/12 blur-sm border-slate-600 border-2" src="./images/floor.jpg" alt=""/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="bg-black text-white rounded p-2">View Floor Plan</button>
          </div>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl mt-16 mb-10">LOCATION</div>
        <div>

            <div>The strategic location of Woods Platina is one of the main reasons why the project has immense scope for Value appreciation over time</div>
            <div>Considering the fact that your home will be worth substantially more a few years down the line, investing in Woods Platina is a great Idea ...</div>
        </div>
        <div className="w-4/5 flex justify-center items-center maps-container">
          <div className="">
            <img className="w-[33.75rem] h-[26.25rem] map-img" src="./images/map.jpg" alt=""/>
          </div>
          <div className="flex justify-center">
            <div>
            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.2631970796915!2d72.84034!3d19.139953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6300f4933dd%3A0x79a101ce99400e3c!2sSMGK%20Associate%20Woods%20Platina!5e0!3m2!1sen!2sin!4v1706803322411!5m2!1sen!2sin" width="580" height="400" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        
      </div>




      <div>
          <div>
            <div className=" p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 xl:grid-cols-4 bg-[#e7e8ea]">
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l1.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">2 MINUTE</div>
                    <div>Walk From The Nearest Metro Station </div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l2.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">8 MINUTE</div>
                    <div>Away From Lokhandwala Complex</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l3.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">10 MINUTE</div>
                    <div>Walk From The Nearest Railway Station</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l4.jpg" alt="air"/></div>
                  <div className="pl-4 bg-[#e7e8ea]">
                    <div className="text-lg">4 MINUTE</div>
                    <div>Drive To Link Road</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l5.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">5 MINUTE</div>
                    <div>Drive To Western Express Highway</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l6.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">2 MINUTE</div>
                    <div>Walk from 12.5 Acres Veera Desai Sports Complex</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l7.jpg" alt="air"/></div>
                  <div className="pl-4">
                    <div className="text-lg">20 MINUTE</div>
                    <div>Drive To Domestic And International Airports</div>
                  </div>
              </div>
              <div className="flex items-center w-full rounded aspect-auto mt-6 hover:cursor-pointer bg-[#e7e8ea]"> 
                  <div><img src="./images/l8.jpg" alt="air"/></div>
                  <div className="pl-4 bg-[#e7e8ea]">
                    <div className="text-lg">15 MINUTE</div>
                    <div>Drive to Kokila Ben Dhirubhai Ambani Hospital</div>
                  </div>
              </div>
              
            </div>
          </div>
          <div className="flex items-center justify-center flex-col bg-[#e7e8ea] p-10">
            <div>Site Address :</div>
            <div className="text-center">Sales Experience Centre - Woods Platina, New JVLR Extension Road, Near Evershine Embassy,</div>
            <div>Oshivara, Mmumbai - 400 102</div>
          </div>
        </div>



        <div className="bg-[#153a21] flex items-center justify-center">
          <div className="w-4/5 text-white">
              <div className="font-bold text-center text-3xl mt-16 mb-10">ABOUT DEVELOPER</div>
              <div className="flex items-center"> <img className="w-20 items-center" src="./images/woodslogo.png" alt="logo"/></div>
              <div className="text-center m-2">Our mission towards contributing to a better world began in the year 2000, when SMGK Group 
                was conceived by our Founder Chairman and Group President, Mr. Mohammad Ali Momin
              </div>
              <div className="text-center m-2">With over four decades of industry experience and above all, a strong Conscience, Mr.Momin
                 strongly defined the Ethos of the Group - to be agents of Social change
              </div>
              <div className="text-center m-2">What's more, we have set benchmarks in the Indian Real Estate Industry by employing the best 
                Environmental practices and ensuring use of Smart
              </div>
              <div className="text-center text-xl m-8">Above all, we have Built with Conscience - a Legacy of Trust, Quality and Social Responsibility
              </div>
              <div className="text-center flex justify-evenly m-12 about-us">
                <div className="m-2">
                  <div className="text-2xl">1+ MILLION</div>
                  <div className="text-sm">Sq Ft Of Development</div>
                </div>
                <div className="m-2">
                  <div className="text-2xl">4+ DECADES</div>
                  <div className="text-sm">Of Legacy</div>
                </div>
                <div className="m-2">
                  <div className="text-2xl">1000+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
              <div className="text-center text-sm m-4">MahaRERA Registration Number WALNUT : P51800048890 | OAK : P51800049102 | Ebony : P51800009546 and is available on 
                the website https://maharera.mahaonline.gov.in.
              </div>
              <div className="flex justify-evenly mb-12 qr-container">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img className="" src="./images/walnut.jpg" alt="walnut"/>
                  </div>
                  <div>WALNUT : P51800048890</div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img className="" src="./images/oak.jpg" alt="oak"/>
                  </div>
                  <div>OAK : P51800049102</div>
                </div>
              </div>  
          </div>
        </div>


      <div className="flex justify-center flex-col items-center">
        <div className="w-4/5 flex justify-center flex-col items-center">
          <div><img className="w-32 mt-6 mb-6" src="./images/partners.png" alt="Partners"/></div>
          <div className="mb-16">Anarock Property Consultants Private Limited, MAHARERA registration no. A51900000108.</div>
        </div>
      </div>


      <div className="shadow-lg border-2">
        <div className="flex justify-evenly">
          <div>ENQUIRE NOW</div>
          
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Name"/>
          
          <div>
            <button className="px-6 rounded py-2 text-md text-white know-btn">SUBMIT</button>
          </div>
        </div>
      </div>








    </>
  )
}

export default App

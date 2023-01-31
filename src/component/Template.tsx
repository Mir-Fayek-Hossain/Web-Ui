import banner from "../assets/banner.png"
import client from "../assets/client.png"
function Template() {
  return (
    <div className="">
      <div className=" h-[100vh] bg-black relative">
        <div className="">
          <button className="h-fit m-8 text-base bg-[#d0ff71] py-2 px-7 rounded-r-full rounded-l-full fixed">
            MENU
          </button>
          <div className=" h-fit float-right text-white mr-36">
            <p className="text-[170px]  ">Rigorously</p>
            <div className="flex justify-between h-fit leading-3 ">
              <p className="text-[170px]  ">creative</p>
              <p className=" text-base self-center tracking-wider ">
                TOGETHER <br />
                WE ARE CARTIER
                <div className="border-0 border-b border-[#d0ff71] w-[60px]"></div>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/5 m-8 text-white ">
          <p className="mb-6 tracking-wide">IDEAS THA TRANSFORM</p>
          <p className="tracking-wide">
            We create inventive and long-lasting solutions based on a creative
            and collaborative equation. Welcome to Cartie
          </p>
          <p className="text-[88px] font-sans tracking-tight">CARTIER</p>
        </div>
        <div className="absolute bottom-0 right-0 m-8">
          <button className="bg-[#d0ff71] p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-5 py-5 bg-white w-full ">
        <div className="col-span-2 relative  ">
          <button className="h-fit m-8 text-base bg-[#d0ff71] py-2 px-7 rounded-r-full rounded-l-full absolute right-3 top-8">
            See all
          </button>
          <p className="text-8xl text-center  font-normal my-20">Projects</p>
        </div>
        <p className="text-[17px] tracking-wide w-2/5 leading-5 my-4 pl-6">
          At CARTIER, we know that the only way we can succeed is by having our
          clients succeed. And we have understood for a long time that, to
          ensure this success, we have to do things differently.
        </p>
        <p className="text-5xl my-5 pr-6">
          Rethinking our world and yours every day. We don’t take any half
          measures.
        </p>
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className="object-cover w-full "
            src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              maiores, adipisci laudantium totam tempore vero quas explicabo
              quaerat earum eos aut ex doloribus sapiente laborum, sint
              praesentium. Tempora, odit neque!
            </p>
          </div>
        </div>
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className=" object-cover w-full"
            src="https://img.freepik.com/free-photo/beautiful-shot-people-standing-near-waterfall-with-rainbow-side-skogafoss-iceland_181624-27696.jpg?w=996&t=st=1675079248~exp=1675079848~hmac=1e9a5a32c29a5b5dfb6686c2ecdde41e19df5e06cd61bcebdf70f90a704b4a7b"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam consequatur vitae
            </p>
          </div>
        </div>
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className="object-cover w-full "
            src="https://t4.ftcdn.net/jpg/05/25/08/09/360_F_525080936_JEpnKXh2siYKBPpsqd98pbbcIzy4ySKz.jpg"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              How to Reiasfasflkj a commitment to french
            </p>
          </div>
        </div>
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className=" object-cover w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL6H_Vbwt7Pl2bBiLT1TP-VJopLEZ0FiDGwlE8cvHuUwegCeEgpGe8ksSrkWNl1zYgQs&usqp=CAU"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              How to Reiasfasflkj a commitment to french
            </p>
          </div>
        </div>{" "}
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className="object-cover w-full "
            src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              How to Reiasfasflkj a commitment to frenchasf asfda sfasfasfa
            </p>
          </div>
        </div>
        <div className="group w-full h-full" id="parent_image_container">
          <img
            id="child_image"
            className=" object-cover w-full"
            src="https://img.freepik.com/free-photo/beautiful-shot-people-standing-near-waterfall-with-rainbow-side-skogafoss-iceland_181624-27696.jpg?w=996&t=st=1675079248~exp=1675079848~hmac=1e9a5a32c29a5b5dfb6686c2ecdde41e19df5e06cd61bcebdf70f90a704b4a7b"
            alt=""
          />
          <div className="p-4">
            <p>Ministere de la Justice</p>
            <div className="p-0 flex items-center h-20">
              <button className="transition delay-100 duration-300 ease-in-out mr-4 h-fit text-base bg-[#d0ff71] py-1 px-7 rounded-r-full rounded-l-full hidden group-hover:block  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <p className="text-3xl">Ma Langue, Unae fier qure wesad lk</p>
            </div>
            <p className=" text-gray-400 w-2/4">
              How to Reiasfasflkj a commitment to french asda asdasda fasflkj a
              commitment to french asda asdasda sd How to Reiasfasflkj a
              commitment to french asda asdasda sd
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-10 bg-[#d8d7cb] mt-24 p-10">
        <div className="mt-5  flex flex-col justify-between h-full">
          <p className="text-8xl">Expertises</p>
          <p className="text-xl w-5/12 text-[#242523] leading-5">
            Understanding the target down to the smallest details and the
            context as a whole. Understanding the latest trends, without
            forgetting those that are well established. Understanding what
            forges a culture, along with what informs behaviours. To be able to
            offer impactful solutions to our clients, we develop a precise and
            methodical understanding of their universe and their communities.
          </p>
        </div>
        <ol className="text-6xl  mt-5 h-full">
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            1. Strategy
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            2. Advertising
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            3. Media
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            4. Data and technologies
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            5. Content and social media
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            6. Design and branding
          </li>
          <li className="transition ease-in-out delay-100 duration-300 text-[#bfbda8] hover:text-black hover:translate-x-5	 cursor-pointer ">
            7. Production
          </li>
        </ol>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://www.kpoppost.com/wp-content/uploads/2020/03/Cover-Blackpink-Lisa.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src="https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 h-[90vh] max-h-[900px] py-20">
        <div>
          <img
            className="h-full object-cover"
            src="https://agencecartier.com/wp-content/uploads/2022/07/CARTIER_AGENCE_01-768x803.jpg"
            alt=""
          />
        </div>
        <div className="text-8xl col-span-2 flex flex-col justify-between">
          <div>
            <p className=" flex ">
              <img
                className="w-[13%] mr-4 self-center"
                src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png"
                alt=""
              />
              <p className="self-center">Cartier Life </p>
            </p>
            <p className="text-[#D8D7CB]">Agency</p>
          </div>
          <div className="w-3/4  h-fit leading-[0px]">
            <p className="text-4xl ">
              Come and experience life at Cartier – Connect with a tightly-knit
              community of creatives who are passionate about ideas that
              transform.
            </p>
            <button className=" text-base bg-[#d0ff71] py-2 px-6 rounded-r-full rounded-l-full">
              Find out about our job openings
            </button>
          </div>
        </div>
        <div className=" flex  justify-end">
          <img
            className="self-center max-w-[250px] max-h-[250px]"
            src="https://agencecartier.com/wp-content/uploads/2022/08/CARTIER_P6060007-576x576.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className=" absolute w-[500px] z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className=" w-full object-cover" src={client} alt="" />
        </div>
        <div className=" grid grid-cols-3 px-10 bg-[#D0FF71] absolute bottom-0 h-[300px]">
          <div className=" flex flex-col justify-center">
            <p className="text-lg">
              Latest trends, inspiring ideas, innovation and technologies.
            </p>
            <p className="text-5xl">This is not your Dad’s newsletter.</p>
          </div>
          <div></div>
          <div className="   flex flex-col justify-center text-lg">
            <input
              className="bg-transparent border-0 border-b-2 border-black w-full p-3"
              type="text"
              name=""
              placeholder="Your email address"
              id=""
            />
            <button className="self-start my-4  text-slate-600">Sign up</button>
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <img src={banner} alt="" />
        <div className="grid grid-cols-8 gap-5 text-white p-6">
          <div>
            <p>
              Mahfuza tower, 36/37 Probal Housing
              <br />
              Ring Road, Dhaka -1207
            </p>
            <br />
            <br />
            <p>Credits</p>
          </div>
          <div>
            <p>hello@bzmgraphics.com</p>
            <p>+88 02 55020348</p>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2 grid grid-cols-3">
            <ul>
              <li>Projects</li>
              <li>Experties</li>
              <li>Cartier Lite</li>
            </ul>
            <ul>
              <li>Agency</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>Blog</li>
              <li>Francias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template

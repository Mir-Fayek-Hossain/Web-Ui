import banner from "../assets/banner.png"
function Template() {
  return (
    <div className="">
      <div className=" h-[100vh] bg-black relative">
        <div className="flex justify-between">
          <button className="h-fit m-4 text-xl bg-[#d0ff71] py-2 px-4 rounded-r-full rounded-l-full">
            MENU
          </button>
          <div className=" h-fit float-right text-white">
            <p className="text-[140px] font-semibold ">Rigorously</p>
            <div className="flex justify-between h-fit">
              <p className="text-[140px] font-semibold ">creative</p>
              <p className=" text-xl self-center mt-8">
                TOGETHER <br />
                WE ARE CARTIER
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/5 m-8 text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur a in accu
          </p>
          <p className="text-8xl">CARTIER</p>
        </div>
        <div className="absolute bottom-0 right-0 m-8">
          <button className="bg-[#d0ff71] p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
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
      <div className="grid grid-cols-2 gap-5 px-5 bg-white w-full ">
        <p className="text-8xl text-center col-span-2 font-normal my-20">
          Projects
        </p>
        <div>
          <p className="text-2xl w-2/6 my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <p className="text-6xl my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://img.freepik.com/free-photo/beautiful-shot-people-standing-near-waterfall-with-rainbow-side-skogafoss-iceland_181624-27696.jpg?w=996&t=st=1675079248~exp=1675079848~hmac=1e9a5a32c29a5b5dfb6686c2ecdde41e19df5e06cd61bcebdf70f90a704b4a7b"
            alt=""
          />
        </div>
        <div>
          <p className="text-6xl my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://t4.ftcdn.net/jpg/05/25/08/09/360_F_525080936_JEpnKXh2siYKBPpsqd98pbbcIzy4ySKz.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl w-2/6 my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL6H_Vbwt7Pl2bBiLT1TP-VJopLEZ0FiDGwlE8cvHuUwegCeEgpGe8ksSrkWNl1zYgQs&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl w-2/6 my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <p className="text-6xl my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://img.freepik.com/free-photo/beautiful-shot-people-standing-near-waterfall-with-rainbow-side-skogafoss-iceland_181624-27696.jpg?w=996&t=st=1675079248~exp=1675079848~hmac=1e9a5a32c29a5b5dfb6686c2ecdde41e19df5e06cd61bcebdf70f90a704b4a7b"
            alt=""
          />
        </div>
        <div>
          <p className="text-6xl my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://t4.ftcdn.net/jpg/05/25/08/09/360_F_525080936_JEpnKXh2siYKBPpsqd98pbbcIzy4ySKz.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl w-2/6 my-5">
            Rethinking our world and yours every day. We don’t take any half
            measures.
          </p>
          <img
            className="object-cover w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL6H_Vbwt7Pl2bBiLT1TP-VJopLEZ0FiDGwlE8cvHuUwegCeEgpGe8ksSrkWNl1zYgQs&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 gap-y-10 bg-[#d8d7cb] mt-24 p-10">
        <div className="mt-5  flex flex-col justify-between h-full">
          <p className="text-8xl">Expertises</p>
          <p className="text-xl w-5/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aut
            minima, autem hic repellat fuga similique facilis optio voluptatibus
            molestiae corrupti ea aspernatur maxime expedita quae debitis
            deserunt aliquam inventore?fuga similique facilis optio voluptatibus
            molestiae corrupti ea aspernatur.
          </p>
        </div>
        <ol className="text-6xl font-semibold mt-5 h-full">
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            1. Strategy
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            2. Advertising
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            3. Media
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            4. Data and technologies
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            5. Content and social media
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
            6. Design and branding
          </li>
          <li className="text-[#bfbda8] hover:text-black hover:mr-2 cursor-pointer">
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
            <button className=" text-xl bg-[#d0ff71] py-2 px-4 rounded-r-full rounded-l-full">
              Find out about our job
            </button>
          </div>
        </div>
        <div className=" flex">
          <img
            className="self-center"
            src="https://agencecartier.com/wp-content/uploads/2022/08/CARTIER_P6060007-576x576.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className=" absolute w-[300px] z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className=" w-full object-cover"
            src="https://www.freepnglogos.com/uploads/teacher-png/teacher-job-vacancies-gheras-34.png"
            alt=""
          />
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

export default function App() {
  return (
    <div className="flex min-h-screen items-center bg-[#D5E1EF] py-8">
      <div className="mx-auto w-full max-w-80 rounded-2xl bg-white">
        <div className="p-4">
          <img
            src="images/image-qr-code.png"
            alt=""
            className="block w-full rounded-2xl"
          />
        </div>
        <h1 className="px-4 pt-2 pb-4 text-center text-[22px] leading-[120%] font-bold tracking-normal text-[#1F314F]">
          Improve your front-end skills by building projects
        </h1>
        <p className="px-4 pb-8 text-center text-[15px] leading-[140%] tracking-[0.2px] text-[#68778D]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

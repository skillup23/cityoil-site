import logoG from "@/public/main/logo-g.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[100vh] m-auto flex flex-col items-center justify-center gap-6">
      <Image
        src={logoG}
        width="auto"
        height="auto"
        alt="logo"
        className="w-[253px]"
      />
      <h2 className="text-white text-center">Сайт находится в разработке</h2>
    </div>
  );
}

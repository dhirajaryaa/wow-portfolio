import { profileInfo } from "../../config/about";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center border-t mb-16">
      <nav className="flex items-center justify-center px-4 w-full mb-8">
        <SocialLinks
          socialLinks={profileInfo.socialLinks}
          className={"items-center justify-center"}
        />
      </nav>
      <p className="text-muted-foreground text-sm">
        &copy;{" "}
        {(new Date().getUTCFullYear() !== 2025 ? "2025 - " : "") +
          new Date().getFullYear()}{" "}
        All rights reserved.
      </p>
      <div className="text-muted-foreground/20 font-extrabold text-6xl sm:text-[8rem] md:text-[10rem] w-fit select-none pointer-events-none">
        Portfolio
      </div>

      <p className="text-muted-foreground text-sm">
        Crafted with <span className="font-semibold">❤️</span> by{" "}
        <a
          href="https://github.com/dhirajaryaa"
          className="underline cursor-pointer"
        >
          Dhiraj Arya
        </a>
      </p>
    </div>
  );
}

export default Footer;

import Container from "./Container";
import GhostText from "./GhostText";

function Footer() {
  return (
    <footer className="relative z-10">
      <Container className="h-full items-center justify-center bg-white py-10 md:py-16">
        <div className="via-primary h-px w-full origin-center rounded-full bg-linear-to-r from-transparent to-transparent mask-x-from-1 blur-[0.4px]" />

        <p className="text-secondary mt-6 py-6 text-sm">
          &copy; 2025
          {new Date().getFullYear() > 2025 &&
            ` - ${new Date().getFullYear()}`}{" "}
          All rights reserved.
        </p>

        <GhostText />

        <p className="text-secondary pt-6 text-sm">
          Crafted with <span className="font-semibold">❤️</span> by{" "}
          <a
            href="https://github.com/dhirajaryaa"
            className="hover:text-primary cursor-pointer underline transition-colors duration-300"
          >
            Dhiraj Arya
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

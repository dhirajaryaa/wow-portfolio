export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-[60vh] bg-background text-foreground">
      <div className="flex flex-col items-center space-y-4 justify-center">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold animate-bounce">
          404
        </h1>
        <h2 className="text-2xl text-foreground/90 sm:text-3xl md:text-5xl font-semibold">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm w-full sm:w-2/3 text-center">
          Sorry, the page you are looking for could not be found. Check the URL
          for any typographical errors or try searching for the page you are
          looking for.
        </p>
      </div>
    </section>
  );
}

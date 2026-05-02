import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-6 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Dhiraj Arya.
        </h1>
        <p className="text-secondary pt-4 text-sm font-normal md:text-base">
          A portfolio website showcasing the projects and skills of Dhiraj Arya,
          a software developer specializing in web development and design.
        </p>
      </Container>
    </main>
  );
}

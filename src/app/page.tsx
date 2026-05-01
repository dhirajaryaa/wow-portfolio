import Container from "@/components/Container";

export default function Home() {
  return (
      <Container className="min-h-[400vh] p-4 md:p-8">
    <main className="mt-16">
        <h1 className="text-primary text-2xl font-bold tracking-tighter md:text-4xl">
          Dhiraj Arya.
        </h1>
        <p className="text-secondary pt-4 text-sm font-normal md:text-base">
          A portfolio website showcasing the projects and skills of Dhiraj Arya,
          a software developer specializing in web development and design.
        </p>
    </main>
      </Container>
  );
}

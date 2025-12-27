

function DevMessage({message}) {
    return (
        <section className="flex flex-col items-center justify-center h-[60vh] bg-background text-foreground">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold animate-bounce">
                    {message}
                </h1>
                <h2 className="text-2xl sm:text-5xl font-bold">
                    Under Development 🚧
                </h2>

                <p className="text-muted-foreground text-xs sm:text-sm max-w-xl">
                    This section is currently being built. I’m actively working on it and it will be available soon.
                    Thanks for your patience.
                </p>
            </div>
        </section>
    )
}

export default DevMessage

import { myGadgets, myPc, myWebExtensions } from '@/config/gears'
import Section from './section'

function page() {
    return (
        <main className="w-full h-full p-4">
            {/* heading  */}
            <div className='w-full text-center py-16 border-b'>
                <h1 className='text-4xl sm:text-5xl font-semibold'>Gears</h1>
                <p className='text-muted-foreground text-sm sm:text-lg'>The tools and tech that help me bring my ideas to life.</p>
            </div>
            <div className="w-full py-8">
                {/* pc section  */}
                <Section title='PC' gears={myPc} />
                {/* Gadgets section  */}
                <Section title='Gadgets' gears={myGadgets} />
                {/* web Extension section  */}
                <Section title='Web Extensions' gears={myWebExtensions} />

            </div>
        </main>
    )
}

export default page
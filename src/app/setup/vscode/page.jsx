import { Badge } from '@/components/ui/badge'
import { Download } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <main className="w-full h-full p-4">
            {/* heading  */}
            <section className='w-full text-center py-16 border-b'>
                <h1 className='text-4xl sm:text-5xl font-semibold'>Code Setup</h1>
                <p className='text-muted-foreground text-sm sm:text-lg'>How I craft the perfect VS Code environment — from modular extensions to mindful font choices.</p>
            </section>
            <section className="w-full py-8">
                {/* step  */}
                <div className='flex gap-4 items-center flex-col sm:flex-row'>
                    {/* step header  */}
                    <div className={'text-base border px-2 py-1 bg-muted rounded-lg text-muted-foreground'}>Step 1</div>
                    <div className='flex gap-4 items-center'>
                        <div className={'rounded-lg bg-muted p-2 border text-muted-foreground shrink-0'}>
                            <Download className='size-4' />
                        </div>
                        <h2 className='text-xl font-semibold my-4'>Download Config Files & Fonts</h2>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default page
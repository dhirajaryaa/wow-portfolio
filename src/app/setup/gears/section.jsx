import { Button } from '@/components/ui/button'

function Section({title,gears}) {
  return <div className='space-y-4 mt-8'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        {gears.map((item, idx) => (
            <div key={idx} className='flex items-center gap-2 text-muted-foreground'>
                <Button type='button' className={'size-7'} variant={'outline'} size={'icon-sm'}>
                    <item.icon />
                </Button>
                <p className='text-base'>{item.name}</p>
            </div>
        ))}
    </div>
}

export default Section
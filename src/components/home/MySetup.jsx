import Section from '@/components/common/Section'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import Link from 'next/link'
import { Settings, ArrowRight, Code2 } from 'lucide-react'

function MySetup() {
    return (
        <Section
            title="Essentials"
            hintText="Everything behind my work 🔥"
            className={'mt-18'}
        >

            <div className="space-y-4 mt-6">
                {/* gears  */}
                <Item variant="muted" className={'rounded-xl'} asChild>
                    <Link href="/setup/gears">
                        <ItemMedia variant="icon">
                            <Settings />
                        </ItemMedia>
                        <ItemContent className={'gap-0'}>
                            <ItemTitle>Gear used</ItemTitle>
                            <ItemDescription className={'text-xs'}>Gears I use to stay productive.</ItemDescription>
                        </ItemContent>
                        <ItemActions >
                            <ArrowRight size={16} />
                        </ItemActions>
                    </Link>
                </Item>
            </div>
        </Section>
    )
}

export default MySetup

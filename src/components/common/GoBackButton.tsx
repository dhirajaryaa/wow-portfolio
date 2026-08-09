"use client"
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

function GoBackButton() {
    const router = useRouter();
    return (
        <Button
            size="sm"
            onClick={() => router.back()}
            variant="ghost"
            className="h-7 text-xs text-muted-foreground/50 hover:text-foreground/80 transition-colors mb-4"
        >
            <ArrowLeft className="size-3" /> Go Back
        </Button>

    )
}

export default GoBackButton

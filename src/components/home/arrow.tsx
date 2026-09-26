import type { SVGProps } from "react"

type CurvedArrowProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
    color?: string
    strokeWidth?: number
    dashed?: boolean
    dashArray?: string
    width?: number | string
    height?: number | string
}

export function CurvedArrow({
    color = "currentColor",
    strokeWidth = 1.5,
    dashed = false,
    dashArray = "5 5",
    width = 90,
    height = 56,
    className,
    ...props
}: CurvedArrowProps) {
    return (
        <svg
            viewBox="0 0 90 56"
            width={width}
            height={height}
            aria-hidden="true"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={dashed ? dashArray : undefined}
            className={`pointer-events-none ${className ?? ""}`}
            {...props}
        >
            <path d="M4 9c18-6 30 5 25 17-4 10-19 10-17 0 2-11 22-8 36 2 8 6 16 10 26 11" />

            <path d="M74 32c2 3 4 5 8 7-4 2-6 4-8 8" />
        </svg>
    )
}
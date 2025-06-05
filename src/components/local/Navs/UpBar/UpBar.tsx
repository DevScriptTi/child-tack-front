export default function UpBar({ children }: { children: React.ReactNode }) {
    return (
        <header
            className="sticky z-10 md:p-2 lg:p-4 flex items-center h-header "
        >
            {children}
        </header>
    )
}


export function UpBarGroup({ children, grow }: { children: React.ReactNode, grow?: boolean }) {
    return (
        <nav className={grow ? "grow" : ""}>
            <ul className="flex items-center">
                {children}
            </ul>
        </nav>

    )
}




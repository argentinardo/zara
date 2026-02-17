import { MouseEventHandler, ReactNode } from "react"

interface MainButtonProps {
    light?: boolean
    full?: boolean
    action: MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
}

const MainButton = ({ light, full, action, children }: MainButtonProps) => {
    return (
        <button
            type="button"
            onClick={action}
            className={
                `button${light ? ' button--light' : ''}${full ? ' button--full' : ''}`
            }
        >
            {children}
        </button>
    )
}
export default MainButton
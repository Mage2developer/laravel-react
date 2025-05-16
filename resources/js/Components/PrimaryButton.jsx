export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-[#ff3131] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-[#880000] focus:bg-[#880000] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-[#880000] ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

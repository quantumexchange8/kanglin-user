export default function InputLabel({
    value,
    className = "",
    children,
    hasError,
    isDisabled=true,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `self-strech text-sm font-normal ${
                    isDisabled
                        ? "text-gray-300"
                        : hasError
                        ? "text-red-600"
                        : "text-gray-950"
                }` + className
            }
        >
            {value ? value : children}
        </label>
    );
}

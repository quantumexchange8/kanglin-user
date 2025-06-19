export default function InputError({
    message,
    hasError,
    className = "",
    ...props
}) {
    return message ? (
        <p
            {...props}
            className={
                `${hasError ? "text-red-600" : "text-gray-400"} text-xs ' ` +
                className
            }
        >
            {`${hasError ? "This is error message" : message}`}
        </p>
    ) : null;
}

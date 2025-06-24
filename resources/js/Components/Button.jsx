import React from "react";

export default ({
    type = "submit",
    className = "",
    processing,
    children,
    variant = "primary",
    size = "base",
    iconOnly,
    srText,
    onClick,
    disabled,
}) => {
    const baseClasses = `inline-flex items-center justify-center transition-colors gap-2.5 font-bold text-center select-none disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none rounded-[5px]`;

    let variantClasses = ``;

    switch (variant) {
        case "secondary":
            variantClasses = `bg-indigo-100 text-indigo-900 font-medium hover:bg-indigo-200 disabled:bg-indigo-100`;
            break;
        case "tertiary":
            variantClasses = `border-2 border-[#53198580] border-solid text-indigo-900 font-medium hover:text-indigo-50 hover:bg-indigo-900`;
            break;
        case "neutral":
            variantClasses = `text-gray-50 bg-gray-900 font-medium hover:bg-gray-950`;
            break;
        case "gray":
            variantClasses = `text-gray-900 bg-gray-100 font-medium hover:bg-gray-200`;
            break;
        case "outlined":
            variantClasses = `border-2 border-[#474F5D80] border-solid text-gray-900 font-medium hover:text-gray-50 hover:bg-gray-900`;
            break;

        case "error":
            variantClasses = `border-1 border-[#ED153980] border-solid text-red-50 bg-red-600 font-medium hover:bg-red-800 disabled:border-none`;
            break;

        case "error-sec":
            variantClasses = `text-red-800 bg-red-50 font-medium hover:bg-red-200 hover:text-red-600 disabled:text-red-600`;
            break;

        case "error-outlined":
            variantClasses = `border-2 border-[#ED153980] border-solid text-red-600 font-medium hover:text-red-50 hover:bg-red-600 `;
            break;

        case "success":
            variantClasses = `border-1 border-[#21984D80] border-solid text-green-50 bg-green-600 font-medium hover:bg-green-800`;
            break;

        case "success-sec":
            variantClasses = `text-green-800 bg-green-50 font-medium hover:text-green-600 hover:bg-green-200 disabled:text-green-600`;
            break;

        case "success-outlined":
            variantClasses = `border-2 border-[#21984D80] border-solid text-green-600 font-medium hover:text-green-50 hover:bg-green-600 `;
            break;

        case "gradient":
            variantClasses = `text-indigo-50 bg-linear font-medium hover:bg-linear-dark`;
            break;

        default:
            variantClasses = `bg-indigo-900 text-indigo-50 font-medium hover:bg-indigo-950 disabled:bg-indigo-900`;
    }

    const sizeClasses = `${
        size == "sm"
            ? iconOnly
                ? "w-[38px] h-[38px] flex justify-center"
                : "px-3 py-2 text-xs"
            : ""
    }${size == "md" ? (iconOnly ? "p-4" : "px-4 py-3 text-sm") : ""}${
        size == "lg" ? (iconOnly ? "p-4" : "px-5 py-4 text-base") : ""
    }`;

    return (
        <button
            type={type}
            className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
            disabled={processing || disabled}
            onClick={onClick}
        >
            {children}
            {iconOnly && <span className="sr-only">{srText ?? ""}</span>}
        </button>
    );
};

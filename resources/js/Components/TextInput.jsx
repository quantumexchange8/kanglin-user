import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        hasError,
        placeholder,
        withIcon = false,
        prefix = null,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused || hasError) {
            input.current.focus();
        }
    }, [isFocused, hasError]); // 添加 hasError 作为依赖

    return (
            <input
                {...props}
                type={type}
                className={
                    `flex w-[320px] flex-col items-start disabled:bg-gray-100 disabled:text-gray-200 self-stretch gap-1 text-gray-950 bg-white rounded-[5px] border-gray-200 border-1 border-solid py-4 px-5 
                    hover:border-indigo-200 focus:border-indigo-900 focus:border-1 focus:ring-0
                     placeholder:text-base placeholder:text-gray-300
                    ${withIcon ? "pl-11 pr-4" : ""}
                    ${prefix ? "pl-10" : ""}
                    ${
                        hasError
                            && "border-red-500 focus:border-red-500"
                    }` + className
                }
                placeholder={placeholder}
            />
    );
});

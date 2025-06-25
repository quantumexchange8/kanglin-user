const ToastSuccessIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="#21984D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

const ToastErrorIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 7L7 17M7 7L17 17" stroke="#ED1539" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

const ToastWarningIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.9995 9.55084V12.6687M11.9995 15.7866H12.0073M10.9202 5.56911L4.50917 16.6427C4.15358 17.2569 3.97578 17.564 4.00206 17.8161C4.02498 18.0359 4.14016 18.2357 4.31894 18.3657C4.5239 18.5147 4.87876 18.5147 5.58849 18.5147H18.4105C19.1203 18.5147 19.4751 18.5147 19.6801 18.3657C19.8589 18.2357 19.974 18.0359 19.997 17.8161C20.0232 17.564 19.8454 17.2569 19.4898 16.6427L13.0788 5.5691C12.7245 4.95709 12.5473 4.65109 12.3162 4.54832C12.1146 4.45867 11.8844 4.45867 11.6828 4.54832C11.4517 4.65109 11.2745 4.9571 10.9202 5.56911Z" stroke="#CE8703" stroke-width="1.55893" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

const ToastInfoIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.381 9.3C9.59259 8.6985 10.0102 8.1913 10.56 7.86822C11.1097 7.54514 11.756 7.42704 12.3845 7.53484C13.0129 7.64264 13.5829 7.96937 13.9936 8.45718C14.4042 8.94498 14.6289 9.56237 14.628 10.2C14.628 12 11.928 12.9 11.928 12.9M12 16.5H12.009M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0084C2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export {
    ToastSuccessIcon,
    ToastErrorIcon,
    ToastWarningIcon,
    ToastInfoIcon,
}
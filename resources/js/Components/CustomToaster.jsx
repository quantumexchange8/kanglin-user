import React from "react";
import { Transition } from "@headlessui/react";
import { toast, Toaster, resolveValue } from 'react-hot-toast';
import { 
  ToastSuccessIcon, 
  ToastErrorIcon, 
  ToastInfoIcon, 
  ToastWarningIcon 
} from "@/Components/Outline";

const TOAST_VARIANTS = {
  VARIANT1: 'variant1',
  VARIANT3: 'variant3'
};

const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

const ToastContent = ({ toast, type }) => {
  if (toast.variant === TOAST_VARIANTS.VARIANT3) {
    return (
      <div className="flex flex-col gap-1">
        <div className={`text-sm font-bold ${type === 'success' ? 'text-green-600' : type === 'error' ? 'text-red-600' : type === 'warning' ? 'text-yellow-600' : 'text-blue-600'}`}>
          {resolveValue(toast.title)}
        </div>
        <div className={`text-gray-700 text-sm ${type === 'success' ? 'text-green-950' : type === 'error' ? 'text-red-950' : type === 'warning' ? 'text-yellow-950' : 'text-blue-950'}`}>
          {resolveValue(toast.description)}
        </div>
      </div>
    );
  }

  if (toast.variant === TOAST_VARIANTS.VARIANT1) {
    return (
      <div className="text-gray-950 text-sm font-semibold">
        {resolveValue(toast.title)}
      </div>
    );
  }

  return null;
};

const ToastIcon = ({ type }) => {
  const icons = {
    [TOAST_TYPES.SUCCESS]: <ToastSuccessIcon />,
    [TOAST_TYPES.ERROR]: <ToastErrorIcon />,
    [TOAST_TYPES.INFO]: <ToastInfoIcon />,
    [TOAST_TYPES.WARNING]: <ToastWarningIcon />
  };

  return (
    <div className="max-w-6 max-h-6 w-full h-full">
      {icons[type] || null}
    </div>
  );
};

const ToastHeader = ({ type }) => {
  const colors = {
    [TOAST_TYPES.SUCCESS]: "bg-green-200 border border-green-200",
    [TOAST_TYPES.ERROR]: "bg-error-600",
    [TOAST_TYPES.WARNING]: "bg-warning-600",
    [TOAST_TYPES.INFO]: "bg-info-600"
  };

  return <div className={`w-full h-1 ${colors[type] || ''}`} />;
};

const ToastContainer = ({ type }) => {
  const colors = {
    [TOAST_TYPES.SUCCESS]: "bg-green-200",
    [TOAST_TYPES.ERROR]: "bg-error-100"
  };

  console.log('colors', colors)

  return `transform flex flex-col w-[640px] shadow-toast ${colors[type] || ''}`;
};

const CustomToaster = () => {
  return (
    <Toaster position="top-center">
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className={ToastContainer(t.type)}
          enter="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enterFrom="opacity-0 -translate-y-8 scale-90"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition duration-400 ease-in"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 -translate-y-2 scale-95"
        >
          <div className="flex flex-col">
            {/* <ToastHeader type={t.type} /> */}
            <div className={`flex p-4 border rounded-[5px] ${t.type === 'success' ? 'bg-green-50 border-green-200' : t.type === 'error' ? 'bg-red-50 border-red-200' : t.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'}`}>
              <div className="flex gap-4">
                <ToastIcon type={t.type} />
                <ToastContent toast={t} type={t.type} />
              </div>
            </div>
          </div>
        </Transition>
      )}
    </Toaster>
  );
};

export { CustomToaster };
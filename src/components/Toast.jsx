import { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast({ message, type = "success", isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === "success";
  const isError = type === "error";

  return (
    <div
      className={`fixed top-20 right-6 z-50 min-w-[320px] max-w-md p-4 bg-[var(--bg-card)] border-2 font-mono-code transition-all duration-200 ${
        isSuccess
          ? "border-[var(--accent-lime)] shadow-[4px_4px_0px_#CCFF00]"
          : isError
          ? "border-red-500 shadow-[4px_4px_0px_#EF4444]"
          : "border-white shadow-[4px_4px_0px_#FFFFFF]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-[var(--accent-lime)]" />
          ) : isError ? (
            <AlertCircle className="w-5 h-5 text-red-400" />
          ) : (
            <Info className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase font-bold text-[var(--text-dim)]">
            [ {isSuccess ? "TRANSMISSION_SUCCESS" : isError ? "SYSTEM_ALERT" : "NOTIFICATION"} ]
          </p>
          <p className="text-xs font-bold text-[var(--text-main)] mt-0.5 leading-snug">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

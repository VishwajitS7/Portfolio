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
      className={`fixed top-20 right-6 z-50 min-w-[320px] max-w-md p-4 rounded-2xl linear-card !bg-[var(--bg-card)]/95 backdrop-blur-2xl border shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
        isSuccess
          ? "border-emerald-500/40"
          : isError
          ? "border-red-500/40"
          : "border-indigo-500/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : isError ? (
            <AlertCircle className="w-5 h-5 text-red-400" />
          ) : (
            <Info className="w-5 h-5 text-indigo-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-mono-code uppercase font-semibold text-[var(--text-muted)]">
            {isSuccess ? "Notification" : isError ? "Action Required" : "Notice"}
          </p>
          <p className="text-sm font-medium text-[var(--text-primary)] mt-0.5 leading-snug">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

interface CopyButtonProps {
  value: string;
  className?: string;
}

export const CopyButton = ({ value, className = "" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: value,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-lg hover:bg-muted transition-colors ${className}`}
      title="Copy to clipboard"
      type="button"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
};
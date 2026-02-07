import { Check, X } from "lucide-react";
import type { FeatureValue } from "./compareData";

interface CompareValueCellProps {
  value: FeatureValue;
  caveat?: string;
  isCarlos?: boolean;
}

const NEGATIVE_VALUES = ["No AI", "N/A", "Unknown", "Not published", "Black-box AI"];

const CompareValueCell = ({ value, caveat, isCarlos }: CompareValueCellProps) => {
  const renderValue = () => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-accent-green mx-auto" />
      ) : (
        <X className="h-5 w-5 text-destructive/60 mx-auto" />
      );
    }

    const isNegative = NEGATIVE_VALUES.includes(value);
    return (
      <span className="inline-flex items-center justify-center gap-1.5">
        {isCarlos ? (
          <Check className="h-3.5 w-3.5 text-accent-green shrink-0" />
        ) : isNegative ? (
          <X className="h-3.5 w-3.5 text-destructive/60 shrink-0" />
        ) : null}
        <span
          className={
            isCarlos
              ? "font-semibold text-foreground"
              : isNegative
                ? "text-muted-foreground"
                : "text-foreground"
          }
        >
          {value}
        </span>
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-0.5">
      {renderValue()}
      {caveat && (
        <span
          className={`text-xs italic ${isCarlos ? "text-primary" : "text-destructive/70"}`}
        >
          {caveat}
        </span>
      )}
    </div>
  );
};

export default CompareValueCell;

import { focusOptions, FocusLens } from "../data/focus";

type FocusToggleProps = {
  value: FocusLens;
  onChange: (value: FocusLens) => void;
};

const FocusToggle = ({ value, onChange }: FocusToggleProps) => {
  return (
    <div className="focus-toggle" role="group" aria-label="Focus lens">
      {focusOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`focus-toggle__button${
            value === option.value ? " is-active" : ""
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FocusToggle;

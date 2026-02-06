"use client";

type StepProgressProps = {
  steps: { id: string; title: string }[];
  currentStep: number;
  onStepClick?: (index: number) => void;
};

export function StepProgress({
  steps,
  currentStep,
  onStepClick,
}: StepProgressProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;
        const isClickable = index <= currentStep && Boolean(onStepClick);
        return (
          <button
            key={step.id}
            type="button"
            onClick={() => onStepClick?.(index)}
            disabled={!isClickable}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
              isActive
                ? "border-teal-700 bg-teal-700 text-white"
                : isComplete
                ? "border-teal-200 bg-teal-50 text-teal-700 hover:border-teal-300"
                : "border-transparent bg-transparent text-slate-300"
            } ${isClickable ? "cursor-pointer" : "cursor-default"}`}
          >
            <span>{index + 1}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

type StepProgressProps = {
  steps: { id: string; title: string }[];
  currentStep: number;
};

export function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;
        return (
          <div
            key={step.id}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
              isActive
                ? "bg-slate-900 text-white"
                : isComplete
                ? "bg-slate-100 text-slate-500"
                : "bg-transparent text-slate-300"
            }`}
          >
            <span>{index + 1}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </div>
        );
      })}
    </div>
  );
}

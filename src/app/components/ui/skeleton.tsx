import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-600",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };

export function FormFieldError({ message }: { message?: string | null }) {
  if (!message) return null;
  return (
    <p className="text-xs text-destructive mt-1.5" role="alert">
      {message}
    </p>
  );
}

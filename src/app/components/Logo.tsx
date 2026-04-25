export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 font-mono ${className}`}>
      <span className="text-2xl text-muted-foreground">&lt;</span>
      <span className="text-2xl font-bold tracking-tight text-primary">Bongolo</span>
      <span className="text-2xl text-muted-foreground">/&gt;</span>
    </div>
  );
}

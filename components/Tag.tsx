export default function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition-all duration-200 hover:border-accent/40 hover:bg-accent/20 hover:shadow-glow">
      {label}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary font-medium">Mohammad Aariz Imran</span>
        </p>
        <p className="text-sm text-muted-foreground font-mono">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

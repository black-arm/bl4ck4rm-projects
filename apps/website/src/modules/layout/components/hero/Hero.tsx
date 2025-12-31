
type HeroProps = {
  fullname: string
  photoUrl: string
}

export function Hero({ fullname, photoUrl }: HeroProps) {
  return (
    <div className="flex items-center gap-8 justify-center" data-testid="hero-container">
      <img src={photoUrl} alt={fullname} className="w-52 h-52 rounded-full" />
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-6xl">{fullname}</span>
        <span className="font-mono text-4xl">Fullstack Developer</span>
      </div>
    </div>
  )
}
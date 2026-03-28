
type HeroProps = {
  fullname: string
  photoUrl: string
  jobDescription: string
}

export function Hero({ fullname, photoUrl, jobDescription }: HeroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center" data-testid="hero-container">
      <img src={photoUrl} alt={fullname} className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full" />
      <div className="flex flex-col gap-2 md:gap-4 md:basis-5/12 text-center md:text-left">
        <span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{fullname}</span>
        <span className="font-mono text-lg sm:text-xl md:text-2xl lg:text-4xl text-primary">{jobDescription}</span>
      </div>
    </div>
  )
}
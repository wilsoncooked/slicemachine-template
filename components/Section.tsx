type Props = {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  return (
    <section className={` w-full max-w-7xl mx-auto px-4 sm:px-6`}>
      {children}
    </section>
  )
}

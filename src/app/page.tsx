import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js!</h1>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
    </div>
  )
}

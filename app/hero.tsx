import Image from 'next/image';

export default function Hero() {
  return (
    <section className='grid items-center grid-cols-1 md:grid-cols-2 justify-items-center'>
      <div></div>
      <Image src={`/assets/images/phone.png`} alt='' width={400} height={500} />
    </section>
  );
}

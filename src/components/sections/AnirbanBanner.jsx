import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full h-[40vh] max-h-[350px] relative overflow-hidden">
      <Image
        src="/banner.png" // Replace with your image path
        alt="Banner Image"
        fill
        className="object-cover w-full h-full"
        priority
      />
      
      {/* Optional overlay or text */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

      </div>
    </div>
  );
}
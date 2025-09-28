import React from 'react';

export const Music: React.FC = () => {
  const musicImages = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/44321cf19157501330e82958763daee7ebe1a954?placeholderIfAbsent=true",
      alt: "Album cover 1",
      aspectRatio: "aspect-[3.18]",
      width: "w-[204px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/11c2e22f26f83eefc0b55c4824460c9962f09d96?placeholderIfAbsent=true",
      alt: "Album cover 2", 
      aspectRatio: "aspect-[3.06]",
      width: "w-[196px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/aec7c2ab6451a33191f8637a15edf07b2ead3853?placeholderIfAbsent=true",
      alt: "Album cover 3",
      aspectRatio: "aspect-[4.61]", 
      width: "w-[295px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8f779beb511c99a6c61a5fc5ae3a42332b2cc49b?placeholderIfAbsent=true",
      alt: "Album cover 4",
      aspectRatio: "aspect-[3.31]",
      width: "w-[212px]"
    }
  ];

  return (
    <section 
      id="music" 
      className="bg-[rgba(10,81,118,0.09)] py-16 px-14 max-md:px-5"
      aria-labelledby="music-heading"
    >
      <h2 
        id="music-heading"
        className="text-[#0A5176] text-[32px] font-bold leading-[1.2] tracking-[-0.96px] mb-7"
      >
        Music
      </h2>
      
      <div className="flex items-stretch justify-between gap-5 flex-wrap max-w-[1042px]">
        {musicImages.map((image, index) => (
          <div key={index} className="shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className={`${image.aspectRatio} ${image.width} object-contain max-w-full hover:opacity-80 transition-opacity cursor-pointer`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

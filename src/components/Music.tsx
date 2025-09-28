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
      className="bg-muted py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="music-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8 sm:mb-12 lg:mb-16 relative text-center lg:text-left"
        >
          Music
          <div className="absolute -bottom-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          {musicImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 flex-shrink-0 w-32 sm:w-40 lg:w-auto"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 lg:w-auto lg:h-auto ${
                    index === 0 || index === 3 ? 'invert' : 'brightness-0'
                  }`}
                  style={{ 
                    aspectRatio: image.aspectRatio.replace('aspect-', '').replace('[', '').replace(']', ''),
                    maxWidth: image.width.replace('w-', '').replace('[', '').replace(']', '').replace('px', '') + 'px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

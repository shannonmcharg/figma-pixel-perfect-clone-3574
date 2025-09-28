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
      className="bg-muted py-24 px-6 max-md:px-5"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="music-heading"
          className="text-secondary text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16 text-center relative"
        >
          Music
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {musicImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

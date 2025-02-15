import { useEffect, useState } from 'react';

import { Image, productsImages } from '@/assets';

export function ImagesContainer() {
  const [activeImg, setActiveImg] = useState<string>('');

  function updateActiveImage(activeImage: string) {
    setActiveImg(activeImage);
  }

  useEffect(() => {
    updateActiveImage(productsImages[0].default);
  }, []);

  return (
    <div>
      <div>
        <Image
          src={activeImg}
          width={350}
          alt=""
          className="rounded-md h-[500px]"
        />
      </div>
      <div className="flex gap-5 mt-5">
        {productsImages.map((image, index) => {
          const isActive = image.default === activeImg;
          return (
            <button
              onClick={() => updateActiveImage(image.default)}
              key={index}
            >
              <div className="relative">
                <Image
                  src={image.default}
                  width={60}
                  height={60}
                  alt=""
                  className={`rounded-md ${
                    isActive ? 'border-primary-orange border-2' : 'border-0'
                  }`}
                />
                <div
                  className={`${
                    isActive
                      ? 'absolute inset-0 bg-pale-orange opacity-50 mix-blend-screen'
                      : 'hidden'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

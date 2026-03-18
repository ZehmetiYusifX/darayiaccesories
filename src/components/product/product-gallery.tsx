'use client'

import { useState } from 'react'

export function ProductGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="border-b border-black/8 p-6 lg:border-b-0 lg:border-r md:p-8">
      <div
        className="h-[520px] rounded-[1.6rem] bg-cover bg-center md:h-[680px]"
        style={{ backgroundImage: `url(${activeImage})` }}
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={[
              'h-28 rounded-[1rem] border bg-cover bg-center transition',
              activeImage === image
                ? 'border-black/20'
                : 'border-black/8 opacity-80 hover:opacity-100',
            ].join(' ')}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  )
}
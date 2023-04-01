'use client'

import Image from 'next/image'

interface AvatarProps {
  src: string | undefined | null
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 40 }) => {
  return (
    <div className="relative">
      <Image
        src={src || '/images/placeholder.jpg'}
        width={size}
        height={size}
        className="rounded-full"
        alt={''}
      />
    </div>
  )
}

export default Avatar

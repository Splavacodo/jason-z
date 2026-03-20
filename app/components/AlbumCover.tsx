import Image from "next/image";

export default function AlbumCover() {
    return (
        <Image
          src="/hum-floating.gif"
          alt="ritsu zero gravity spinning"
          width={300}
          height={300}
          className="rounded-[50%]"
      />
    )
}

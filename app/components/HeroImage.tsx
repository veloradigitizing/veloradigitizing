import { getImageProps, type StaticImageData } from "next/image";
import heroImages from "../../lib/hero-images.json";

export default function HeroImage({ image, alt }: { image: StaticImageData; alt: string }) {
  const name = image.src.split("/").pop()?.split(".")[0] ?? "";
  const prepared = (heroImages as Record<string, { src: string; srcSet: string }>)[name];
  const { props } = getImageProps({
    src: image,
    alt,
    fill: true,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
    quality: 80,
  });

  return (
    // getImageProps retains Next's image attributes without a client component.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      {...(prepared ? { src: prepared.src, srcSet: prepared.srcSet } : {})}
      className="object-cover object-center"
    />
  );
}

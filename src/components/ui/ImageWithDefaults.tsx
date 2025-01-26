import Image, { ImageProps } from "next/image";

interface ImageWithDefaultsProps extends ImageProps {
  width?: number;
  height?: number;
}

const ImageWithDefaults = ({
  width = 30, // Default width
  height = 30, // Default height
  ...props
}: ImageWithDefaultsProps) => {
  return <Image {...props} width={width} height={height} />;
};

export default ImageWithDefaults;

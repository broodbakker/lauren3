import { AspectRatio, Grid, Image } from '@chakra-ui/react';
//constants
import { IMAGES_OF_MYSELF } from '../../../util/constants';

export const ImageGrid = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      {IMAGES_OF_MYSELF.map((src, index) => (
        <ImageContainer src={src} key={index} />
      ))}
    </Grid>
  );
};

const ImageContainer = ({ src }) => (
  <AspectRatio maxW="400px" ratio={4 / 4}>
    <Image src={src} alt="lauren" objectFit="cover" />
  </AspectRatio>
);

export default ImageGrid;

import images, { ImagesType } from '../assets/images';

type ImageType = {
  type: ImagesType,
  maxWidth?: string,
  imageType?: 'background'
}

const Image = (props: ImageType) => {
  const {type, maxWidth = '5rem', imageType} = props;

  let imageClasses = ""
  switch(imageType) {
    case 'background':
      imageClasses += "background-image";
  }

  return (
    <div style={{maxWidth: maxWidth}}>
      <img src={images[type]} alt={type} className={imageClasses} />
    </div>
  )
}

export default Image
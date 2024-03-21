import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ photos, openModal }) => {
return (
    <ul className={css.photoList}>
        {photos.map(photo => (
            <li key={photo.id}>
                <ImageCard photo={photo} openModal={openModal}/> 
            </li>
        ))}
    </ul>
);
}

export default ImageGallery;
import { useState, useEffect } from 'react';
import  { fetchPhotos }  from '../../photos-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';




 const App = () => {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [selectedPhoto, setSelectedPhoto] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
  
    useEffect(() => {
      const getPhotos = async () => {
        if (query === '') return;
        try {
          setIsLoading(true);
          const { results, total_pages } = await fetchPhotos({ query, page });
  
          if (!results.length) {
            setIsEmpty(true);
            return;
          }
  
          setPhotos(prevPhotos => [...prevPhotos, ...results]);
          setIsVisible(page < total_pages);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getPhotos();
    }, [query, page]);
  
    const handleSubmit = value => {
      if (value === query) return;
      setPhotos([]);
      setPage(1);
      setIsError(false);
      setQuery(value);
      setIsEmpty(false);
      setIsVisible(false);
    };
  
    const handleLoadMore = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    const openModal = values => {
      setSelectedPhoto(values);
      setIsOpenModal(true);
    };
  
    const closeModal = () => {
      setSelectedPhoto({});
      setIsOpenModal(false);
    };
  
    return (
      <>
        <SearchBar onSubmit={handleSubmit} />
        {isError && <ErrorMessage message={'Oops! Error! Reload page!'} />}
        {photos.length !== 0 && (
          <ImageGallery photos={photos} openModal={openModal} />
        )}
        {isEmpty && query && (
          <ErrorMessage>Nothing found! Try another query...</ErrorMessage>
        )}
        {isVisible && (
          <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? 'Loading' : 'Load more'}
          </LoadMoreBtn>
        )}
        {isLoading && <Loader />}
        <ImageModal
          isOpen={isOpenModal}
          modal={selectedPhoto}
          closeModal={closeModal}
        />
      </>
    );
  }

  export default App;
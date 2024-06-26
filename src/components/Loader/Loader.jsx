import { MagnifyingGlass } from 'react-loader-spinner';

 const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#1B1B80"
      />
    </div>
  );
}

export default Loader;
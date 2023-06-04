// import React from 'react';
// import '../styles/FormTrip.css';

// const FormTrip = () => {
//   const imageUrls = Array.from({ length: 9 }, (_, index) => {
//     const imageNumber = index + 1;
//     return `./Images_places/image${imageNumber}.jpg`;
//   });

//   return (
//     <div className="grid-container">
//       {imageUrls.map((imageUrl, index) => (
//         <div key={index} className="grid-item">
//           <img src={require(`${imageUrl}`).default} alt={`i${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormTrip;

import React, { useEffect, useState } from 'react';
import '../styles/FormTrip.css';

const FormTrip = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const loadImageUrls = async () => {
      const urls = await Promise.all(
        Array.from({ length: 9 }, (_, index) => {
          const imageNumber = index + 1;
          return import(`../../public/images/i${imageNumber}.png`)
            .then((module) => module.default)
            .catch((error) => {
              console.error('Error loading image:', error);
              return null;
            });
        })
      );
      setImageUrls(urls);
    };

    loadImageUrls();
  }, []);

  return (
    <div className="grid-container">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="grid-item">
            <div className='card'>
            {imageUrl && <img src={imageUrl} alt={`i${index + 1}`} />}

            </div>

        </div>
      ))}
    </div>
  );
};

export default FormTrip;

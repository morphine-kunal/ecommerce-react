/* eslint-disable react/prop-types */
import { useState } from "react";

import TabBtn from "../Buttons/tabBtn";

const ProductDescription = ({description}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleFeatureClick = () => {
    setShowFeatures(!showFeatures);
    setShowDescription(false);
  };
  const handleDescriptionClick = () => {
    setShowFeatures(false);
    setShowDescription(!showDescription);
  };

  return (
    <div className="mt-3">
      <div className="w-56 flex justify-between items-center">
        <TabBtn name="Features" click={handleFeatureClick} />
        <TabBtn name="Description" click={handleDescriptionClick} />
      </div>

      {showFeatures && (
        <div className="bg-white p-5 mt-3 rounded-md">
          <p className="text-lg mb-2 font-semibold">Features</p>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            repellendus iure nihil ea corrupti aliquid expedita delectus placeat
            illo minus praesentium facilis voluptas rerum, veritatis sequi optio
            itaque in impedit accusantium! Corrupti ipsum assumenda cum vel iste
            quia praesentium, exercitationem, ab consectetur adipisci accusamus
            suscipit perferendis eum mollitia, temporibus laboriosam commodi
            veniam consequatur ea natus ipsam dolorum illum. Necessitatibus
            accusamus veniam repellendus fuga nesciunt! Soluta quos, molestiae
            excepturi nesciunt nulla quod, aut laboriosam blanditiis, a at iusto
            rem molestias. Error, nihil tempore!
          </div>
        </div>
      )}
      {showDescription && (
        <div className="bg-white p-5 mt-3 rounded-md">
          <p className="text-lg mb-2 font-semibold">Description</p>

          <p className="italic text-sm mb-2 font-semibold">{description}</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit, consectetur possimus dicta quibusdam nam fuga eos facere ab quod consequatur dolor tenetur omnis autem quaerat aut culpa nihil quis unde impedit. Quo sint ipsum harum velit impedit dolorem delectus hic maxime saepe, ipsam, non itaque commodi, totam eos eaque? Deserunt cumque nisi ducimus corporis quis, velit voluptates molestiae quod quidem, alias maxime distinctio at pariatur omnis, illo inventore culpa. Sapiente est commodi eos animi labore consequuntur, impedit accusantium, consectetur eligendi numquam at non molestias nostrum odio! Ad quibusdam blanditiis maiores quo veniam? Dicta voluptatum quibusdam hic sunt? Necessitatibus, possimus?
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;

import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({allSushi, handleEatSushi, budget}) {
  const [sliceCount, setSliceCount] = useState(0)
  // console.log(allSushi)
  const displayAllSushi = allSushi.slice(sliceCount, sliceCount + 4).map((sushi) => {
    return(
      <Sushi
      key={sushi.id}
      id={sushi.id} 
      name={sushi.name}
      image={sushi.img_url}
      price={sushi.price}
      handleEatSushi={handleEatSushi}
      budget={budget}
      />
    )
  })

  function moreSushi(){
   sliceCount === 96 ? setSliceCount(0) : setSliceCount(sliceCount + 4)
  }

  return (
    <div className="belt">
      {displayAllSushi}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;

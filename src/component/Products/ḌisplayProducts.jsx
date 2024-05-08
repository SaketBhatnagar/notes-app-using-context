import React from 'react'

const ḌisplayProducts = ({productlist,search}) => {
  return (
    <div className="flex  flex-wrap gap-8 justify-center items-center  ">
    {productlist.map((product) => {
      if (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      )
        return (
          <div
            key={product.title}
            className=" flex flex-col gap-4 p-4 rounded-md shadow-md w-[90%] hover:shadow-sm hover:shadow-sky-500 lg:w-[30%] sm:w-[40%] xl:w-[20%]"
          >
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-sm">
              {product.description.slice(0, 50)} . . .
            </p>
            <div className="flex overflow-x-scroll h-48">
              {product.images.map((image) => {
                return <img key={Math.random() * 997676} src={image} />;
              })}
            </div>
          </div>
        );
    })}
  </div>
  )
}

export default ḌisplayProducts

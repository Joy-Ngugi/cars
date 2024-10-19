import React from "react";

function Props({ data }) {
  return (
    // <body className="bg-orange-400">
    <div className="max-w-lg my-6  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mx-6">
      <img
        className="w-full h-96 object-cover"
        src={data.image.src}
        alt={data.brand}
        // style={{ width: "200px" }}
      />
      <div className="p-4">
        <h3 className="text-4xl font-serif  font-bold text-gray-900 mb-2"> {data.name}</h3>
        <p className="text-2xl font-serif" > {data.brand}</p>
        <p className="text-lg  font-serif text-gray-700">{data.color}</p>
        <p className="text-lg font-serif text-gray-700"> {data.year} </p>
      </div>
    </div>
    //</body>
  );
}

export default Props;

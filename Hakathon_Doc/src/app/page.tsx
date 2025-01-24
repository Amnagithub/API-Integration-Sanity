import Image from "next/image";
import { client } from "../../sanity-migration/sanityClient";
import { groq } from "next-sanity";

async function Home() {

  const fectchData = await client.fetch (groq 
    `*[_type == "product" && "electronics" in tags]{
            _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url,                      
        }`
);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {fectchData.map((product:any) => (
          <div key={product._id} className="bg-white p-4 rounded-md shadow-md
          w-96 h-96">
            <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.discountPercentage}% off</p>
            <p>{product.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;

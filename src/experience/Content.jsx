import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
const layouts = [
  {
    title: "tent",
    description:
      "A tent is a shelter consisting of sheets of fabric or other material draped over, attached to a frame of poles or attached to a supporting rope.",
    price: 100,
    bgColor: "bg-red-500",
    position: [0.5, 1.25, 0],
  },
  {
    title: "backpack",
    description:
      "A backpack—also called knapsack, rucksack, rucksac, pack, sackpack, booksack, bookbag or backsack—is, in its simplest frameless form, a cloth sack carried on one's back and secured with two straps that go over the shoulders.",
    price: 50,
    bgColor: "bg-green-500",
    position: [-0.5, 0.5, 0.5],
  },
  {
    title: "sleeping bag",
    description:
      "A sleeping bag is an insulated covering for a person, essentially a lightweight quilt that can be closed with a zipper or similar means to form a tube, which functions as bedding in situations where a person is sleeping outdoors.",
    price: 75,
    bgColor: "bg-blue-500",
    position: [0, 0.2, 1.2],
  },
];

const Content = () => {
  return (
    <>
      {layouts.map((layout, index) => (
        <Card key={index} {...layout} />
      ))}
    </>
  );
};

export default Content;

const Card = (props) => {
  const [isOccluded, setIsOccluded] = useState(false);
  const [isInRange, setIsInRange] = useState(false);
  const contentRef = useRef();
  const isVisible = isInRange && !isOccluded;
  const { title, description, price, bgColor, ...props2 } = props;
  const vec0 = new THREE.Vector3();
  useFrame((state) => {
    const { camera } = state;
    const range = camera.position.distanceTo(vec0);
    range < 16 ? setIsInRange(true) : setIsInRange(false);
  });

  return (
    <Html
      ref={contentRef}
      transform
      occlude
      onOcclude={setIsOccluded}
      distanceFactor={1.2}
      className={`w-48 rounded-md select-none overflow-hidden transition-opacity duration-1000 `}
      {...props2}
      style={{
        transition: "all 0.2s",
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.25})`,
      }}
    >
      <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full ">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <button
        className={`${bgColor} hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
      >
        Add to cart ${price}
      </button>
    </Html>
  );
};

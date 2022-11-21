interface Props {
  image_url: string;
  name: string;
  children: JSX.Element | JSX.Element[];
}
const CustomCard = ({ name, image_url, children }: Props) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md ">
      <img className="rounded-t-lg" src={image_url} alt="pizza" />
      <div className="flex justify-between p-5 text-sm font-bold tracking-tight text-white lg:text-2xl">
        <h5 className="mb-2 ">{name}</h5>
      </div>
      {children}
    </div>
  );
};

export default CustomCard;

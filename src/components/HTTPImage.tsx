type Props = {
  status: string;
};
const HTTPImage = ({ status }: Props) => {
  return (
    <div className='card my-3 p-4' role='figure'>
      <img src={`https://http.cat/${status}`} alt={`Status Cat ${status}`} />
      <h4 className='text-center my-3'>Status {status}</h4>
    </div>
  );
};

export default HTTPImage;

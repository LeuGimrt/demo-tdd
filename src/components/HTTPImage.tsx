type Props = {
  status?: string;
};

const HTTPImage = ({ status = "404" }: Props) => {
  return (
    <div className='card my-3 p-4'>
      <img src={`https://http.cat/${status}`} alt='Cat Status' />
      <h4 className='text-center my-3'>Status {status}</h4>
    </div>
  );
};

export default HTTPImage;

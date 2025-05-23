import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-5xl flex justify-center items-center p-10">
          NotFoundPage
        </div>
        <div>
          <Link
            to="/"
            className="text-2xl flex justify-center items-center text-blue-500 hover:text-blue-700 font-bold ml-4"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

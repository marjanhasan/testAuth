import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img
            src="/404.jpg"
            className="h-96 w-96 rounded-lg shadow-lg"
            alt=""
          />
          <div className="max-w-md text-center mt-6">
            <Link to="/" className="btn">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

const Cta = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 bg-slate-100">
        <h2 className="text-2xl themecolor">No Spam Promise</h2>
        <h1 className="text-4xl font-bold text-blue-950 my-4">
          Are you a landlord?
        </h1>
        <p className="text-blue-950">
          Discover ways to increase your home's value{" "}
          <br className="md:hidden" /> and get listed. No Spam.
        </p>
        <div className="mt-5 bg-white p-3 rounded-md">
          <input
            type="text"
            placeholder="Enter your email address"
            className="outline-none p-2 w-80"
          />
          <button className="btn">Submit</button>
        </div>
        <p className="text-blue-950 text-sm mt-4">
          Join <span className="themecolor font-semibold">10,000+</span> other
          landlords in our estatery community.
        </p>
      </div>
    </>
  );
};

export default Cta;

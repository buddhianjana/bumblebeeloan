import gifNotfound from "./.././../assets/404-error-page.gif";

const NotFound = () => {
  return (
    <main className="p-10 w-full flex flex-col justify-center items-center">
      <p className="capitalize text-2xl font-extrabold tracking-tight text-gray-900">
        Page Not Found
      </p>
      <img src={gifNotfound} alt="error page not found" />
    </main>
  );
};
export { NotFound };

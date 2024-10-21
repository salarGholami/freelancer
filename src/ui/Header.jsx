import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  // console.log(data);

  return (
    <div className="bg-secondary-0 py-4 px-8">
      <h1>header</h1>
    </div>
  );
}

export default Header;

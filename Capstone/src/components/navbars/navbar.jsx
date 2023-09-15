import NavbarAuth from "./navauth";
import NavbarGuest from "./navguest";

export default function Navbars() {
  return (
    <>
      {localStorage.getItem("username") ? <NavbarAuth /> : <NavbarGuest />}
    </>
  );
}

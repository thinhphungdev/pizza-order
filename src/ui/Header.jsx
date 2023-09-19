import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza Order</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;

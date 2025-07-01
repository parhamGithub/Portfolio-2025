import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>وبلاگ کوچک ریداکسی من</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/article-handler">وبلاگ</Link>
            <Link to="/article-handler/users">نویسنده‌ها</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

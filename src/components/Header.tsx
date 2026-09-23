import "../styles/blog.css";
import withLogger from "../hoc/withLogger";

function Header() {
  return (
    <header className="header">
      <h1
        className="logo"
        style={{ letterSpacing: "1px" }}
      >
        Dev Insights
      </h1>

      <nav>
        <a className="nav-link" href="#new-post">
          New Post
        </a>
      </nav>
    </header>
  );
}

export default withLogger(Header, "Header");
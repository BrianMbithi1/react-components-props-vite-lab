import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import blog from "./blog";

test("renders blog name, logo, and articles from props", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(blog.name);
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(blog.posts.length);
});

test("Header updates dynamically with props", () => {
  render(<Header name="Test Blog" />);
  expect(screen.getByText("Test Blog")).toBeInTheDocument();
});
import { marked } from "marked";
import About from "./About.md?raw";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <main className="p-4">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked(About) }} />
      <div className="prose mt-8">
        <h2>プライバシーポリシー</h2>
        <p>
          <Link to="/privacy">こちら</Link>をご覧ください。
        </p>
      </div>
    </main>
  );
};

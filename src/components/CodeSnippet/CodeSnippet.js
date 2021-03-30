import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./CodeSnippet.module.css";

export default function CodeSnippet({ codeString }) {
  return codeString ? (
    <div className={`relative w-full ${styles.container}`}>
      <SyntaxHighlighter
        customStyle={{ padding: "4rem 1rem 1rem 1rem" }}
        language="javascript"
        style={nightOwl}
      >
        {codeString}
      </SyntaxHighlighter>
      <button
        className="absolute top-0 right-0 mt-2 mr-2 btn btn-icon btn-small btn-solid-light"
        onClick={() => navigator.clipboard.writeText(codeString)}
      >
        <span class="material-icons-outlined">content_copy</span>
      </button>
    </div>
  ) : null;
}

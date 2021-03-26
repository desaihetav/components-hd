import { SectionHeader, ComponentContainer } from "../../components";

export default function Button() {
  const codeSnippets = [
    {
      title: "Solid Button",
      description:
        "The Solid Button is also available in large size. Add `btn-large` class to `button` element for large button.",
      component: (
        <div className="grid">
          <button class="btn btn-solid">Add to Cart</button>
          <button class="btn btn-solid btn-large">Add to Cart</button>
        </div>
      ),
      code: `// Normal Size
<button class="btn btn-solid">View All Products</button>
// Large Size
<button class="btn btn-solid btn-large">View All Products</button>`,
    },
    {
      title: "Outlined Button",
      description:
        "The Outlined Button is also available in large size. Add `btn-large` class to `button` element for large button.",
      component: (
        <div className="grid">
          <button class="btn btn-outlined">Add to Cart</button>
          <button class="btn btn-outlined btn-large">Add to Cart</button>
        </div>
      ),
      code: `// Normal Size
<button class="btn btn-outlined">View All Products</button>
// Large Size
<button class="btn btn-outlined btn-large">View All Products</button>`,
    },
    {
      title: "Ghost Badge",
      component: (
        <div className="grid">
          <button class="btn btn-ghost">Add to Cart</button>
          <button class="btn btn-ghost btn-large">Add to Cart</button>
        </div>
      ),
      code: `// Normal Size
<button class="btn btn-ghost">View All Products</button>
// Large Size
<button class="btn btn-ghost btn-large">View All Products</button>`,
    },
    {
      title: "Link Button",
      component: <button class="btn btn-link">Add to Cart</button>,
      code: `<button class="btn btn-link">Add to Cart</button>`,
    },
    {
      title: "Button With Icon",
      description:
        "All the variants of Button with Icon are also available in large size. Use `btn-large` on `button` element for large size buttons.",
      component: (
        <div>
          <div className="grid">
            <button class="btn btn-solid">
              <span class="material-icons-round btn-icon-left"> west </span>
              Go Back
            </button>
            <button class="btn btn-solid">
              Continue Shopping
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-outlined">
              <span class="material-icons-round btn-icon-left"> west </span>
              Go Back
            </button>
            <button class="btn btn-outlined">
              Continue Shopping
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-ghost">
              <span class="material-icons-round btn-icon-left"> west </span>
              Go Back
            </button>
            <button class="btn btn-ghost">
              Continue Shopping
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-link">
              <span class="material-icons-round btn-icon-left"> west </span>
              Go Back
            </button>
            <button class="btn btn-link">
              Continue Shopping
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
        </div>
      ),
      code: `// Icon on Left
<button class="btn btn-solid"> // outlined, ghost and link variants applicable here
    <span class="material-icons-round btn-icon-left"> west </span>
    Go Back
</button>

// Icon on Right
<button class="btn btn-solid"> // outlined, ghost and link variants applicable here
    <span class="material-icons-round btn-icon-left"> west </span>
    Go Back
</button>`,
    },
    {
      title: "Icon Only Buttons",
      description:
        "All the variants of Icon Only Button are also available in large size. Use `btn-large` on `button` element for large size buttons.",
      component: (
        <div>
          <div className="grid">
            <button class="btn btn-icon btn-solid">
              <span class="material-icons-round btn-icon-left"> west </span>
            </button>
            <button class="btn btn-icon btn-solid">
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-icon btn-outlined">
              <span class="material-icons-round btn-icon-left"> west </span>
            </button>
            <button class="btn btn-icon btn-outlined">
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-icon btn-ghost">
              <span class="material-icons-round btn-icon-left"> west </span>
            </button>
            <button class="btn btn-icon btn-ghost">
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
          <div className="grid">
            <button class="btn btn-icon btn-link">
              <span class="material-icons-round btn-icon-left"> west </span>
            </button>
            <button class="btn btn-icon btn-link">
              <span class="material-icons-round btn-icon-right"> east </span>
            </button>
          </div>
        </div>
      ),
      code: `<button class="btn btn-icon btn-solid"> // outlined, ghost and link variants applicable here
    <span class="material-icons-round btn-icon-left"> west </span>
</button>`,
    },
  ];
  return (
    <div>
      <SectionHeader
        title="Button"
        description="The button is an essential element of any design. It's meant to look and behave as an interactive element of your page."
      />
      <div className="divider"></div>
      {codeSnippets.map((snippetItem) => (
        <ComponentContainer
          title={snippetItem.title}
          description={snippetItem.description}
          codeString={snippetItem.code}
        >
          {snippetItem.component}
        </ComponentContainer>
      ))}
    </div>
  );
}

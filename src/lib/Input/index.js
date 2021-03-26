import { SectionHeader, ComponentContainer } from "../../components";

export default function Input() {
  const codeSnippets = [
    {
      title: "Default Input",
      component: (
        <input
          placeholder="Enter your email"
          class="input-field"
          type="email"
          id="email"
        />
      ),
      code: `   <input
      placeholder="Enter your email"
      class="input-field"
      type="email" // or text, number, password, etc.
      id="email"
    />`,
    },
    {
      title: "Input Error State",
      component: (
        <input
          placeholder="Enter your password"
          class="input-field input-error"
          type="password"
          id="password"
        />
      ),
      code: `   <input
      placeholder="Enter your password"
      class="input-field input-error"
      type="password"
      id="password"
    />`,
    },
  ];
  return (
    <div>
      <SectionHeader
        title="Input"
        description="Input is used to taking user input in a text, email or password field."
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

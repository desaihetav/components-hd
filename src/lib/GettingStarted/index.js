import { SectionHeader, ComponentContainer } from "../../components";

export default function Modal() {
  const codeSnippets = [
    {
      title: "Link in HTML file",
      component: (
        <input
          readOnly
          value={
            '<link href="https://csshd.netlify.app/styles/index.css" rel="stylesheet" />'
          }
          class="input-field"
          type="email"
          id="email"
        />
      ),
      code: `<link href="https://csshd.netlify.app/styles/index.css" rel="stylesheet" />`,
    },
    {
      title: "Import in CSS file",
      component: (
        <input
          readOnly
          value={
            '@import url("https://csshd.netlify.app/styles/index.css" rel="stylesheet");'
          }
          class="input-field"
          type="email"
          id="email"
        />
      ),
      code: `@import url("https://csshd.netlify.app/styles/index.css" rel="stylesheet");`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Get Started"
        description="Follow this steps to configure and get started with using FinsightCSS in your web dev projects"
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

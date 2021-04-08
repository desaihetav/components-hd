import { SectionHeader, ComponentContainer } from "../../components";

export default function Badge() {
  const codeSnippets = [
    {
      title: "Default Badge",
      component: <div class="badge">Default</div>,
      code: `<div class="badge">DEFAULT</div>`,
    },
    {
      title: "Success Badge",
      component: <div class="badge badge-success">Success</div>,
      code: `<div class="badge badge-success">DEFAULT</div>`,
    },
    {
      title: "Warning Badge",
      component: <div class="badge badge-warning">Warning</div>,
      code: `<div class="badge badge-warning">DEFAULT</div>`,
    },
    {
      title: "Error Badge",
      component: <div class="badge badge-error">Error</div>,
      code: `<div class="badge badge-error">DEFAULT</div>`,
    },
    {
      title: "Info Badge",
      component: <div class="badge badge-info">Info</div>,
      code: `<div class="badge badge-info">DEFAULT</div>`,
    },
    {
      title: "Badge on Icon",
      component: (
        <div class="icon-badge-stack">
          <span class="material-icons-round icon"> notifications </span>
          <div class="icon-badge">6</div>
        </div>
      ),
      code: `<div class="icon-badge-stack">
  <span class="material-icons-round icon"> notifications </span>
  <div class="icon-badge">6</div>
</div>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Badge"
        description="Badges are used to highlight an item's status for quick recognition."
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

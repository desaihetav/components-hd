import { SectionHeader, ComponentContainer } from "../../components";

export default function Alert() {
  const codeSnippets = [
    {
      title: "Primary Alert",
      component: (
        <div class="alert">
          <span class="material-icons-round alert-icon"> done </span>
          Welcome to cssHD
        </div>
      ),
      code: `<div class="alert">
    <span class="material-icons-round alert-icon"> done </span>
    This is a normal message.
</div>`,
    },
    {
      title: "Success Alert",
      component: (
        <div class="alert alert-success">
          <span class="material-icons-round alert-icon"> done </span>
          Order placed succesfully
        </div>
      ),
      code: `<div class="alert">
    <span class="material-icons-round alert-icon"> done </span>
    This is a normal message.
</div>`,
    },
    {
      title: "Warning Alert",
      component: (
        <div class="alert alert-warning">
          <span class="material-icons-round alert-icon"> warning </span>
          This is an irreversible action
        </div>
      ),
      code: `<div class="alert">
    <span class="material-icons-round alert-icon"> warning </span>
    This is a normal message.
</div>`,
    },
    {
      title: "Error Alert",
      component: (
        <div class="alert alert-error">
          <span class="material-icons-round alert-icon"> error_outline </span>
          Oops, something bad happened
        </div>
      ),
      code: `<div class="alert">
    <span class="material-icons-round alert-icon"> error_outline </span>
    This is a normal message.
</div>`,
    },
    {
      title: "Info Alert",
      component: (
        <div class="alert alert-info">
          <span class="material-icons-round alert-icon"> info </span>
          Your trash will be cleared monthly
        </div>
      ),
      code: `<div class="alert">
    <span class="material-icons-round alert-icon"> info </span>
    This is a normal message.
</div>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Alert"
        description="Alerts are used to communicate a state that affects a system, feature or page."
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

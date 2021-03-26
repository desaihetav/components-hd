import { SectionHeader, ComponentContainer } from "../../components";

export default function Modal() {
  const codeSnippets = [
    {
      title: "Modal",
      description: "With Primary and Secondary Actions",
      component: (
        <div className="card modal">
          <div className="card-content">
            <span className="card-title">Allow Location Tracking?</span>
            <span className="card-subtitle">
              Location tracking hels us make better decisions so that you can
              get more value. By enabling location tracking, you're allowing us
              to monitor your movements.
            </span>
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
            <div className="row w-full justify-end">
              <button className="btn btn-outlined">Learn More</button>
              <div className="space-x-1"></div>
              <button className="btn btn-solid">Allow</button>
            </div>
          </div>
        </div>
      ),
      code: `   <div className="card modal">
      <div className="card-content">
        <span className="card-title">Allow Location Tracking?</span>
        <span className="card-subtitle">
          Location tracking hels us make better decisions so that you can
          get more value. By enabling location tracking, you're allowing us
          to monitor your movements.
        </span>
        <div className="space-y-1"></div>
        <div className="space-y-1"></div>
        <div className="row w-full justify-end">
          <button className="btn btn-outlined">Learn More</button>
          <div className="space-x-1"></div>
          <button className="btn btn-solid">Allow</button>
        </div>
      </div>
    </div>`,
    },
    {
      title: "Modal",
      description: "With Single Action",
      component: (
        <div className="card modal">
          <div className="card-content">
            <span className="card-title">Welcome on board !</span>
            <span className="card-subtitle">
              Your account has been created with us and the link to generate
              password has been sent on your registered email id. We are glad to
              have you on board with us!
            </span>
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
            <div className="row w-full flex-center">
              <button className="btn btn-solid">Continue</button>
            </div>
          </div>
        </div>
      ),
      code: `   <div className="card modal">
        <div className="card-content">
          <span className="card-title">Allow Location Tracking?</span>
          <span className="card-subtitle">
            Location tracking hels us make better decisions so that you can
            get more value. By enabling location tracking, you're allowing us
            to monitor your movements.
          </span>
          <div className="space-y-1"></div>
          <div className="space-y-1"></div>
          <div className="row w-full justify-end">
            <button className="btn btn-outlined">Learn More</button>
            <div className="space-x-1"></div>
            <button className="btn btn-solid">Allow</button>
          </div>
        </div>
      </div>`,
    },
  ];
  return (
    <div>
      <SectionHeader
        title="Modal"
        description="A modal is a popup window that is displayed on top of the current page. It's commonly used for confirmation boxes. Forms should not be put in modals."
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

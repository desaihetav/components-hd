import React from "react";
import { SectionHeader, ComponentContainer } from "../../components";

export default function Avatar() {
  const codeSnippets = [
    {
      title: "Avatar Double XS",
      component: (
        <img
          alt=""
          class="avatar avatar-image-2xs"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-2xs"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Extra Small",
      component: (
        <img
          alt=""
          class="avatar avatar-image-xs"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-xs"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Small",
      component: (
        <img
          alt=""
          class="avatar avatar-image-sm"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-sm"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Medium",
      component: (
        <img
          alt=""
          class="avatar avatar-image-md"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-md"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Large",
      component: (
        <img
          alt=""
          class="avatar avatar-image-lg"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-lg"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Extra Large",
      component: (
        <img
          alt=""
          class="avatar avatar-image-xl"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-xl"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Double XL",
      component: (
        <img
          alt=""
          class="avatar avatar-image-2xl"
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      ),
      code: `<img
  alt=""
  class="avatar avatar-image-2xl"
  src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
/>`,
    },
    {
      title: "Avatar Group",
      description:
        "The Avatar Group component works will all sizes of images shown above.",
      component: (
        <div class="avatar-group">
          <img
            alt=""
            class="avatar avatar-group-item avatar-image-lg"
            src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <img
            alt=""
            class="avatar avatar-group-item avatar-image-lg"
            src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <img
            alt=""
            class="avatar avatar-group-item avatar-image-lg"
            src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      ),
      code: `<div class="avatar-group">
  <img
    alt=""
    class="avatar avatar-group-item avatar-image-lg"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
  <img
    alt=""
    class="avatar avatar-group-item avatar-image-lg"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
  <img
    alt=""
    class="avatar avatar-group-item avatar-image-lg"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
</div>`,
    },
    {
      title: "Avatar with Badge",
      description:
        "The Avatar with Badge is used to show status of the user and works will all the images sizes shown above.",
      component: (
        <div className="row">
          <div class="avatar-badge-stack">
            <img
              alt=""
              class="avatar avatar-image-xl"
              src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="avatar-badge avatar-badge-xl avatar-badge-available"></div>
          </div>
          <div className="space-x-1"></div>
          <div class="avatar-badge-stack">
            <img
              alt=""
              class="avatar avatar-image-xl"
              src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="avatar-badge avatar-badge-xl avatar-badge-idle"></div>
          </div>
          <div className="space-x-1"></div>
          <div class="avatar-badge-stack">
            <img
              alt=""
              class="avatar avatar-image-xl"
              src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="avatar-badge avatar-badge-xl avatar-badge-busy"></div>
          </div>
        </div>
      ),
      code: `// Available – Green Badge
<div class="avatar-badge-stack">
  <img
    alt=""
    class="avatar avatar-image-xl"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
  <div class="avatar-badge avatar-badge-xl avatar-badge-available"></div>
</div>
// Idle – Yellow Badge
<div class="avatar-badge-stack">
  <img
    alt=""
    class="avatar avatar-image-xl"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
  <div class="avatar-badge avatar-badge-xl avatar-badge-idle"></div>
</div>
// Busy – Red Badge
<div class="avatar-badge-stack">
  <img
    alt=""
    class="avatar avatar-image-xl"
    src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  />
  <div class="avatar-badge avatar-badge-xl avatar-badge-busy"></div>
</div>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Avatar"
        description="The Avatar component is used to represent a user, and displays the profile picture or Initials."
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

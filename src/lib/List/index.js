import { SectionHeader, ComponentContainer } from "../../components";

export default function List() {
  const codeSnippets = [
    {
      title: "Stacked List",
      description:
        "Use `stacked-list-item` class with different children to put them in a stacked list.",
      component: (
        <ul>
          <li class="card stacked-list-item">
            <div class="card-content">
              <div class="card-badge">
                <span>Trending</span>
              </div>
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
          <li class="card stacked-list-item">
            <div class="card-content">
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
          <li class="card stacked-list-item">
            <div class="card-content">
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
        </ul>
      ),
      code: `   <ul>
      <li class="card stacked-list-item">
        <div class="card-content">
          <div class="card-badge">
            <span>Trending</span>
          </div>
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
      <li class="card stacked-list-item">
        <div class="card-content">
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
      <li class="card stacked-list-item">
        <div class="card-content">
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
    </ul>`,
    },
    {
      title: "Spaced List",
      description:
        "Use `spaced-list-item` class with different children to put them in a spaced list.",
      component: (
        <ul>
          <li class="card spaced-list-item">
            <div class="card-content">
              <div class="card-badge">
                <span>Trending</span>
              </div>
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
          <li class="card spaced-list-item">
            <div class="card-content">
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
          <li class="card spaced-list-item">
            <div class="card-content">
              <div class="row">
                <img
                  alt=""
                  class="avatar avatar-image-lg"
                  src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <div class="space-x-1"></div>
                <div>
                  <h3 class="card-title">John Doe</h3>
                  <p class="card-subtitle">@johndoe</p>
                </div>
              </div>
              <div class="space-y-1"></div>
              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
            </div>
          </li>
        </ul>
      ),
      code: `   <ul>
      <li class="card spaced-list-item">
        <div class="card-content">
          <div class="card-badge">
            <span>Trending</span>
          </div>
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
      <li class="card spaced-list-item">
        <div class="card-content">
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
      <li class="card spaced-list-item">
        <div class="card-content">
          <div class="row">
            <img
              alt=""
              class="avatar avatar-image-lg"
              src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <div class="space-x-1"></div>
            <div>
              <h3 class="card-title">John Doe</h3>
              <p class="card-subtitle">@johndoe</p>
            </div>
          </div>
          <div class="space-y-1"></div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </li>
    </ul>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="List"
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

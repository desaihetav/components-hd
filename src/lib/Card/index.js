import { SectionHeader, ComponentContainer } from "../../components";

export default function Card() {
  const codeSnippets = [
    {
      title: "Default Card",
      component: (
        <div class="grid grid-demo">
          <div class="card-container">
            <div class="card">
              <img
                alt=""
                src="https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg"
                class="card-image"
              />
              <div class="card-content">
                <p class="card-subtitle">Morgan Housel</p>
                <h3 class="card-title">The Psychology of Money</h3>
                <div class="row">
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-gray card-rating">
                    star
                  </span>
                  <div class="space-x-1"></div>
                  <span class="card-reviews">257 reviews</span>
                </div>
                <div class="row">
                  <span class="card-price">Rs. 350/-</span>
                  <div class="space-x-1"></div>
                  <span class="card-price-original">Rs. 399/-</span>
                </div>
                <p class="card-description">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money isn’t necessarily about what you know. It’s about
                  how you behave. And behavior is hard to teach, even to really
                  smart people.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `<div class="card">
    <img
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg"
        class="card-image"
    />
    <div class="card-content">
        <p class="card-subtitle">Morgan Housel</p>
        <h3 class="card-title">The Psychology of Money</h3>
        <div class="row">
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-gray card-rating">
                star
            </span>
            <div class="space-x-1"></div>
            <span class="card-reviews">257 reviews</span>
        </div>
        <div class="row">
            <span class="card-price">Rs. 350/-</span>
            <div class="space-x-1"></div>
            <span class="card-price-original">Rs. 399/-</span>
        </div>
        <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
        </p>
    </div>
</div>`,
    },
    {
      title: "Card with Badge",
      component: (
        <div class="grid grid-demo">
          <div class="card-container">
            <div class="card">
              <img
                alt=""
                src="https://images-na.ssl-images-amazon.com/images/I/71jChzWGk5L.jpg"
                class="card-image"
              />
              <div class="card-content">
                <div class="card-badge">
                  <span>Featured</span>
                </div>
                <p class="card-subtitle">Napoleon Hill</p>
                <h3 class="card-title">Think and Grow Rich</h3>
                <div class="row">
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-gray card-rating">
                    star
                  </span>
                  <div class="space-x-1"></div>
                  <span class="card-reviews">257 reviews</span>
                </div>
                <div class="row">
                  <span class="card-price">Rs. 350/-</span>
                  <div class="space-x-1"></div>
                  <span class="card-price-original">Rs. 399/-</span>
                </div>
                <p class="card-description">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money isn’t necessarily about what you know. It’s about
                  how you behave. And behavior is hard to teach, even to really
                  smart people.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `<div class="card">
    <img
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg"
        class="card-image"
    />
    <div class="card-content">
        <div class="card-badge">
            <span>Featured</span>
        </div>
        <p class="card-subtitle">Morgan Housel</p>
        <h3 class="card-title">The Psychology of Money</h3>
        <div class="row">
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
                star
            </span>
            <span class="material-icons-round card-rating-gray card-rating">
                star
            </span>
            <div class="space-x-1"></div>
            <span class="card-reviews">257 reviews</span>
        </div>
        <div class="row">
            <span class="card-price">Rs. 350/-</span>
            <div class="space-x-1"></div>
            <span class="card-price-original">Rs. 399/-</span>
        </div>
        <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
        </p>
    </div>
</div>`,
    },
    {
      title: "Text Only Card",
      description: "(With / Without Badge)",
      component: (
        <div class="grid grid-demo">
          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <div class="card-badge">
                  <span>On Sale</span>
                </div>
                <p class="card-subtitle">Robert T. Kiyosaki</p>

                <h3 class="card-title">Rich Dad, Poor Dad</h3>

                <div class="row">
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-gray card-rating">
                    star
                  </span>
                  <div class="space-x-1"></div>
                  <span class="card-reviews">257 reviews</span>
                </div>
                <div class="row">
                  <span class="card-price">Rs. 350/-</span>
                  <div class="space-x-1"></div>
                  <span class="card-price-original">Rs. 399/-</span>
                </div>
                <p class="card-description">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money isn’t necessarily about what you know. It’s about
                  how you behave. And behavior is hard to teach, even to really
                  smart people.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <p class="card-subtitle">Robert T. Kiyosaki</p>

                <h3 class="card-title">Rich Dad, Poor Dad</h3>

                <div class="row">
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-gray card-rating">
                    star
                  </span>
                  <div class="space-x-1"></div>
                  <span class="card-reviews">257 reviews</span>
                </div>
                <div class="row">
                  <span class="card-price">Rs. 350/-</span>
                  <div class="space-x-1"></div>
                  <span class="card-price-original">Rs. 399/-</span>
                </div>
                <p class="card-description">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money isn’t necessarily about what you know. It’s about
                  how you behave. And behavior is hard to teach, even to really
                  smart people.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `<div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="card-badge"> // Remove this div to remove badge
            <span>On Sale</span>
          </div>
          <p class="card-subtitle">Robert T. Kiyosaki</p>

          <h3 class="card-title">Rich Dad, Poor Dad</h3>

          <div class="row">
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-gray card-rating">
              star
            </span>
            <div class="space-x-1"></div>
            <span class="card-reviews">257 reviews</span>
          </div>
          <div class="row">
            <span class="card-price">Rs. 350/-</span>
            <div class="space-x-1"></div>
            <span class="card-price-original">Rs. 399/-</span>
          </div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well
            with money isn’t necessarily about what you know. It’s about
            how you behave. And behavior is hard to teach, even to really
            smart people.
          </p>
        </div>
      </div>
    </div>`,
    },
    {
      title: "Card with Text Overlay",
      component: (
        <div class="grid grid-demo">
          <div class="card-container">
            <div class="card-text-overlay">
              <span>Out of Stock</span>
            </div>
            <div class="card">
              <img
                alt=""
                src="https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg"
                class="card-image"
              />
              <div class="card-content">
                <div class="card-badge">
                  <span>Featured</span>
                </div>
                <p class="card-subtitle">Morgan Housel</p>

                <h3 class="card-title">The Psychology of Money</h3>

                <div class="row">
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-yellow card-rating">
                    star
                  </span>
                  <span class="material-icons-round card-rating-gray card-rating">
                    star
                  </span>
                  <div class="space-x-1"></div>
                  <span class="card-reviews">257 reviews</span>
                </div>
                <div class="row">
                  <span class="card-price">Rs. 350/-</span>
                  <div class="space-x-1"></div>
                  <span class="card-price-original">Rs. 399/-</span>
                </div>
                <p class="card-description">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money isn’t necessarily about what you know. It’s about
                  how you behave. And behavior is hard to teach, even to really
                  smart people.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `   <div class="card-container">
      <div class="card-text-overlay"><span>Out of Stock</span></div>
      <div class="card">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg"
          class="card-image"
        />
        <div class="card-content">
          <div class="card-badge">
            <span>Featured</span>
          </div>
          <p class="card-subtitle">Morgan Housel</p>

          <h3 class="card-title">The Psychology of Money</h3>

          <div class="row">
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-yellow card-rating">
              star
            </span>
            <span class="material-icons-round card-rating-gray card-rating">
              star
            </span>
            <div class="space-x-1"></div>
            <span class="card-reviews">257 reviews</span>
          </div>
          <div class="row">
            <span class="card-price">Rs. 350/-</span>
            <div class="space-x-1"></div>
            <span class="card-price-original">Rs. 399/-</span>
          </div>
          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
        </div>
      </div>
    </div>`,
    },
    {
      title: "Card – Alternate Design",
      component: (
        <div class="card-container">
          <div class="card card-alt">
            <img
              alt=""
              src="https://cdn.dribbble.com/users/1484654/screenshots/12018955/media/9100234c9e8670830901cc9ee44aaa92.jpg"
              class="card-image"
            />

            <div class="card-content">
              <div class="card-badge">
                <span>new</span>
              </div>
              <p class="card-subtitle">Anil Lamba • 1 day ago</p>

              <h3 class="card-title">Personal Finance 101</h3>

              <p class="card-description">
                Timeless lessons on wealth, greed, and happiness doing well with
                money isn’t necessarily about what you know. It’s about how you
                behave. And behavior is hard to teach, even to really smart
                people.
              </p>
              <div class="row card-stats">
                <span class="material-icons-round card-rating card-rating-gray">
                  schedule
                </span>
                <div class="space-x-0-5"></div>
                <span class="card-reviews">13 mins</span>
                <div class="space-x-1"></div>
                <span class="material-icons-round card-rating card-rating-gray">
                  visibility
                </span>
                <div class="space-x-0-5"></div>
                <span class="card-reviews">257 views</span>
                <div class="space-x-1"></div>
                <span class="material-icons-round card-rating card-rating-gray">
                  favorite
                </span>
                <div class="space-x-0-5"></div>
                <span class="card-reviews">100 likes</span>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `   <div class="card-container">
      <div class="card card-alt">
        <img
          alt=""
          src="https://cdn.dribbble.com/users/1484654/screenshots/12018955/media/9100234c9e8670830901cc9ee44aaa92.jpg"
          class="card-image"
        />

        <div class="card-content">
          <div class="card-badge">
            <span>new</span>
          </div>
          <p class="card-subtitle">Anil Lamba • 1 day ago</p>

          <h3 class="card-title">Personal Finance 101</h3>

          <p class="card-description">
            Timeless lessons on wealth, greed, and happiness doing well with
            money isn’t necessarily about what you know. It’s about how you
            behave. And behavior is hard to teach, even to really smart
            people.
          </p>
          <div class="row card-stats">
            <span class="material-icons-round card-rating card-rating-gray">
              schedule
            </span>
            <div class="space-x-0-5"></div>
            <span class="card-reviews">13 mins</span>
            <div class="space-x-1"></div>
            <span class="material-icons-round card-rating card-rating-gray">
              visibility
            </span>
            <div class="space-x-0-5"></div>
            <span class="card-reviews">257 views</span>
            <div class="space-x-1"></div>
            <span class="material-icons-round card-rating card-rating-gray">
              favorite
            </span>
            <div class="space-x-0-5"></div>
            <span class="card-reviews">100 likes</span>
          </div>
        </div>
      </div>
    </div>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Card"
        description="A Card is a UI design pattern that groups related information in a flexible-size container visually resembling a card."
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

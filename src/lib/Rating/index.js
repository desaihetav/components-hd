import { SectionHeader, ComponentContainer } from "../../components";

export default function Modal() {
  const codeSnippets = [
    {
      title: "Rating",
      description:
        "Use `row` to contain rating stars, `rating-yellow` for colored stars and `rating-gray` for non colored stars.",
      component: (
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
        </div>
      ),
      code: `   <div class="row">
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
    </div>`,
    },
  ];
  return (
    <div className="w-full">
      <SectionHeader
        title="Ratings"
        description="Often denoted as stars, ratings indicate quality of a particular entity. Mostly used on eCommerce websites."
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

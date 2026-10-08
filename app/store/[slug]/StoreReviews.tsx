import Icon from "../../components/Icon";
import type { StoreItem } from "../catalog";
import type { AggregateRating, StoreReview } from "../reviews";

function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const rounded = Math.round(rating);
  return (
    <span
      className="flex gap-0.5 text-gold-400"
      role="img"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`${size} ${i < rounded ? "" : "opacity-25"}`}
          filled
        />
      ))}
    </span>
  );
}

type Props = {
  item: StoreItem;
  reviews: StoreReview[];
  aggregate: AggregateRating | null;
};

/**
 * Customer reviews block for a store item. Renders nothing when the item has
 * neither individual reviews nor an aggregate rating, so the visible page
 * always matches what the Product schema claims.
 */
export default function StoreReviews({ item, reviews, aggregate }: Props) {
  if (!aggregate && reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="mx-auto max-w-4xl px-5 pb-4 lg:px-8"
    >
      <h2
        id="reviews-heading"
        className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl"
      >
        Customer Reviews
      </h2>

      {aggregate && (
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-navy-950/10 bg-white px-5 py-4">
          <Stars rating={aggregate.ratingValue} size="h-5 w-5" />
          <p className="text-sm text-navy-950/70">
            <span className="font-bold text-navy-950">
              {aggregate.ratingValue.toFixed(1)} out of 5
            </span>{" "}
            based on {aggregate.reviewCount}{" "}
            {aggregate.reviewCount === 1 ? "review" : "reviews"} of the{" "}
            {item.title}
          </p>
        </div>
      )}

      {reviews.length > 0 && (
        <ul className="mt-6 space-y-5">
          {reviews.map((r) => (
            <li
              key={`${r.author}-${r.date}`}
              className="rounded-xl border border-navy-950/10 bg-white p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                    {r.author
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <p className="text-sm font-bold text-navy-950">{r.author}</p>
                </div>
                <time
                  dateTime={r.date}
                  className="text-xs text-navy-950/50"
                >
                  {new Date(`${r.date}T00:00:00Z`).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
              <div className="mt-3">
                <Stars rating={r.rating} />
              </div>
              {r.title && (
                <h3 className="mt-3 text-base font-bold text-navy-950">
                  {r.title}
                </h3>
              )}
              <p className="mt-2 text-[15px] leading-relaxed text-navy-950/70">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

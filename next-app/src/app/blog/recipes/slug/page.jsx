import DetailPage from "../../../components/blog/DetailPage";

export default function RecipeDetail({ params }) {
  return <DetailPage category="recipes" slug={params.slug} />;
}

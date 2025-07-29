import DetailPage from "../../../components/blog/DetailPage";

export default function ArticleDetail({ params }) {
  return <DetailPage category="articles" slug={params.slug} />;
}

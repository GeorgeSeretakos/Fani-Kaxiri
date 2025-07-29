import DetailPage from "../../../components/blog/DetailPage";

export default function MediaDetail({ params }) {
  return <DetailPage category="media" slug={params.slug} />;
}

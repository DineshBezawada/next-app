interface slugProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Slug({ params }: slugProps) {
  const { slug } = await params;
  if (slug?.length > 2) {
    return (
      <h2>
        We have more than two slugs first one is {slug[0]} and last one is {slug[slug?.length -1]}
      </h2>
    );
  }
  if (slug?.length === 2) {
    return (
      <h2>
        We have two slugs first one is {slug[0]} and second one is {slug[1]}
      </h2>
    );
  }
  if (slug?.length === 1) {
    return (
      <h2>
        We have only one slug that is {slug[0]}
      </h2>
    );
  }

  return <h2>Docs Page if don't have any slugs</h2>

}

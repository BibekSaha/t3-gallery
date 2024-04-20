import { db } from '~/server/db';

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/e2bff257-e9a5-4140-b539-b924c37e06ad-em0l29.jpg',
  'https://utfs.io/f/f582e5e3-0a9c-4863-9cc3-1de61c0b9fff-c8m6mv.png',
  'https://utfs.io/f/30f1790c-f7b8-4c26-a99c-de4da6a5f895-em0l28.jpg'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

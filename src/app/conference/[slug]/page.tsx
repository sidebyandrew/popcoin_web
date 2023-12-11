// export async function generateStaticParams() {
//     const posts = [{slug: "abc"}, {slug: "hello"}, {slug: "hi"},]
//
//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }

export default function ConferenceId({params}: { params: { slug: string } }) {
    return (
        <>
            <h1>Hello {params.slug}</h1>
        </>)
}
export async function GET() {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const posts = await data.json()

    return Response.json(posts)
}

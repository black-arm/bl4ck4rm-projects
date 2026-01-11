import { useArticlesByUsernameQuery } from "../domain/articles-query";

export function BlogsListContainer(){

    const username = "blackarm";

    const { data } = useArticlesByUsernameQuery(username);
    return <>
        {data && data.map((article: any) => (
            <div key={article.id} className="mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-blue-600 hover:underline">
                    {article.title}
                </a>
                <p className="text-gray-600 mt-2">{new Date(article.published_at).toLocaleDateString()}</p>
                <p className="mt-4 text-gray-800">{article.description}</p>
            </div>
        ))}
    </>
} 
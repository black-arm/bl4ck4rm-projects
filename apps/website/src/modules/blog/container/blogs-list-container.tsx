import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@bl4ck4rm-projects/ui-shared";
import { useArticlesByUsernameQuery } from "../domain/articles-query";

export function BlogsListContainer(){

    const username = "blackarm";

    const { data } = useArticlesByUsernameQuery(username);
    return <>
        {data && data.map((article: any) => (
            <Card key={article.id} className="mb-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {article.title}
                        </a>
                    </CardTitle>
                    <CardDescription>
                        {new Date(article.published_at).toLocaleDateString()}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground">{article.description}</p>
                </CardContent>
            </Card>
        ))}
    </>
} 
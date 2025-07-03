import Link from "next/link";

   
   type ParamProps = {
    params : Promise<{articleId:string}>,
    searchParams : Promise<{lang?:string}>
   }


   const NewsArticle = async({params,searchParams}:ParamProps) =>{
     const {articleId} = await params;
     const {lang} = await searchParams;
    return (
        <>
        <h2>News Article {articleId}</h2>
        <p>Reading in Language {lang} </p>

        <div style={{display:'grid'}}>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
        </>
    )
   }
   export default NewsArticle;
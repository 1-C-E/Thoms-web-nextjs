import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className={`mx-[90px]`}>
            <Link href="/banner_1">
                <Image src="/banner_1.svg" alt=""
                       width={1400}
                       height={900}
                       className={`ml-auto mr-auto rounded-[20px] mt-[40px] w-full`}
                />
            </Link>

            <div className={`flex mt-[45px] justify-between`}>

                <section className={`flex overflow-x-auto w-[25rem] space-x-[40px]`}>

                        <Image src="/articles/article_1.png" alt=""
                               width={200}
                               height={400}
                               className={`article`}/>

                        <Image src="/articles/article_2.png" alt=""
                               width={200}
                               height={400}
                               className={`article`}/>

                        <Image src="/articles/article_3.png" alt=""
                               width={200}
                               height={400}
                               className={`article`}/>

                        <Image src="/articles/article_4.png" alt=""
                               width={200}
                               height={400}
                               className={`article`}/>

                        <Image src="/articles/article_5.png" alt=""
                               width={200}
                               height={400}
                               className={`article`}/>



                    {/*<Link href="/article">
                        <Image src="/articles/article_1.png" alt=""
                               width={150}
                               height={400}
                               className={`article`}

                               />
                    </Link>

                    <Link href="/article">
                        <Image src="/articles/article_2.png" alt=""
                               width={150}
                               height={400}
                               className={`article`}/>
                    </Link>

                    <Link href="/article">
                        <Image src="/articles/article_3.png" alt=""
                               width={150}
                               height={400}
                               className={`article`}/>
                    </Link>

                    <Link href="/article">
                        <Image src="/articles/article_4.png" alt=""
                               width={150}
                               height={400}
                               className={`article`}/>
                    </Link>

                    <Link href="/article">
                        <Image src="/articles/article_5.png" alt=""
                               width={150}
                               height={400}
                               className={`article`}/>
                    </Link>*/}
                </section>

                <Link href="/banner_2" className={`ml-[30px] rounded-[20px]`}>
                    <Image src="/banner_2.svg" alt=""
                           width={600}
                           height={500}
                    className={`rounded-[20px] h-full`}/>
                </Link>
            </div>
        </main>
    );
}

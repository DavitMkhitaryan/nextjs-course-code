import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    // send a request to some backend server to fetch the piece with and id of router.query.projectid

    return(
        <div>
            <h1>The Porfolio Project Page</h1>
        </div>
    )
}

export default PortfolioProjectPage;
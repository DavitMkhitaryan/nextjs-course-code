import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        // load data...
        router.push({
            pathname: '/clients/[clientId]/[clientProjectId]',
            query: {clientId: 'max', clientProjectId: 'projecta'}
        });
    }

    return(
        <div>
            <h1>The Client Projects Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;
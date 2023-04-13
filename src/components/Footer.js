export default function Footer(){
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">
                &copy;2023 Donate Crypto, Inc.
            </p>
            <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link px-2 text-body-secondary" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-2 text-body-secondary" href="/create">New Campaign</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-2 text-body-secondary" href="/donate">Donate</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-2 text-body-secondary" href="/about">About</a>
                </li>
            </ul>
        </footer>
    )
}
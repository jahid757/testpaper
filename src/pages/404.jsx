import React from 'react';
import Container from '../components/Container';

const Error404 = () => {
    return (
        <Container>
            <div className="container h-100 flex-column d-flex align-items-center justify-content-center">
            <div className="card p-2 text-center shadow">
                <h5 className="bg-warning mb-3">Internet Disconnected</h5>
                <p className="h5 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam.</p>
                <span className="material-symbols-outlined refresh">
                    refresh
                    </span>
            </div>
        </div>
        </Container>
    );
}

export default Error404;

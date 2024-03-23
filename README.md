# Japahub-backend

Japahub-backend is a microservice architecture consisting of two main services: messenger and app. The messenger service is responsible for handling direct messages (linkups) and group chats (communities), while the app service manages various other aspects such as user management, authentication, posts, notifications, etc. Each of these functionalities is encapsulated within its own module within the app microservice.

## Prerequisites

Before getting started with Japahub-backend, ensure you have the following prerequisites installed:

- Docker: For containerization.
- Kubernetes: For orchestration.
- Helm: For managing Kubernetes applications. Install it by following the instructions [here](https://helm.sh).
- Ingress-Nginx Controller: For managing Ingress resources. Install it by following the instructions [here](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start).
- Scaffold: For automating development workflows. Install it by following the instructions [here](https://skaffold.dev/docs/install/).

Additionally, there is a shared library `@japahubs/shared` published to npm and installed on the services as an npm package.

## Getting Started

To start the project, follow these steps:

1. Clone the repository.

2. Ensure Docker and Kubernetes are running.

3. Install Helm, Ingress-Nginx Controller, and Scaffold as per the provided links.

4. Set up your host file by adding the following entry:

   ```
   127.0.0.1 japaserver.com
   ```

   You can open the host file in VSCode on macOS by running:

   ```
   code /etc/hosts
   ```

5. Run `skaffold dev` in the project directory to start the development environment.

6. Visit [http://japaserver.com/users/test](http://japaserver.com/users/test) on your browser.

7. If you see a blank Nginx page with an insecure connection warning, click anywhere on the browser screen and type `thisisunsafe`, then hit Enter to bypass it.

   Note: The URL `japaserver.com` is used because the Ingress-Nginx host is set to that.

## Environment Variables

### Messenger Service

- `MONGO_URL`: MongoDB connection URL.

### App Service

- `NATS_CLUSTER_NAME`: NATS cluster name.
- `NATS_URLS`: NATS server URLs.
- `REDIS_PORT`: Redis port.
- `REDIS_HOST`: Redis host.
- `REDIS_URL`: Redis connection URL.
- `NODE_ENV`: Environment (development, production, etc.).
- `APP_SECRET`: Secret key for app authentication.
- `MONGO_URL`: MongoDB connection URL.

## API Documentation

The current API documentation for Japahub-backend API can be found at: [Japahub-backend API Documentation](https://documenter.getpostman.com/view/24186009/2sA2r9Vi6E)

Feel free to refer to this documentation for detailed information about the available endpoints and their usage.

For any further assistance or inquiries, please refer to the project's documentation or contact the project maintainers.

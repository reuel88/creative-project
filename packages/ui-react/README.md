# Local Build

---

### Vite

#### Via Docker (Only - for now)

1. In this directory
2. Build image
    ```shell
    docker build -t ui-vite:latest -f ./dockerfiles/vite.prod.dockerfile .
    ```
3. Run image
    ```shell
    docker run --name vite-ui -p 5173:80 --rm -d ui-vite:latest   
    ```
4. Navigate to http://localhost:5173 on your browser


**Note: Don't forget to do a `docker stop vite-ui` to stop the container

---

### Storybook

#### Via Docker (Only - for now)

1. In this directory
2. Build image
    ```shell
    docker build -t ui-storybook:latest -f ./dockerfiles/storybook.prod.dockerfile .
    ```
3. Run image
    ```shell
    docker run --name storybook-ui -p 6006:80 --rm -d ui-storybook:latest   
    ```
4. Navigate to http://localhost:6006 on your browser


**Note: Don't forget to do a `docker stop storybook-ui` to stop the container

---

# Testing

Testing was setup using this article https://hung.dev/posts/jest-vite. Please refer back to it when having trouble
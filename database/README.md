```
docker build -t gmm_database .
docker run -it --name gmm_database --rm -p 3307:3306 gmm_database --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

```
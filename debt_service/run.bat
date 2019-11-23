docker build -t gmm_debt .
docker run -it --name gmm_debt --rm -p 7001:7001 gmm_debt
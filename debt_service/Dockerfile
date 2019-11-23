FROM arm32v7/python:3.8.0-slim-buster

COPY . /app
WORKDIR /app
RUN apt-get update && apt-get install build-essential -y
RUN pip install -r requirements.txt
EXPOSE 3000
CMD ["python", "app.py"]
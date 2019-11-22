FROM arm32v7/python:3.8.0-slim-buster

COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 3000
CMD ["python", "app.py"]
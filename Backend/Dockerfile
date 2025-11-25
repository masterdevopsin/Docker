FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir flask flask-cors

EXPOSE 8000

CMD ["python", "app.py"]

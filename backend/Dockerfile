FROM python:3.9
WORKDIR /code

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY . ./

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pip install -r ./requirements.txt

RUN python manage.py makemigrations
RUN python manage.py migrate

RUN python manage.py collectstatic --no-input -v 2

EXPOSE 8000

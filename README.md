# Django Rest Framework + Next.js + Tailwind

This is a simple Django Rest Framework with Next.js front-end implementation.

Includes the following:

Backend:  
* Django
* Django Rest Framework

Frontend:
* Next.js
* Tailwind 3

## Development instructions
0. Clone repository
1. Create `virtualenv` and activate  
```sh
python -m venv .venv
source .venv/bin/activate
```
2. Install Python requirements:
```sh
pip install -r requirements.txt
```
3. Set up DB  
```sh
python manage.py makemigrations api
python manage.py migrate
```

### Running the API locally
```sh
python.manage.py runserver
```
The backend server will running on `http://localhost:8000` and the admin page is available at `http://localhost:8000/admin`

## Setting up Front End
In a new shell `cd` into `www/` and install JavaScript dependencies.  
```
cd www
npm install
```

### Running the UI locally
```sh
npm run dev
```

The UI should be running on http://localhost:3000.

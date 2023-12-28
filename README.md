# EdgeRemover

A ML project to identify the edges of a paper and then crop the paper. For the webapp, React+Vite and Flask is used along with Axios to Fetch API and TailwindCSS for Styling.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Codeforme1234/EdgeRemover
```

Go to the project directory

```bash
  cd EdgeRemover
```

To Install and Run Frontend

```bash
  cd Client
  npm Install
  npm run dev
```

To Install and Run Backend

```bash
  cd Flask-server
  pip install Flask
  pip install (all packages used in ML code)
  python app.py
```

## Deployment Links

Hosted Links:-  
Frontend: https://crop-fe.vercel.app/  
Backend: https://imagecrop-cu5m.onrender.com/  
\*\* the backend is hosted on render and needed to be restart for use.(unpaid service issues) : /

## Screenshots

![Alt text](client\src\assets\Screenshot 2023-12-28 184329.png?raw=true "Before Uploading Image")
![Alt text](client\src\assets\Screenshot 2023-12-28 185028.png?raw=true "After Uploading Image")
![Alt text](client\src\assets\Screenshot 2023-12-28 185110.png?raw=true "After Cropping Image")

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import models, database, schemas

app = FastAPI(title="Kannan A S Portfolio API")

# Create tables
models.Base.metadata.create_all(bind=database.engine)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/api/profile")
def get_profile(db: Session = Depends(database.get_db)):
    profile = db.query(models.Profile).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@app.get("/api/skills")
def get_skills(db: Session = Depends(database.get_db)):
    return db.query(models.Skill).all()

@app.get("/api/projects")
def get_projects(db: Session = Depends(database.get_db)):
    return db.query(models.Project).all()

@app.get("/api/experience")
def get_experience(db: Session = Depends(database.get_db)):
    return db.query(models.Experience).all()

@app.post("/api/contact")
def send_message(msg: ContactMessage, db: Session = Depends(database.get_db)):
    new_msg = models.Message(name=msg.name, email=msg.email, message=msg.message)
    db.add(new_msg)
    db.commit()
    return {"status": "success", "message": "Message sent successfully!"}
